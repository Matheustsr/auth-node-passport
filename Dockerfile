FROM node:latest
 RUN mkdir /src
 WORKDIR /src
 COPY package.json /src/
 COPY package-lock.json /src/
 RUN npm install
 ADD . /src/