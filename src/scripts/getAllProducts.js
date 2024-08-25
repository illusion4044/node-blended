import * as fs from 'node:fs/promises';
import { somePath } from '../constants/products.js';

const getAllProducts = async () => {
  const productList = await fs.readFile(somePath, 'utf-8');
  const data = productList ? JSON.parse(productList) : [];
  return data;
};
console.log(await getAllProducts());
