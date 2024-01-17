FROM node:latest as build
WORKDIR /app

COPY ./ /app/
RUN npm install
RUN npm run build --prod
FROM nginx:latest

COPY --from=build /app/dist/fr-administration-front/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80