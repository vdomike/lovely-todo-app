import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import QuoteSummary from './QuoteSummary';

class QuoteList extends Component {
  render() {
    const { quotes } = this.props;
    const isQuoteExists = quotes && quotes.length > 0;
    return (
      <div className="list max-h-screen sm:max-h-full overflow-y-auto">
        <h1 className="list-title">Quotes</h1>
        {isQuoteExists &&
          quotes.map(quote => <QuoteSummary key={quote.id} quote={quote} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.firestore.ordered.quotes };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'quotes' }])
)(QuoteList);
