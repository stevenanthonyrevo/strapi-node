FROM node:9.11.1-alpine

# Create app directory
WORKDIR /usr/app/strapi-node/strapi-node

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 1337/tcp
CMD [ "npm", "start" ]