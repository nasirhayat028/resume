FROM node:20-alpine 

WORKDIR /cv

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]