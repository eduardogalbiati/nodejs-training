FROM node:14

WORKDIR /catho-devfullstack-app
COPY package.json .
RUN npm install
COPY . .
#CMD npm start
#CMD nodemon

CMD [ "npm", "run", "start" ]