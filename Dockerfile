FROM node:10

WORKDIR /usr/src/app
COPY . .
RUN npm install

ENV HOST 0.0.0.0
ENV PORT 3000
ENTRYPOINT [ "node", "server.js" ]