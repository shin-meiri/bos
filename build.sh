#!/bin/sh
echo '=== 1. MENCARI LOKASI REPOSITORI ==='
TARGET_DIR=$(find / -name package.json -not -path '*/node_modules/*' -quit | sed 's/package.json//')

if [ -z "$TARGET_DIR" ]; then
  echo 'ERROR: package.json tidak ditemukan!'
  exit 1
fi

cd "$TARGET_DIR"
echo "Berhasil masuk ke direktori: $(pwd)"

echo '=== 2. MENGINSTAL DEPENDENCIES FRONTEND ==='
npm install

echo '=== 3. PROSES NPM RUN BUILD ==='
npm run build

echo '=== 4. MEMINDAHKAN HASIL BUILD KE /mnt/sdb/www ==='
rm -rf /mnt/sdb/www/*

if [ -d "dist" ]; then
  cp -r dist/* /mnt/sdb/www/
  echo '=== SUCCESS: BUILD VITE SELESAI ==='
elif [ -d "build" ]; then
  cp -r build/* /mnt/sdb/www/
  echo '=== SUCCESS: BUILD CRA SELESAI ==='
else
  echo 'ERROR: Folder hasil build tidak ditemukan!'
  exit 1
fi
