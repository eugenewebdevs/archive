FROM node:10
WORKDIR /migrations
ADD . /migrations
RUN npm install
ENV NAME docker_pres_migration
CMD ["node", "index.js"]
