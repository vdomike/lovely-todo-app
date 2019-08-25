import React from 'react';
import PropTypes from 'prop-types';

import ItemMarker from '../common/ItemMarker';

const BookItem = ({
  book: { id, title, author, isRead },
  deleteBook,
  readBook
}) => {
  return (
    <div className="book text-lg mb-1">
      <ItemMarker id={id} isCompleted={isRead} completeItem={readBook} />
      <span className="title font-main mx-2">{title}</span>
      <span className="author mr-2">{author}</span>
      <i
        className="fas fa-times text-darkGreen opacity-50 cursor-pointer"
        onClick={() => deleteBook(id)}
      />
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    isRead: PropTypes.bool
  }),
  deleteBook: PropTypes.func,
  readBook: PropTypes.func
};

BookItem.defaultProps = {
  book: {},
  deleteBook: () => {},
  readBook: () => {}
};

export default BookItem;
