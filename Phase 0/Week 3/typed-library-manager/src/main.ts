import { Book, Genre } from './types';
import { getBooksByGenre, getBooksById } from './library';

function main(): void {
  // Get books by genre

  function bookletByGenre(genre: Genre): Book[] | string {
    const genreResult = getBooksByGenre(genre);

    return genreResult.length === 0
      ? "This Genre isn't avaliable"
      : genreResult;
  }

  console.log(`Q1 First Print`, bookletByGenre(Genre.fiction));
  console.log(`Q1 Second Print`, bookletByGenre(Genre.science));

  // Search element by ID

  function bookById(Id: number): Book | string {
    const bookId = getBooksById(Id);
    return bookId === undefined ? 'Not Avaliable' : bookId;
  }

  console.log(`Q2 First : `, bookById(100));
  console.log(`Q2 Second : `, bookById(103));
}
main();
