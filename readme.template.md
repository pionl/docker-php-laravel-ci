# --DESCRIPTION--

A docker image for your Laravel application with PHP.


## Usage
```
docker run --IMAGE_NAME--:7.2 php --version
```

### Gitlab CI usage

Gitlab CI usage

```shell
image: --IMAGE_NAME--:7.2
```

### Tags

![https://github.com/--IMAGE_NAME--](https://img.shields.io/github/license/--IMAGE_NAME--?style=flat-square)
--TAGS--
#### Deprecated

This is a list of images that are deprecated and not updated anymore. 

Installed PHP modules: ctype redis pdo pdo_mysql gd exif mbstring json xml tokenizer xdebug imagick opcache pcov

Image | Badges
 --- | ---
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

## Find Us

* [GitHub](https://github.com/--IMAGE_NAME--)
* [Docker Hub](https://cloud.docker.com/repository/docker/--IMAGE_NAME--)

## Contributions

1. Run `npm install`
2. Change the `Dockerfile.template`
3. For new php versions edit `package.json` and `wf-docker.tags` property
4. Use `npm run build` to build image

> See package.json scripts for advanced usage or [wf-docker](https://github.com/wrk-flow/wf-docker)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
