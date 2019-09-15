import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import BookForm from './BookForm';
import BookItem from './BookItem';

import { addBook, deleteBook, readBook } from '../../store/actions/actionBooks';

class BookList extends Component {
  state = {
    title: '',
    author: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  addBook = e => {
    const { title, author } = this.state;
    e.preventDefault();
    if (title && author) {
      const { addBook } = this.props;
      addBook({
        title,
        author,
        isRead: false
      });
      this.setState({
        title: '',
        author: ''
      });
    }
  };
  render() {
    const { title, author } = this.state;
    const { books, deleteBook, readBook } = this.props;
    const isBookExists = books && books.length > 0;
    return (
      <div className="list flex-1 max-h-1/2 overflow-y-auto">
        <h1 className="list-title">Book List</h1>
        <BookForm
          title={title}
          author={author}
          handleChange={this.handleChange}
          handleSubmit={this.addBook}
        />
        {isBookExists &&
          books.map(book => {
            return (
              <BookItem
                key={book.id}
                book={book}
                deleteBook={deleteBook}
                readBook={readBook}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const userId = state.firebase.auth.uid;
  return {
    userId: userId,
    books: state.firestore.ordered.books
  };
};

const mapDispatchToProps = {
  addBook,
  deleteBook,
  readBook
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(({ userId }) => [
    {
      collection: 'books',
      where: ['userId', '==', userId]
    }
  ])
)(BookList);
