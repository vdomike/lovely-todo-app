import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Bubble from '../common/Bubble';

const BestQuote = ({ quote: { id, content, author, votes } }) => {
  return (
    <section className="best-quote w-full">
      <header className="text-center relative">
        <h2 className="text-5xl font-title px-6 text-white rounded-lg absolute top-0 h-24 z-10 w-full leading-loose">
          The Best Quote
        </h2>
        <Bubble shape={3} height="100px" color="#ff9002" />
      </header>
      <Link to={`quote/${id}`} className="block h-full">
        <blockquote className="shadow-section bg-mintBlue mx-auto rounded-lg p-6 mt-16">
          <i className="fas fa-quote-left text-5xl text-pink" />
          <p className="quote-text text-2xl mt-4 opacity-25">{content}</p>
          <hr className="border-t-2 my-4" />
          <div className="quote-footer flex justify-between items-center text-xl">
            <p className="quote-author font-main text-pink">{author}</p>
            <p className="quote-actions">
              <i className="fas fa-heart text-pink mr-2" />
              <span className="text-title text-title">{votes}</span>
            </p>
          </div>
        </blockquote>
      </Link>
    </section>
  );
};

BestQuote.propTypes = {
  quote: PropTypes.shape({
    content: PropTypes.string,
    author: PropTypes.string,
    votes: PropTypes.number
  })
};

BestQuote.defaultProps = {
  quote: {}
};

export default BestQuote;
