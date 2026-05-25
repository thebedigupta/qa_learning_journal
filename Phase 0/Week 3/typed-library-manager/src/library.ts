import { Book, Genre } from './types';
import { book } from './data';

export function getBooksByGenre(genre: Genre): Book[] {
  return book.filter((books) => books.genre === genre);
}

export function getBooksById(id: number): Book | undefined {
  return book.find((booklet) => booklet.id === id);
}
