const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, this is your Express.js app running on Vercel!');
});

app.get('/items', async (req, res) => {
  try {
    // Assuming your data is stored in a JSON file in the 'data' folder
    const data = await fs.readFile('./data/items.json', 'utf-8');
    const items = JSON.parse(data);
    res.json({ items });
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Listen on the specified port or default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for use in serverless deployments

