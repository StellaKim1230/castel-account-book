# castel-account-book

[Lucas Han](https://wiki.lucashan.space/), [Stella Kim](https://www.jieunkim.site/)의 가계부 사이드 프로젝트입니다.

## 사용 기술

- Nest.js (v10)
- Fastify (v10)
- Prisma (v4)
- SQLite
- Remix (v2)
- React.js (v18)

## 개발 방법

```bash
// 원격 저장소의 코드를 받습니다.
$ git pull

// 의존성을 설치합니다.
$ pnpm install

// server, web을 빌드합니다.
$ pnpm build

// 로컬 환경에서 server, web을 실행합니다.
$ pnpm dev
```

## 배포

- docker로 배포합니다.

## 프로젝트 구조

### monorepo로 구성

```
castel-account-book
├─ apps
│  ├─ server
│  ├─ web
├─ .dockerignore
├─ .gitignore
├─ docker-compose.yaml
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
└─ README.md
```
