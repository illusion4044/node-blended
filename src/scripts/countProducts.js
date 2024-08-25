import * as fs from 'node:fs/promises';
import { somePath } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

const countProducts = async () => {
    const products = await fs.readFile(somePath, 'utf-8');
    const parsedProducts = products ? JSON.parse(products) : [];
    return parsedProducts.length;
}

console.log(await countProducts());
