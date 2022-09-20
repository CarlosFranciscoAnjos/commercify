# Copied from https://www.tomray.dev/nestjs-docker-production

# Base image
FROM node:18.9.0-alpine3.15

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json package-lock.json /

# Install app dependencies
RUN npm install

# Bundle app source
COPY . /app

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "npm", "run", "start:prod" ]