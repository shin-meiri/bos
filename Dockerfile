# Stage 1: Build aplikasi
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Instal semua dependensi termasuk devDependencies untuk kebutuhan build
RUN npm ci 
COPY . .
# Perintah yang menyebabkan error pada project Anda
RUN npm run build 

# Stage 2: Production env
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
