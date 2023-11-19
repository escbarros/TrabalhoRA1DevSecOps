FROM node:18.16.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./app
COPY ./api-entrypoint.sh /app/api-entrypoint.sh
RUN chmod +x ./api-entrypoint.sh
RUN npx prisma generate
ENV PORT=3333
EXPOSE 3333
