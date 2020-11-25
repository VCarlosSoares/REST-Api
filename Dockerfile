FROM node:carbon

WORKDIR /REST

COPY package*.json ./
RUN npm install
COPY . .