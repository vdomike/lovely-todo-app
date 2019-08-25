import { ADD_BOOK, DELETE_BOOK, READ_BOOK } from '../constants';

const books = (state = [], { id, book, type }) => {
  switch (type) {
    case ADD_BOOK:
      return [...state, book];
    case DELETE_BOOK:
      return [...state].filter(book => book.id !== id);
    case READ_BOOK:
      return [...state].map(book => {
        if (book.id === id) {
          book.isRead = !book.isRead;
        }
        return book;
      });
    default:
      return state;
  }
};

export default books;
