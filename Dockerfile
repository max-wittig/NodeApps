FROM node:10-stretch

ENV APP_DIR=/opt/nodeapps
ENV USERNAME=nodeapps

RUN groupadd $USERNAME \
  && useradd --gid $USERNAME --shell /bin/bash --create-home $USERNAME

WORKDIR $APP_DIR
COPY package.json .
RUN npm install

COPY . .
RUN chown -R $USERNAME:$USERNAME $APP_DIR

USER $USERNAME
EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["start"]
