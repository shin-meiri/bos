# --- Tahap 1: Build Vite ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Tahap 2: Nginx ---
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
# Menyalin hasil build dari tahap 1 ke folder Nginx internal
COPY --from=builder /app/dist /usr/share/nginx/html
# Menyalin config routing SPA
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
