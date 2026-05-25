import { Book, Genre } from './types';

export const book: Book[] = [
  {
    id: 100,
    title: 'Rich Dad and Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    price: 299,
    genre: Genre.history,
    rating: 4.5,
  },
  {
    id: 101,
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    price: 399,
    genre: Genre.nonfiction,
    rating: 4.8,
  },
  {
    id: 102,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: 249,
    genre: Genre.fiction,
  },
];
