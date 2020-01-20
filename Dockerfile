FROM node:13

WORKDIR /usr/play-node

# COPY package.json ./

# RUN npm install


CMD [ "npm", "run", "dev" ]