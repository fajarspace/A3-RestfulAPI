
const express = require('express');
const app = express();
const users = require('./users');

// Endpoint untuk halaman utama
app.get('/api', (req, res) => {
  res.send('Selamat datang di API sederhana Kelas A3');
});

// Endpoint untuk mendapatkan semua data pengguna
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Endpoint untuk mendapatkan data pengguna berdasarkan NIM
app.get('/api/users/:nim', (req, res) => {
  const { nim } = req.params;
  const user = users.find(u => u.nim === parseInt(nim));
  if (!user) {
    return res.status(404).send('Pengguna tidak ditemukan');
  }
  res.json(user);
});

// Menjalankan server
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});
