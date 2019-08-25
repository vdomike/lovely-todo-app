import React from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ title, author, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <input
        type="text"
        id="title"
        onChange={handleChange}
        value={title}
        placeholder="Title"
        className="list-input p-1 mr-2 text-md"
      />
      <input
        type="text"
        id="author"
        onChange={handleChange}
        value={author}
        placeholder="Author"
        className="list-input p-1 text-md"
      />
      <button className="bg-pink px-1 text-white rounded-lg my-3">
        Add Book
      </button>
    </form>
  );
};

BookForm.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

BookForm.defaultProps = {
  title: '',
  author: '',
  handleChange: () => {},
  handleSubmit: () => {}
};

export default BookForm;
