# --- Tahap 1: Kompilasi & Build dengan Node ---
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Tahap 2: Menjalankan Hasil Kompilasi dengan Nginx Alpine ---
FROM nginx:alpine

# Hapus file bawaan Nginx agar bersih
RUN rm -rf /usr/share/nginx/html/*

# Salin hasil kompilasi dari tahap 1 ke folder penyajian Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Salin konfigurasi routing SPA yang baru
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
