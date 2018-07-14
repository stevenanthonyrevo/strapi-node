FROM node:9.11.1-alpine


WORKDIR /usr/app/strapi-node/strapi-node


RUN npm install 


EXPOSE 1337


CMD ["npm start"]
