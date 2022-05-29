FROM node:lts-slim
WORKDIR /app
COPY package.json yarn.lock ./
EXPOSE 3000
VOLUME ["/usr/local/share/.cache/yarn/v6/"]
RUN yarn --ignore-scripts
CMD npm start -- -h 0.0.0.0 --no-open
