FROM node:16.14.0-alpine

ENV HOME="/app" \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo 

ENV HOST 0.0.0.0

WORKDIR ${HOME}

#yarn installが実行される前にpackage.json yarn.lockをコピー
COPY package.json yarn.lock ./

RUN apk update && \
    apk upgrade && \
    apk add --update yarn && \
    yarn install && \
    yarn global add nuxt@2 && \
    rm -rf /var/cache/apk/*

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN yarn build

CMD ["yarn", "dev"]
