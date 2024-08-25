import { somePath } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import * as fs from 'node:fs/promises';
const addOneProduct = async () => {
  const products = await fs.readFile(somePath, 'utf-8');
  const parsedProducts = products ? JSON.parse(products) : [];
  const newProducts = createFakeProduct();
  parsedProducts.push(newProducts);
  await fs.writeFile(
    somePath,
    JSON.stringify(parsedProducts, null, 2),
    'utf-8',
  );
};

addOneProduct();
