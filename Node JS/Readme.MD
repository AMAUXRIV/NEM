# Node.js

Node.js adalah sebuah platform runtime JavaScript yang berjalan di sisi server. Dibangun di atas mesin JavaScript V8 dari Google Chrome, Node.js memungkinkan dalam menjalankan kode JavaScript di sisi server.

## Instalasi

Untuk menginstal Node.js, dapat dilakukan dengan cara sebagai berikut:\n\n1. Unduh Node.js dari website resmi Node.js (https://nodejs.org/)
2. Install Node.js pada komputer Anda
3. Setelah selesai, cek versi Node.js dengan perintah `node -v` pada terminal

## Cara Kerja


Node.js didesain untuk dapat mengatasi masalah real-time, dengan menggunakan event loop yang non-blocking I/O. Hal ini memungkinkan Node.js dapat menangani banyak koneksi secara bersamaan tanpa menghabiskan banyak memori untuk setiap koneksi.

## Penggunaan

Berikut ini contoh kode program Node.js sederhana:

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

Kode program di atas merupakan sebuah program yang menjalankan server HTTP pada port 3000 dan memberikan respons berupa plain text "Hello, World!" saat sebuah permintaan diterima. Untuk menjalankan program, cukup jalankan perintah `node namafile.js` pada terminal.
