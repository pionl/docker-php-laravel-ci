# Docker image for Laravel stack (for CI environment)

A docker image for your Laravel application with PHP.


## Usage
```
docker run pionl/docker-php-laravel-ci:7.2 php --version
```

### Gitlab CI usage

Gitlab CI usage

```shell
image: pionl/docker-php-laravel-ci:7.2
```

### Tags

![https://github.com/pionl/docker-php-laravel-ci](https://img.shields.io/github/license/pionl/docker-php-laravel-ci?style=flat-square)
![](https://img.shields.io/docker/pulls/pionl/docker-php-laravel-ci?style=flat-square) ![](https://img.shields.io/docker/stars/pionl/docker-php-laravel-ci?style=flat-square)

Image | Badges
 --- | ---
**pionl/docker-php-laravel-ci:8.2-node-18** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/8.2-node-18?style=flat-square)
**pionl/docker-php-laravel-ci:8.1-node-17** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/8.1-node-17?style=flat-square)
**pionl/docker-php-laravel-ci:8.0-node-17** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/8.0-node-17?style=flat-square)
**pionl/docker-php-laravel-ci:7.4-node-17** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.4-node-17?style=flat-square)
**pionl/docker-php-laravel-ci:7.4-node-14** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.4-node-14?style=flat-square)
**pionl/docker-php-laravel-ci:7.4-node-10** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.4-node-10?style=flat-square)
**pionl/docker-php-laravel-ci:7.2-node-17** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.2-node-17?style=flat-square)
**pionl/docker-php-laravel-ci:7.2-node-17-composer-1** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.2-node-17-composer-1?style=flat-square)
**pionl/docker-php-laravel-ci:7.2-node-14** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.2-node-14?style=flat-square)
**pionl/docker-php-laravel-ci:7.2-node-14-composer-1** | ![](https://img.shields.io/docker/image-size/pionl/docker-php-laravel-ci/7.2-node-14-composer-1?style=flat-square)


## Built With

> This package is powered by docker work flow cli tool [wf-docker](https://github.com/wrk-flow/wf-docker).

* NodeJS (multiple versions)
* Composer v1 (only 7.2) / v2
* rsync
* git + open-ssh
* PHP modules: ctype redis pdo pdo_mysql gd exif mbstring json xml tokenizer xdebug imagick opcache pcov

## Find Us

* [GitHub](https://github.com/pionl/docker-php-laravel-ci)
* [Docker Hub](https://cloud.docker.com/repository/docker/pionl/docker-php-laravel-ci)

## Contributions

1. Run `npm install`
2. Change the `Dockerfile.template`
3. For new php versions edit `package.json` and `wf-docker.tags` property
4. Use `npm run build` to build image

> See package.json scripts for advanced usage or [wf-docker](https://github.com/wrk-flow/wf-docker)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
