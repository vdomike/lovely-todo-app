import React from 'react';
import PropTypes from 'prop-types';

import QuoteSummary from './QuoteSummary';

const QuoteList = ({ quotes }) => {
  const isQuoteExists = quotes && quotes.length > 0;
  return (
    <div className="list max-h-screen sm:max-h-full overflow-y-auto">
      <h1 className="list-title">Quotes</h1>
      {isQuoteExists &&
        quotes.map(quote => <QuoteSummary key={quote.id} quote={quote} />)}
    </div>
  );
};

QuoteList.propTypes = {
  quotes: PropTypes.array
};

QuoteList.defaultProps = {
  quotes: []
};

export default QuoteList;
