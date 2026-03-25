// index.js

// 1️⃣ Import Express
const express = require('express');
const app = express();

// 2️⃣ Optional: parse JSON
app.use(express.json());

// 3️⃣ Define a test route
app.get('/', (req, res) => {
  res.send('Hello World! Your backend is live 🚀');
});
app.get('/login', (req, res) => {
  res.send('Login route is working!');
});

// 4️⃣ Use Railway PORT or fallback to 3000
const PORT = 3000;

// 5️⃣ Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});