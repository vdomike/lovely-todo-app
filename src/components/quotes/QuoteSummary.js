import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QuoteSummary = ({
  quote: { id, content, author, postedBy, createdAt, votes }
}) => {
  return (
    <Link to={`quotes/${id}`}>
      <div className="quote-card shadow-inner bg-white rounded-lg py-4 px-6 mb-4">
        <div className="quote mb-4">{content}</div>
        <hr className="border-b border-pink" />
        <div className="quote-card-footer flex justify-between text-xl">
          <div className="author font-title">{author}</div>
          <div className="vote font-title">
            <i className="fas fa-heart text-pink" /> {votes}
          </div>
        </div>
      </div>
    </Link>
  );
};

QuoteSummary.propTypes = {
  quote: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    postedBy: PropTypes.string,
    createdAt: PropTypes.object,
    votes: PropTypes.number
  })
};

QuoteSummary.defaultProps = {
  quote: PropTypes.shape({
    id: '',
    content: '',
    author: '',
    postedBy: '',
    createdAt: '',
    votes: 0
  })
};

export default QuoteSummary;
