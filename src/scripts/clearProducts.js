import * as fs from 'fs/promises';
import { somePath } from '../constants/products.js';

const clearProducts = async () => {
  await fs.writeFile(somePath, JSON.stringify([]), 'utf-8');
};

clearProducts();
