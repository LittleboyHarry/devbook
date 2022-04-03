FROM node:lts-slim
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --ignore-scripts
EXPOSE 3000
# CMD npm start
CMD npm start -- -h 0.0.0.0 --no-open
