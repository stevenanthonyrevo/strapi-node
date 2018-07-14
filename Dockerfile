FROM node:9.11.1-alpine


WORKDIR /usr/app/strapi-node/strapi-node


RUN npm install 


CMD ["node server.js"]


EXPOSE 1337