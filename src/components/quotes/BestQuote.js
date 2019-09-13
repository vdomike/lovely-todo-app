import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Bubble from '../common/Bubble';

const BestQuote = ({ quote: { id, content, author, votes } }) => {
  return (
    <section className="best-quote w-full">
      <header className="text-center relative">
        <h2 className="text-4xl sm:text-5xl font-title pt-4 sm:pt-0 px-6 text-white rounded-lg absolute top-0 h-24 z-10 w-full leading-loose">
          The Best Quote
        </h2>
        <Bubble shape={3} height="100px" color="#ff9002" />
      </header>
      <Link to={`quote/${id}`} className="block h-full">
        <blockquote className="shadow-section bg-mintBlue mx-auto rounded-lg p-6 mt-16">
          <i className="fas fa-quote-left text-4xl mt-4 sm:text-5xl text-pink" />
          <p className="quote-text text-xl sm:text-2xl mt-4 opacity-25 text-justify sm:text-left">
            {content}
          </p>
          <hr className="border-t-2 my-4" />
          <div className="quote-footer flex justify-between items-end text-xl">
            <p className="quote-author font-main text-pink">{author}</p>
            <p className="flex items-center w-1/2 sm:w-auto justify-end">
              <i className="fas fa-heart text-pink mr-2 leading-normal" />
              <span className="text-title sm:text-xl">{votes}</span>
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
