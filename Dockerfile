# --- Tahap 1: Kompilasi & Build dengan Node ---
FROM node:20-alpine AS builder
WORKDIR /app

# Salin berkas package untuk instalasi dependensi
COPY package*.json ./
RUN npm ci

# Salin seluruh kode proyek dan lakukan build
COPY . .
RUN npm run build

# --- Tahap 2: Menjalankan Hasil Kompilasi dengan Nginx ---
FROM nginx:alpine
# Hapus halaman bawaan Nginx
RUN rm -rf /usr/share/nginx/html/*

# Salin hasil kompilasi dari tahap 1 ke folder Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Salin konfigurasi SPA Vite agar tidak eror saat refresh
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
