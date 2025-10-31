const express = require('express');
const app = express();
const usersRoute = require('./routes/users');

app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Express REST API!');
});

// Mount user routes
app.use('/api/users', usersRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
