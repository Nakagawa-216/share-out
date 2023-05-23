FROM ruby:3.2.1-alpine3.17

#alpineに足りない依存パッケージを選択的にインストール
ENV RUNTIME_PACKAGES="mysql-client mysql-dev tzdata nodejs" \
    DEV_PACKAGES="build-base curl-dev" \
    HOME="/app" \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyos

RUN mkdir /app
WORKDIR /app

ADD Gemfile /app/Gemfile
ADD Gemfile.lock /app/Gemfile.lock

RUN apk update && \
    apk upgrade && \
    apk add --update --no-cache ${RUNTIME_PACKAGES} && \
    apk add --update --virtual build-dependencies --no-cache ${DEV_PACKAGES} && \
    bundle install -j4 && \
    apk del build-dependencies && \
    rm -rf /usr/local/bundle/cache/* \
    /usr/local/share/.cache/* \
    /var/cache/* \
    /tmp/* \
    /usr/lib/mysqld* \
    /usr/bin/mysql*
