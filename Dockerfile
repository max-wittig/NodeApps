FROM ubuntu:16.10
COPY . .
RUN apt-get update
RUN apt-get -y install npm nodejs-legacy
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]