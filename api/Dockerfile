   
FROM node:16

RUN npm install -g nodemon
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 8080
CMD ["nodemon","index.js"]