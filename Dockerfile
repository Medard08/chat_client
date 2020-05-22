FROM node:current-slim

WORKDIR /app

COPY *.json /app/

RUN npm install

EXPOSE 4200

COPY ./src  /app/src

CMD ["npm", "start"]