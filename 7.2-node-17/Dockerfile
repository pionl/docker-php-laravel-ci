FROM php:7.2

MAINTAINER Martin Kluska <martin@kluska.cz>

ENV NVM_DIR /root/.nvm
ENV NODE_VERSION 17.3.0
ENV COMPOSER_VERSION 1.10.16

# Install Node.js
RUN mkdir $NVM_DIR \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash \
    && chmod +x $NVM_DIR/nvm.sh \
    && $NVM_DIR/nvm.sh \
    && ln -sf /root/.nvm/versions/node/v$NODE_VERSION/bin/node /usr/bin/nodejs \
    && ln -sf /root/.nvm/versions/node/v$NODE_VERSION/bin/node /usr/bin/node \
    && ln -sf /root/.nvm/versions/node/v$NODE_VERSION/bin/npm /usr/bin/npm \
    && npm install -g npm@8.1.3 -f


# Install shared php setup
COPY /php-shared-tools /tmp/php-shared-tools

RUN chmod uga+x /tmp/php-shared-tools/install.sh
RUN /tmp/php-shared-tools/install.sh

# Install composer
RUN curl -sS https://getcomposer.org/installer | \
    php -- --install-dir=/usr/local/bin/ --filename=composer --version=$COMPOSER_VERSION


# Install rsync
RUN apt-get update && apt-get install -y rsync && rm -r /var/lib/apt/lists/*

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["php", "-a"]
