FROM node:16 AS builder
WORKDIR /src
COPY . .
RUN set -e; \
    yarn install; \
    yarn build

FROM nginx:latest
COPY --from=builder /src/dist/ /usr/share/nginx/html/