// index.js

// 1️⃣ Import Express
const express = require('express');
const app = express();

// 2️⃣ Middleware to parse JSON (optional but common)
app.use(express.json());

// 3️⃣ Define a simple route for testing
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


// 4️⃣ Use Render/Environment PORT or fallback to 3000 for local testing
const PORT = process.env.PORT || 3000;

// 5️⃣ Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});