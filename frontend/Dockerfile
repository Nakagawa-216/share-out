FROM node:16.10.0-alpine

ENV HOME="/app" \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo

ENV HOST 0.0.0.0

WORKDIR ${HOME}

#yarn installが実行される前にpackage.json yarn.lockをコピー
COPY package.json yarn.lock ./

RUN apk update && \
    apk upgrade && \
    yarn install && \
    yarn global add nuxt && \
    rm -rf /var/cache/apk/*

COPY . .