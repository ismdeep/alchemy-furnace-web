FROM hub.deepin.com/library/nginx:latest

COPY ./dist/ /usr/share/nginx/html/
