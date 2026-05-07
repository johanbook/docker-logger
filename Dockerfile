FROM node:26.0.0-alpine

WORKDIR /app

COPY package* ./
RUN npm ci

COPY server.js .
ENTRYPOINT [ "node" ]
CMD [  "server.js" ]
