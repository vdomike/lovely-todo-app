import React, { Component } from 'react';

import TodoList from '../todos/TodoList';
import BookList from '../books/BookList';
import QuoteList from '../quotes/QuoteList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard flex p-6 bg-gray-200 h-screen container mx-auto">
        <div className="w-1/2 h-full flex flex-col">
          <TodoList />
          <BookList />
        </div>
        <div className="w-1/2">
          <QuoteList />{' '}
        </div>
      </div>
    );
  }
}

export default Dashboard;
