FROM node:18-bullseye-slim as build
ENV APP_NAME svelte-frontend
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18-bullseye-slim
ENV APP_NAME svelte-frontend
RUN mkdir /app
COPY --from=build /app/build /app
COPY --from=build /app/package.json  /app
COPY --from=build /app/package-lock.json /app
CMD node /app/index.js
