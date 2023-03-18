FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV DB_URI mongodb://mongo_contenedor:27017/myapp
ENV JWT_SECRET="secret"
ENV PORT=1000

EXPOSE 1000

CMD ["npm", "run", "dev"]
