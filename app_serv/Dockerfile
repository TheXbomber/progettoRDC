FROM node:16
ENV NODE_ENV=production
WORKDIR /app_serv
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production
COPY . .
EXPOSE 8080
CMD ["node", "main.js"]