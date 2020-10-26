FROM node:12.9.0
WORKDIR /opt
COPY . .
RUN npm install
EXPOSE 3010:3010
CMD ["node", "/opt/index.js"]