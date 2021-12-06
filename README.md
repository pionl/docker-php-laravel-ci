# Docker image for Laravel stack (for CI environment)

![https://cloud.docker.com/u/pionl/repository/docker/pionl/docker-php-laravel-ci](https://img.shields.io/docker/stars/pionl/docker-php-laravel-ci?style=flat-square)
![https://cloud.docker.com/u/pionl/repository/docker/pionl/docker-php-laravel-ci](https://img.shields.io/docker/pulls/pionl/docker-php-laravel-ci?style=flat-square)
![https://github.com/pionl/docker-php-laravel-ci](https://img.shields.io/github/license/pionl/docker-php-laravel-ci?style=flat-square)

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

Image | Badges
 --- | ---
**pionl/docker-php-laravel-ci:7.4-node-14** | ![](https://img.shields.io/microbadger/layers/pionl/docker-php-laravel-ci:7.4-node-14?style=flat-square) ![](https://img.shields.io/microbadger/image-size/pionl/docker-php-laravel-ci:7.4-node-14?style=flat-square)
**pionl/docker-php-laravel-ci:7.4-node-10** | ![](https://img.shields.io/microbadger/layers/pionl/docker-php-laravel-ci:7.4-node-10?style=flat-square) ![](https://img.shields.io/microbadger/image-size/pionl/docker-php-laravel-ci:7.4-node-10?style=flat-square)
**pionl/docker-php-laravel-ci:7.2-node-14-composer-2** | ![](https://img.shields.io/microbadger/layers/pionl/docker-php-laravel-ci:7.2-node-14-composer-2?style=flat-square) ![](https://img.shields.io/microbadger/image-size/pionl/docker-php-laravel-ci:7.2-node-14-composer-2?style=flat-square)
**pionl/docker-php-laravel-ci:7.2-node-14-composer-1** | ![](https://img.shields.io/microbadger/layers/pionl/docker-php-laravel-ci:7.2-node-14-composer-1?style=flat-square) ![](https://img.shields.io/microbadger/image-size/pionl/docker-php-laravel-ci:7.2-node-14-composer-1?style=flat-square)


## Built With

> This package is powered by docker work flow cli tool [wf-docker](https://github.com/wrk-flow/wf-docker).

* NodeJS (multiple versions)
* Composer v1 (only 7.2) / v2
* rsync
* git + open-ssh
* pecl: xdebug, redis
* PHP modules: pdo_mysql zip tokenizer xml json ctype mbstring intl exif pgsql calendar

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
