const path = require('path');
const fs = require('node:fs/promises');

const filePath = path.join(process.cwd(), 'data', 'items.json');

async function getStoredItems() {
  try {
    const rawFileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    const storedItems = data.items ?? [];
    return storedItems;
  } catch (error) {
    console.error('Error reading items file:', error);
    throw error;
  }
}

function storeItems(items) {
  return fs.writeFile(filePath, JSON.stringify({ items: items || [] }));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
