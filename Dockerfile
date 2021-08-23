# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN 
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "index.js"]
