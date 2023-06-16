#!/bin/sh

##
# Installs install-php-extensions for easy PHP installment
# - https://github.com/mlocati/docker-php-extension-installer
##

# Let's set a sane environment
set -o errexit
set -o nounset

apt-get update
apt-get install -y git zip vim bash

# Install package

curl -L https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions \
--output /usr/local/bin/install-php-extensions

chmod uga+x /usr/local/bin/install-php-extensions
sync

install-php-extensions ctype redis pdo pdo_mysql gd exif mbstring json xml tokenizer xdebug imagick opcache pcov soap intl xsl

php -m

# Remove everything
rm -r /tmp/php-shared-tools
