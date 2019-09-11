import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

import Tooltip from '../common/Tooltip';
import { deleteQuote, voteQuote } from '../../store/actions/actionQuotes';

class QuoteDetails extends Component {
  voteQuote = operator => {
    let {
      id,
      quote: { votes, votedBy, userId }
    } = this.props;
    if (votedBy.indexOf(userId) === -1) {
      const { voteQuote } = this.props;
      operator === 'add' ? votes++ : votes--;
      votedBy.push(userId);
      voteQuote(id, votes, votedBy, userId);
    }
  };
  render() {
    const { id, quote, deleteQuote } = this.props;
    if (quote) {
      const {
        content,
        author,
        userFirstName,
        userLastName,
        createdAt,
        votes
      } = quote;
      return (
        <div className="qoute-details p-6 container mx-auto my-8 flex-grow">
          <div className="shadow-section bg-white w-3/4 mx-auto p-4 rounded-lg">
            <blockquote className="bg-beige p-8 rounded-lg">
              <p className="quote-content font-semibold text-2xl mt-4 mb-8">
                {content}
              </p>
              <div className="quote-footer flex justify-between">
                <div>
                  <p className="quote-author font-main text-pink text-xl">
                    {author}
                  </p>
                  <p className="font-title text-2xl">
                    Posted by {userFirstName} {userLastName}{' '}
                    <time>{moment(createdAt.toDate()).calendar()}</time>
                  </p>
                </div>
                <div className="vote flex">
                  <div className="votes text-5xl font-title">
                    <Tooltip text="Dislike it">
                      <button
                        className="text-pink mr-2"
                        onClick={() => this.voteQuote('sub')}
                      >
                        &#45;
                      </button>
                    </Tooltip>
                    <span className="text-orange">{votes} votes</span>
                    <Tooltip text="Like it">
                      <button
                        className="text-pink ml-2"
                        onClick={() => this.voteQuote('add')}
                      >
                        &#43;
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
              <Tooltip text="delete quote">
                <div className="right-2rem opacity-50">
                  <i
                    className="fas fa-trash cursor-pointer"
                    onClick={() => deleteQuote(id)}
                  />
                </div>
              </Tooltip>
            </blockquote>
          </div>
        </div>
      );
    } else {
      return <div className="qoute-details">Quote loading</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const quotes = state.firestore.data.quotes;
  const quote = quotes ? quotes[id] : null;
  return {
    quote,
    id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteQuote: id => {
      const sure = window.confirm('Are you sure to delete this quote?');
      if (sure) {
        dispatch(deleteQuote(id, ownProps));
        ownProps.history.push('/dashboard');
      }
    },
    voteQuote: (id, votes, operator, userId) => {
      dispatch(voteQuote(id, votes, operator, userId));
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [
    { collection: 'quotes', doc: props.match.params.id }
  ])
)(QuoteDetails);
