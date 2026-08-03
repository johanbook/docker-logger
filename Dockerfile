FROM node:26.5.1-alpine

WORKDIR /app

COPY package* ./
RUN npm ci

COPY server.js .
ENTRYPOINT [ "node" ]
CMD [  "server.js" ]
