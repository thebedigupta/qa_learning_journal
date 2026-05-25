export enum Genre {
  fiction = 'FICTION',
  nonfiction = 'NONFICTION',
  science = 'SCIENCE',
  history = 'HISTORY',
}

export interface Book {
  readonly id: number;
  title: string;
  author: string;
  price: number;
  genre: Genre;
  rating?: number;
}
