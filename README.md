# angular2-demo-docker

## Create a soft or symbolic link
    $ ln -s <project> /var/www/angular2-demo-docker
    
## Install the npm packages
    $ npm install
    $ npm run typings install

## Build Image
    $ docker build -t <name>/node-web-app:1.0 .docker/node/

## Docker Compose
    $ docker-compose up -d
