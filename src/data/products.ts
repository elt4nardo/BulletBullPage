import { Product } from "../types";

export const products: Product[] = [
  {
    id: '1',
    name: 'REMERA ESS3NTIALS',
    price: 32000,
    image: 'https://i.ibb.co/1tb2PMNZ/Whats-App-Image-2025-04-29-at-12-40-10-98662abe.webp',
    additionalImages: [
      'https://i.ibb.co/DDj5tP0Z/Removal-384.png',
      'https://i.ibb.co/kV02wg63/Removal-836.png'
      
    ],
    category: 'Remeras',
    sizes: ['S', 'M', 'L', 'XL'],
    availableSizes: ['S', 'M', 'L', 'XL'], // Aquí indicas los talles disponibles
    details: [
      '100% Algodón Premium',
      'Oversized',
      'Corte Único',
    ],
    description: ''
  },
  {
    id: '2',
    name: 'REMERA CLASSIC',
    price: 32000,
    image: 'https://i.ibb.co/pBfRmCRQ/Whats-App-Image-2025-04-29-at-12-40-11-72ec2eb5.webp',
    additionalImages: [
      'https://i.ibb.co/DDj5tP0Z/Removal-384.png',
           'https://i.ibb.co/wNg221C5/Removal-539.png'
    ],
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL'],
    availableSizes: ['S', 'M', 'L', 'XL'], // Aquí indicas los talles disponibles
    details: [
      '100% Algodón Premium',
      'Oversized',
      'Corte Único',
    ],
    description: ''
  },
  {
    id: '6',
    name: 'BUZO BULLET',
    price: 55000,
    image: 'https://i.ibb.co/ycqP61hL/Whats-App-Image-2025-04-29-at-12-40-11-b71ba7d0.webp',
    additionalImages: [
      'https://i.ibb.co/BXdRpDJ/a07ec41b-1a01-4af4-9575-9b8fc049f8a8.jpg',
      'https://i.ibb.co/LzRBm0hs/8fa94b5c-37b4-4288-9889-b96edb51d1c7.jpg'
    ],
    category: 'buzos',
    sizes: ['S', 'M', 'L', 'XL'],
    availableSizes: ['M',], // Aquí indicas los talles disponibles
    details: [
      '100% Algodón Premium',
      'Oversized',
      'Corte Único',
      'Extremadamente Abrigado'
    ],
    description: ''
  }
];