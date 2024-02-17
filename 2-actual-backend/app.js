const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { getStoredItems, storeItems } = require('./data/items');

const app = express();
const PORT = process.env.PORT || 8081;
const itemsFilePath = path.join(process.cwd(), 'data', 'items.json');

// Additional logging for file path
console.log('Items file path in app.js:', itemsFilePath);

app.use(bodyParser.json());

app.get('/start', (req, res) => {
  res.send('Hello my name is deepak');
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const getStoredItems = async () => {
  try {
    const fileContent = fs.readFileSync(itemsFilePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading items file:', error);
    throw error;
  }
};

const storeItems = async (items) => {
  try {
    const data = JSON.stringify(items, null, 2);
    fs.writeFileSync(itemsFilePath, data, 'utf8');
  } catch (error) {
    console.error('Error writing items file:', error);
    throw error;
  }
};

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
