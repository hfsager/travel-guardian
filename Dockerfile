FROM node:14-alpine

RUN apk add --no-cache python3 g++ make

WORKDIR /app

COPY . /app

RUN yarn install 

RUN yarn build

CMD yarn start -p $PORT