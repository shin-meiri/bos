# Tahap 1: Kompilasi React
FROM node:alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Tahap 2: Kontainer Akhir untuk Salin Data
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/dist ./html_output
