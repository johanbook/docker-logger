FROM node:24.0.2-alpine

WORKDIR /app

COPY package* ./
RUN npm ci

COPY server.js .
ENTRYPOINT [ "node" ]
CMD [  "server.js" ]
