FROM node:16-alpine AS BUILDER

RUN apk add --no-cache libc6-compat bash

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn

COPY next.config.js ./next.config.js
COPY src ./src
COPY public ./public
COPY styles ./styles
COPY prisma ./prisma
COPY .env ./.env
COPY .docker ./.docker

RUN chmod +x .docker/entrypoint.sh

ENV NEXT_TELEMETRY_DISABLED 1
