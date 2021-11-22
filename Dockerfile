FROM node:16.13-alpine3.12 as build

RUN mkdir -p /frontend

WORKDIR /frontend

COPY package.json /frontend

RUN npm install

COPY . /frontend

RUN npm run ng build --configuration=production --output-path=dist

FROM nginx:1.21.4

RUN  rm -rf /etc/nginx/conf.d/default.conf

COPY conf.d/app.conf /etc/nginx/conf.d/app.conf

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=build /frontend/dist/auberdine-frontend /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
