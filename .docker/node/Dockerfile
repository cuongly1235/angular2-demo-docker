FROM ubuntu:14.04

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm

RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN usermod -u 1000 www-data

RUN mkdir -p /var/www/angular2-demo-docker
WORKDIR /var/www/angular2-demo-docker

EXPOSE 8080
ENTRYPOINT ["npm", "start"]