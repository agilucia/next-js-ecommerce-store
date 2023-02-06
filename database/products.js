import fs from 'node:fs';

export const products = [
  { id: 1, name: 'Scarpa', type: 'shoes', price: 149.9 },
  { id: 2, name: 'La Sportiva', type: 'shoes', price: 144.9 },
  { id: 3, name: 'Red Chili', type: 'shoes', price: 104.9 },
  { id: 4, name: 'eb', type: 'shoes', price: 119.9 },
  { id: 5, name: 'Arcteryx', type: 'chalkbag', size: 'large', price: 25.0 },
  {
    id: 6,
    name: 'Black Diamond',
    type: 'chalkbag',
    size: 'small',
    price: 19.0,
  },
  { id: 7, name: 'Mammut', type: 'chalkbag', size: 'medium', price: 40.0 },
  {
    id: 8,
    name: 'Red Chili Bag',
    type: 'chalkbag',
    size: 'small',
    price: 16.0,
  },
  {
    id: 9,
    name: 'Forearm Trainer',
    type: 'other',
    use: 'training the muscles of your forearm',
    price: 6.5,
  },
  {
    id: 10,
    name: 'Chalk Powder',
    type: 'other',
    use: 'keeping your hands form slipping',
    price: 10.0,
  },
  {
    id: 11,
    name: 'Finger Tape',
    type: 'other',
    use: 'protecting your fingers from injuries',
    price: 8.0,
  },
  {
    id: 12,
    name: 'Brush',
    type: 'other',
    use: 'cleaning the holds',
    price: 8.5,
  },
];
