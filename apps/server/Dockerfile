FROM node:18-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /usr/src/app

COPY ./dist ./dist
COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml
COPY ./prisma ./prisma
COPY ./.env ./.env

RUN npm i -g pnpm

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

RUN pnpm generate

EXPOSE 4000

ENTRYPOINT ["node", "dist/main.js"]