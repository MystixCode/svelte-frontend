# svelte-frontend
an example/template for a website build with svelte-kit \
\
contains:
- css navigation with burger button
- component/page/layout example
- global css file
- connecting to API for data (https://github.com/goat-tool/goat)
- stores

Demo: https://svelte-frontend.mindlabs.dev/

## developing

Start a development server:

```bash
 npm install
 npm run dev -- --port 3000 --open
```

## building

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
