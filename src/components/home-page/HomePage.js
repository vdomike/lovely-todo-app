import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import BestQuote from '../quotes/BestQuote';
import SplittedWord from '../common/SplittedWord';

class HomePage extends Component {
  render() {
    const quote = this.props.quote ? this.props.quote[0] : null;
    const {
      auth: { uid }
    } = this.props;
    const tryLink = uid ? '/dashboard' : '/signup';
    return (
      <div className="p-6 sm:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto my-8 shadow-list bg-beige rounded-lg">
        <div className="homepage flex-grow flex flex-col justify-center items-center bg-white rounded-lg p-6">
          <h1 className="text-center mb-8 text-orange text-2xl font-main">
            Welcome to our{' '}
            <span className="text-3xl bg-pink text-white px-2 rounded">
              Lovely Todo App
            </span>
            !{' '}
            <p>
              This is the perfect place to keep lists of your todos and books
              you plan to read. Special feature - sharing great quotes and
              voting for them.
            </p>
            <p>
              Just{' '}
              <Link
                to={tryLink}
                className="text-pink floating-text bouncing-text"
              >
                <SplittedWord word="try it out!" />
              </Link>
            </p>
          </h1>
          {quote && <BestQuote quote={quote} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quote: state.firestore.ordered.quotes,
  auth: state.firebase.auth
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'quotes',
      orderBy: ['votes', 'desc'],
      limit: 1
    }
  ])
)(HomePage);
