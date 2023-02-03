import fs from 'node:fs';

export const products = [
  { id: 1, name: 'Scarpa', type: 'shoes' },
  { id: 2, name: 'La Sportiva', type: 'shoes' },
  { id: 3, name: 'Red Chili', type: 'shoes' },
  { id: 4, name: 'eb', type: 'shoes' },
  { id: 5, name: 'Arcteryx', type: 'chalkbag', size: 'large' },
  { id: 6, name: 'Black Diamond', type: 'chalkbag', size: 'small' },
  { id: 7, name: 'Mammut', type: 'chalkbag', size: 'medium' },
  { id: 8, name: 'Red Chili Bag', type: 'chalkbag', size: 'small' },
  {
    id: 9,
    name: 'Forearm Trainer',
    type: 'other',
    use: 'training the muscles of your forearm',
  },
  {
    id: 10,
    name: 'Chalk Powder',
    type: 'other',
    use: 'keeping your hands form slipping',
  },
  {
    id: 11,
    name: 'Finger Tape',
    type: 'other',
    use: 'protecting your fingers from injuries',
  },
  { id: 12, name: 'Brush', type: 'other', use: 'cleaning the holds' },
];
