FROM node:16.14.0-alpine3.14
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN cd /app
RUN yarn install
RUN yarn build
EXPOSE 3000
CMD ["node", "dist/index.js"]
