FROM node:10-stretch

RUN groupadd node \
  && useradd --gid node --shell /bin/bash --create-home node

WORKDIR /opt/nodeapps
COPY package.json .
RUN npm install

COPY . .
RUN chown -R node:node /opt/nodeapps

USER node
EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["start"]
