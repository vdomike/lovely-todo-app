import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

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
        <div className="qoute-details p-6 container mx-auto my-8 bg-beige flex-grow">
          <div className="quote-content w-1/2 bg-white rounded-lg p-6 mx-auto">
            <div className="quote">{content}</div>
            <div className="author">{author}</div>
            <div className="posted-by">
              Posted by {userFirstName} {userLastName}
              <time>{moment(createdAt.toDate()).calendar()}</time>
            </div>
            <div className="vote flex">
              <i
                className="fas fa-minus-circle"
                onClick={() => this.voteQuote('sub')}
              />
              <div className="votes">{votes}</div>
              <i
                className="fas fa-plus vote-button"
                onClick={() => this.voteQuote('add')}
              />
            </div>
            <i
              className="fas fa-trash cursor-pointer"
              onClick={() => deleteQuote(id)}
            />
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
