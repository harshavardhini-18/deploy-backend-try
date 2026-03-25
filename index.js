// index.js

// 1️⃣ Import Express
const express = require('express');
const app = express();

// 2️⃣ Middleware to parse JSON (optional but common)
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! Your backend is live 🚀');
});
app.get('/login', (req, res) => {
  res.send('Login route is working!');
});
app.get('/signup', (req, res) => {
  res.send('Signup route is working!');

});
app.get('/settings', (req, res) => {
  res.send('Settings route is working!');
});
app.get('/profile', (req, res) => {
  res.send('Profile route is working!');
});
app.get('/dashboard', (req, res) => {
  res.send('Dashboard route is working!');
});



const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});