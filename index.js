const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! Your backend is live 🚀');
});

app.get('/login', (req, res) => {
  res.send('Login route is working!');
});

// IMPORTANT
const PORT = process.env.PORT;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});