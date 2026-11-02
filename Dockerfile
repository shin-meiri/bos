# Stage 1: Build aplikasi Vite
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Sajikan menggunakan Nginx
FROM nginx:alpine
# Menyalin hasil build Vite (biasanya di folder dist) ke folder default Nginx
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
