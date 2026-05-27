FROM --platform=linux/amd64 php:8.2

LABEL org.opencontainers.image.authors="martin@kluska.cz"

ENV NVM_DIR=/root/.nvm

# Install rsync and other tools
RUN apt-get update && apt-get install -y rsync gdb && rm -r /var/lib/apt/lists/*

# Install shared php setup
COPY /php-shared-tools /tmp/php-shared-tools

RUN chmod uga+x /tmp/php-shared-tools/install.sh &&  /tmp/php-shared-tools/install.sh

# Install composer
RUN curl -sS https://getcomposer.org/installer | \
    php -- --install-dir=/usr/local/bin/ --filename=composer --version=2.9.8

# Install Node.js
RUN mkdir $NVM_DIR \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
RUN bash -c "source $NVM_DIR/nvm.sh && nvm install 18.20.8"

RUN ln -sf $NVM_DIR/versions/node/v18.20.8/bin/node /usr/bin/nodejs \
    && ln -sf $NVM_DIR/versions/node/v18.20.8/bin/node /usr/bin/node \
    && ln -sf $NVM_DIR/versions/node/v18.20.8/bin/npm /usr/bin/npm

RUN npm install -g npm@10.8.2 -f

# Fix Warning: PHP Startup: Invalid date.timezone value '', using 'UTC' instead in Unknown on line 0
# BASH (cat: /etc/timezone: No such file or directory)
RUN echo "UTC" >> /etc/timezone

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["php", "-a"]
