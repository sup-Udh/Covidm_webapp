# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN 
Learn more about the "RUN " Dockerfile command.
apk add --no-cache python g++ make
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "index.js"]