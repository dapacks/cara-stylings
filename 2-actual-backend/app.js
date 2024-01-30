const express = require('express');
const bodyParser = require('body-parser');

// Assuming getStoredItems and storeItems functions are in a separate file (./data/items)
const { getStoredItems, storeItems } = require('./data/items');

const app = express();
const PORT = process.env.PORT || 8081; // Use process.env.PORT for Vercel compatibility

app.use(bodyParser.json());

app.get('/start', (req, res) => {
  res.send('Hello');
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/items', async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    res.json({ items: storedItems });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/items/:id', async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    const item = storedItems.find((item) => item.id === req.params.id);
    res.json({ item });
  } catch (error) {
    console.error('Error fetching item by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/items', async (req, res) => {
  try {
    const existingItems = await getStoredItems();
    const itemData = req.body;
    const newItem = {
      ...itemData,
      id: Math.random().toString(),
    };
    const updatedItems = [newItem, ...existingItems];
    await storeItems(updatedItems);
    res.status(201).json({ message: 'Stored new item.', item: newItem });
  } catch (error) {
    console.error('Error storing new item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for use in serverless deployments


