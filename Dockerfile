FROM node:9.11.1-alpine


WORKDIR /usr/app/strapi-node/strapi-node


RUN npm install 


CMD ["npm start"]


EXPOSE 1337