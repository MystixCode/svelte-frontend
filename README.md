

## Developing

Start a development server:

```bash
 npm install
 npm run dev -- --port 3000 --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

Or with docker:

```bash
docker build -t svelte-frontend .
docker run --rm -d --name svelte-frontend -p 3000:3000 svelte-frontend
docker kill svelte-frontend
```
