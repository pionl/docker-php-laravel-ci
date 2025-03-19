# Docker image for Laravel stack (for CI environment)

A docker image `linux/amd64` for your Laravel application with PHP.

## Usage

```bash
docker run pionl/docker-php-laravel-ci:7.2 php --version
```

### Gitlab CI usage

Gitlab CI usage

```yml
image: pionl/docker-php-laravel-ci:8.2-node-20
```

## Extending our image

You can extend our image and add your own dependencies. Here is an example of how you can extend our image and add `node` and `npm` to it.

```Dockerfile
FROM pionl/docker-php-laravel-ci:8.2-node-20

RUN install-php-extensions some-extension
```

### Tags

![https://github.com/pionl/docker-php-laravel-ci](https://img.shields.io/github/license/pionl/docker-php-laravel-ci?style=flat-square)
![](https://img.shields.io/docker/pulls/pionl/docker-php-laravel-ci?style=flat-square) ![](https://img.shields.io/docker/stars/pionl/docker-php-laravel-ci?style=flat-square)

Image | Badges
 --- | ---
**pionl/docker-php-laravel-ci:8.4-node-22** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/8.4-node-22?style=flat-square)
**pionl/docker-php-laravel-ci:8.3-node-22** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/8.3-node-22?style=flat-square)
**pionl/docker-php-laravel-ci:8.3-node-20** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/8.3-node-20?style=flat-square)


## Built With

> This package is powered by docker work flow cli tool [wf-docker](https://github.com/wrk-flow/wf-docker).

* NodeJS (multiple versions)
* Composer v2
* rsync
* git + open-ssh
* PHP modules:
    * ctype
    * redis
    * pdo
    * pdo_mysql
    * gd
    * exif
    * mbstring
    * json
    * xml
    * tokenizer
    * xdebug
    * imagick
    * opcache
    * pcov
    * soap
    * intl
    * xsl
    * bcmath
    * zip

## Deprecated

This is a list of images that are deprecated and not updated anymore.

Installed PHP modules: ctype redis pdo pdo_mysql gd exif mbstring json xml tokenizer xdebug imagick opcache pcov

| Image                                                  | Badges                                                                                                             |
|--------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| **pionl/docker-php-laravel-ci:7.4-node-17**            | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.4-node-17?style=flat-square)            |
| **pionl/docker-php-laravel-ci:7.4-node-14**            | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.4-node-14?style=flat-square)            |
| **pionl/docker-php-laravel-ci:7.4-node-10**            | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.4-node-10?style=flat-square)            |
| **pionl/docker-php-laravel-ci:7.2-node-17**            | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.2-node-17?style=flat-square)            |
| **pionl/docker-php-laravel-ci:7.2-node-17-composer-1** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.2-node-17-composer-1?style=flat-square) |
| **pionl/docker-php-laravel-ci:7.2-node-14**            | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.2-node-14?style=flat-square)            |
| **pionl/docker-php-laravel-ci:7.2-node-14-composer-1** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.2-node-14-composer-1?style=flat-square) |

## Find Us

* [GitHub](https://github.com/pionl/docker-php-laravel-ci)
* [Docker Hub](https://cloud.docker.com/repository/docker/pionl/docker-php-laravel-ci)

## Contributions

1. Run `npm install`
2. Change the `Dockerfile.template`
3. For new php versions edit `package.json` and `wf-docker.tags` property
4. Use `npm run build` to build and push the image
  1. Optionally build only desired image by running `./node_modules/.bin/wf-docker build 8.2-node-20`

> See package.json scripts for advanced usage or [wf-docker](https://github.com/wrk-flow/wf-docker)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
