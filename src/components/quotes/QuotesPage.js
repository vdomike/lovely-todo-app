import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import QuoteList from '../quotes/QuoteList';

const QuotesPage = ({ quotes }) => {
  return (
    <div className="mt-10 mx-auto min-h-screen">
      <div className="shadow-section bg-beige w-full sm:w-3/4 lg:w-1/2 mx-auto p-4 rounded-lg">
        <QuoteList quotes={quotes} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { quotes: state.firestore.ordered.quotes };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'quotes', orderBy: ['createdAt', 'desc'] }])
)(QuotesPage);
