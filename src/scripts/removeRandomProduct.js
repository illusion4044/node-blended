import * as fs from 'node:fs/promises';
import { somePath } from '../constants/products.js';

const removeRandomProduct = async () =>{

    const productList = await fs.readFile(somePath, 'utf-8');
    const products = productList ? JSON.parse(productList) : [];
    const idx = Math.floor(Math.random() * products.length);
    const filterProducts = products.filter((item, index)=>index !== idx) ;
await fs.writeFile(somePath, JSON.stringify(filterProducts, null, 2),'utf-8');
};

removeRandomProduct();