// import fs from 'node:fs';

import { cache } from 'react';
import { sql } from './connect';

// export const products1 = [
//   {
//     id: 1,
//     name: 'Scarpa',
//     type: 'shoes',
//     price: 149.9,
//     description: 'Scarpa is a slightly prestressed climbing shoe.',
//   },
//   {
//     id: 2,
//     name: 'La Sportiva',
//     type: 'shoes',
//     price: 144.9,
//     description: 'La Sportiva is a slightly prestressed climing shoe.',
//   },
//   {
//     id: 3,
//     name: 'Red Chili',
//     type: 'shoes',
//     price: 104.9,
//     description: 'Red Chili is a strongly prestressed climbing shoe.',
//   },
//   {
//     id: 4,
//     name: 'eb',
//     type: 'shoes',
//     price: 119.9,
//     description: 'eb is a strongly prestressed climbing shoe.',
//   },
//   {
//     id: 5,
//     name: 'Arcteryx',
//     type: 'chalkbag',
//     size: 'large',
//     price: 25.0,
//     description:
//       'Arcteryx is a big chalkbag, suitable for indoor and outdoor climbing.',
//   },
//   {
//     id: 6,
//     name: 'Black Diamond',
//     type: 'chalkbag',
//     size: 'small',
//     price: 19.0,
//     description:
//       'Black Diamond is a small chalkbag, suitable for indoor and outdoor climbing.',
//   },
//   {
//     id: 7,
//     name: 'Mammut',
//     type: 'chalkbag',
//     size: 'medium',
//     price: 40.0,
//     description:
//       'Mammut is a medium sized chalkbag, suitable for indoor and outdoor climbing.',
//   },
//   {
//     id: 8,
//     name: 'Red Chili Bag',
//     type: 'chalkbag',
//     size: 'small',
//     price: 16.0,
//     description:
//       'Red Chili Bag is a small chalkbag, suitable for indoor and outdoor climbing.',
//   },
//   {
//     id: 9,
//     name: 'Forearm Trainer',
//     type: 'other',
//     price: 6.5,
//     description:
//       'The forearm trainer is used to increase your forearm strength.',
//   },
//   {
//     id: 10,
//     name: 'Chalk Powder',
//     type: 'other',
//     price: 10.0,
//     description: 'Chalk powder is used to keep your hands from slipping.',
//   },
//   {
//     id: 11,
//     name: 'Finger Tape',
//     type: 'other',
//     price: 8.0,
//     description: 'Finger tape is used to protect your fingers from injuries.',
//   },
//   {
//     id: 12,
//     name: 'Brush',
//     type: 'other',
//     price: 8.5,
//     description: 'A brush is used for cleaning the holds.',
//   },
// ];

export type Product = {
  id: number;
  name: string;
  type: string;
  price: string;
  description: string | null;
};

// get all products
export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
    SELECT * FROM products
  `;
  return products;
});

// get a single product
export const getProduct = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
  SELECT * FROM products WHERE id = ${id}`;
  return product;
});

// creating a new product
export const createProduct = cache(
  async (name: string, type: string, price: string, description: string) => {
    const [product] = await sql<Product[]>`
    INSERT INTO products
      (name, type, price, description)
    VALUES
      (${name}, ${type}, ${price}, ${description})
    RETURNING *
    `;
    return product;
  },
);

// updating a product
export const updateProductById = cache(
  async (
    id: number,
    name: string,
    type: string,
    price: string,
    description: string,
  ) => {
    const [product] = await sql<Product[]>`
    UPDATE
      products
    SET
      name = ${name},
      type = ${type},
      price = ${price},
      description = ${description}
    WHERE
      id = ${id}
    RETURNING *
    `;
    return product;
  },
);

// deleting a product
export const deleteProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
  DELETE FROM
    products
  WHERE
    id = ${id}
  RETURNING *
  `;
  return product;
});
