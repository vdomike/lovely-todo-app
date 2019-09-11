import React from 'react';
import PropTypes from 'prop-types';

import ItemMarker from '../common/ItemMarker';
import Tooltip from '../common/Tooltip';

const BookItem = ({
  book: { id, title, author, isRead },
  deleteBook,
  readBook
}) => {
  const classNames = isRead ? ' completed' : '';
  const markTooltip = isRead ? 'Mark as unread' : 'Mark as read';
  return (
    <div className={`book text-lg mb-1${classNames}`}>
      <Tooltip text={markTooltip}>
        <ItemMarker id={id} isCompleted={isRead} completeItem={readBook} />
      </Tooltip>
      <div className="item-text inline">
        <span className="title font-main mx-2">{title}</span>
        <span className="author mr-2">{author}</span>
      </div>

      <Tooltip text="Delete book">
        <i
          className="fas fa-times text-darkGreen opacity-50 cursor-pointer"
          onClick={() => deleteBook(id)}
        />
      </Tooltip>
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
