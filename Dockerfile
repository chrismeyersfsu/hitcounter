FROM node:6-slim

WORKDIR /usr/src/hitcounter
COPY package.json .
RUN npm install
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
