FROM node:10
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 8080
ENV NAME docker_pres_frontend
CMD ["node", "index.js"]
