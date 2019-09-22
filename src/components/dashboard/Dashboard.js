import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import TodoList from '../todos/TodoList';
import BookList from '../books/BookList';
import QuoteList from '../quotes/QuoteList';

const Dashboard = ({ quotes }) => {
  return (
    <div className="dashboard flex flex-col sm:flex-row p-6 bg-beige container mx-auto flex-grow max-h-full sm:max-h-screen">
      <div className="w-full sm:w-1/2 flex flex-col sm:max-h-full">
        <TodoList />
        <BookList />
      </div>
      <div className="w-full sm:w-1/2 sm:ml-6 mt-5 sm:mt-0">
        {quotes && <QuoteList quotes={quotes} />}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const uid = state.firebase.auth.uid;
  const allQuotes = state.firestore.data.quotes;
  const userQuotes = allQuotes
    ? state.firestore.ordered.quotes.filter(quote => quote.userId === uid)
    : null;
  return { quotes: userQuotes };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'quotes', orderBy: ['createdAt', 'desc'] }])
)(Dashboard);
