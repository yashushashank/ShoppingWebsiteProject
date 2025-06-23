FROM node:20-bookworm-slim  

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install  # No need to rebuild bcrypt manually

COPY . .

EXPOSE 5000

CMD ["npm", "start"]