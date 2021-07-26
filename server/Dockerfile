FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .

RUN npm i -g @nestjs/cli
RUN npm i --production=true

RUN apt -q update && apt -qy install netcat

COPY . .

RUN npm run build

CMD ["sh", "-c", "npx typeorm migration:run -c prod && npm run start:prod"]