import * as fs from 'fs/promises';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { somePath } from '../constants/products.js';

const generateProducts = async (number) => {
  const products = await fs.readFile(somePath, 'utf-8');
  const parsedProducts = products ? JSON.parse(products) : [];
  const newProductList = Array(number).fill(0).map(createFakeProduct);
  const data = [...parsedProducts, ...newProductList];
  await fs.writeFile(somePath, JSON.stringify(data, null, 2), 'utf-8');
};

generateProducts(3);

