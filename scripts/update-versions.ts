import fs from 'fs';
import path from 'path';
import semver from 'semver';

const PACKAGE_JSON_PATH = path.resolve(__dirname, '../package.json');

interface Tag {
  tag: string;
  docker: {
    php: string;
    node: string;
    npm: string;
    composer: string;
  };
}

interface PackageJson {
  [key: string]: any;
  "wf-docker": {
    image: string;
    platforms: string[];
    tags: Tag[];
    run: string[];
  };
}

interface NodeRelease {
  version: string;
  npm?: string;
}

interface ComposerRelease {
  path: string;
  version: string;
  'min-php': number;
}

interface ComposerVersions {
  stable: ComposerRelease[];
  [key: string]: any;
}

async function fetchNodeReleases(): Promise<NodeRelease[]> {
  const response = await fetch('https://nodejs.org/dist/index.json');
  if (!response.ok) {
    throw new Error(`Failed to fetch Node releases: ${response.statusText}`);
  }
  return await response.json();
}

async function fetchComposerReleases(): Promise<ComposerVersions> {
  const response = await fetch('https://getcomposer.org/versions');
  if (!response.ok) {
    throw new Error(`Failed to fetch Composer releases: ${response.statusText}`);
  }
  return await response.json();
}

function parsePhpVersion(phpVersion: string): number {
  const parts = phpVersion.split('.');
  const major = parseInt(parts[0] || '0', 10);
  const minor = parseInt(parts[1] || '0', 10);
  const patch = parseInt(parts[2] || '0', 10);
  return major * 10000 + minor * 100 + patch;
}

async function main() {
  try {
    const nodeReleases = await fetchNodeReleases();
    const composerData = await fetchComposerReleases();
    const composerStable = composerData.stable;

    const pkgData = fs.readFileSync(PACKAGE_JSON_PATH, 'utf-8');
    const pkg: PackageJson = JSON.parse(pkgData);

    const tags = pkg['wf-docker'].tags;
    let updatedCount = 0;

    for (const tag of tags) {
      const phpVersion = tag.docker.php;
      // Get the target node major version from the existing node version in the tag
      const targetNodeMajor = parseInt(tag.docker.node.split('.')[0] || '0', 10);

      // 1. Find the highest Node version for the target major version
      const compatibleNodeReleases = nodeReleases.filter(release => {
        const versionNoV = release.version.startsWith('v') ? release.version.slice(1) : release.version;
        return semver.major(versionNoV) === targetNodeMajor;
      });

      if (compatibleNodeReleases.length === 0) {
        console.warn(`No Node releases found for major version ${targetNodeMajor} (tag: ${tag.tag})`);
        continue;
      }

      compatibleNodeReleases.sort((a, b) => semver.rcompare(a.version, b.version));
      const latestNodeRelease = compatibleNodeReleases[0];
      const newNodeVersion = latestNodeRelease.version.startsWith('v') ? latestNodeRelease.version.slice(1) : latestNodeRelease.version;
      const newNpmVersion = latestNodeRelease.npm;

      // 2. Find the highest Composer version compatible with PHP version
      const phpInt = parsePhpVersion(phpVersion);
      
      const compatibleComposerReleases = composerStable.filter(release => {
        return release['min-php'] <= phpInt;
      });

      if (compatibleComposerReleases.length === 0) {
        console.warn(`No Composer releases found for PHP version ${phpVersion} (tag: ${tag.tag})`);
        continue;
      }

      compatibleComposerReleases.sort((a, b) => semver.rcompare(a.version, b.version));
      const latestComposerRelease = compatibleComposerReleases[0];
      const newComposerVersion = latestComposerRelease.version;

      // 3. Update the tag
      if (
        tag.docker.node !== newNodeVersion ||
        tag.docker.npm !== newNpmVersion ||
        tag.docker.composer !== newComposerVersion
      ) {
        console.log(`Updating tag ${tag.tag}:`);
        console.log(`  Node: ${tag.docker.node} -> ${newNodeVersion}`);
        console.log(`  NPM: ${tag.docker.npm} -> ${newNpmVersion}`);
        console.log(`  Composer: ${tag.docker.composer} -> ${newComposerVersion}`);
        
        tag.docker.node = newNodeVersion;
        if (newNpmVersion) {
          tag.docker.npm = newNpmVersion;
        }
        tag.docker.composer = newComposerVersion;
        updatedCount++;
      }
    }

    if (updatedCount > 0) {
      fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(pkg, null, 2) + '\n', 'utf-8');
      console.log(`Successfully updated ${updatedCount} tags in package.json.`);
    } else {
      console.log('No updates were necessary.');
    }
  } catch (error) {
    console.error('Error updating versions:', error);
    process.exit(1);
  }
}

main();
