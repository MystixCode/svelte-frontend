
# svelte-frontend

This is a frontend for a api



## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash

 npm install
 npm run dev -- --port 3000 --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

## Run the build with nodejs

To run a production version of your app:

```bash
node build/index.js
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Build and run with docker

```bash
docker build -t svelte-frontend .

# with port mapping
docker run --rm -d --name svelte-frontend -p 3000:3000 svelte-frontend

# or use host network for testing
docker run --rm -d --name svelte-frontend --network host svelte-frontend

# kill the docker container
docker kill svelte-frontend
```

## Dev run with docker

//todo: dev docker compose file with volume and hot reload

```bash
docker build -f Dockerfile.dev -t svelte-frontend-dev .

docker run -d -p 3000:3000 --rm --name svelte-frontend-dev svelte-frontend-dev
docker run --rm -d --name svelte-frontend-dev --network host svelte-frontend-dev

docker kill svelte-frontend-dev
```
