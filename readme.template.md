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

## Built With

> This package is powered by docker work flow cli tool [wf-docker](https://github.com/wrk-flow/wf-docker).

* NodeJS (multiple versions)
* Composer v1 (only 7.2) / v2
* rsync
* git + open-ssh
* pecl: xdebug, redis
* PHP modules: pdo_mysql zip tokenizer xml json ctype mbstring intl exif pgsql calendar

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
