FROM node:16.5.0-alpine

WORKDIR /app

COPY package* ./
RUN npm ci

COPY server.js .
ENTRYPOINT [ "node" ]
CMD [  "server.js" ]
