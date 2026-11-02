# Stage 1: Build aplikasi Vite
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Sajikan menggunakan Nginx
FROM nginx:stable-alpine
# Salin hasil build Vite ke direktori default Nginx
COPY --from=builder /app/dist /usr/share/nginx/html
# Salin konfigurasi custom Nginx jika ada (opsional, lihat langkah 2)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
