FROM node:16-alpine AS BUILDER

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install

COPY next.config.js ./next.config.js

COPY src ./src
COPY public ./public
COPY styles ./styles

CMD ["yarn", "dev"]