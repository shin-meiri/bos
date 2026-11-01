# Tahap 1: Kompilasi React
FROM node:alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Tahap 2: Kontainer Minimalis untuk Menyalin Hasil Build
FROM alpine:latest
WORKDIR /app
# Menyalin hasil build dari Tahap 1 ke folder internal
COPY --from=builder /app/dist ./html_output