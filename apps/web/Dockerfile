FROM node:18-slim

WORKDIR /usr/src/app

COPY ./build ./build
COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm i -g pnpm

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

EXPOSE 3000

ENTRYPOINT ["node", "build/index.js"]
