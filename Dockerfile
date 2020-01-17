FROM node:13

WORKDIR /usr/src/promise

COPY package.json ./

RUN npm install


CMD [ "npm", "run", "dev" ]