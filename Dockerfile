# stage 1
FROM node:latest as node

# RUN mkdir /app
WORKDIR /app

# COPY package.json /app
COPY . .

RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/AlicorpTest /usr/share/nginx/html