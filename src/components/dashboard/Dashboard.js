import React, { Component } from 'react';

import TodoList from '../todos/TodoList';
import BookList from '../books/BookList';
import QuoteList from '../quotes/QuoteList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard flex flex-col sm:flex-row p-6 bg-beige container mx-auto flex-grow">
        <div className="w-full sm:w-1/2 flex flex-col">
          <TodoList />
          <BookList />
        </div>
        <div className="w-full sm:w-1/2 sm:ml-6 mt-5 sm:mt-0">
          <QuoteList />{' '}
        </div>
      </div>
    );
  }
}

export default Dashboard;
