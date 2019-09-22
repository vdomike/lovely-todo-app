import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

import Tooltip from '../common/Tooltip';
import { deleteQuote, voteQuote } from '../../store/actions/actionQuotes';
import Loader from '../common/Loader';

const QuoteDetails = ({
  id,
  quote,
  deleteQuote,
  voteQuote,
  history,
  auth: { uid }
}) => {
  if (quote) {
    const {
      content,
      author,
      userFirstName,
      userLastName,
      createdAt,
      votes,
      votedBy,
      userId
    } = quote;

    const userPostedQuote = userId === uid;

    const onDelete = id => {
      if (userPostedQuote) {
        const sure = window.confirm('Are you sure to delete this quote?');
        if (sure) {
          deleteQuote(id);
          history.push('/dashboard');
        }
      } else {
        window.alert("You can't delete this quote!");
      }
    };

    const onVote = operator => {
      if (votedBy.indexOf(uid) === -1) {
        const newVotes = operator === 'add' ? votes + 1 : votes - 1;
        voteQuote(id, newVotes, [...votedBy, uid]);
      }
    };

    return (
      <div className="qoute-details container mt-10 mx-auto flex-grow">
        <div className="shadow-section bg-white w-full sm:w-3/4 mx-auto p-4 rounded-lg">
          <blockquote className="bg-beige p-8 rounded-lg">
            <p className="quote-content font-semibold text-xl sm:text-2xl text-center mt-4 mb-8">
              {content}
            </p>
            <div className="quote-footer flex flex-col justify-between">
              <div>
                <p className="quote-author font-main text-pink text-center text-xl">
                  {author}
                </p>
                <p className="font-title text-2xl text-center">
                  Posted by {userFirstName} {userLastName}{' '}
                  <time>{moment(createdAt.toDate()).calendar()}</time>
                </p>
              </div>
              <div className="vote flex justify-center">
                <div className="votes text-5xl font-title">
                  <Tooltip text="Dislike it">
                    <button
                      className="text-pink mr-2"
                      onClick={() => onVote('sub')}
                    >
                      &#45;
                    </button>
                  </Tooltip>
                  <span className="text-orange">{votes} votes</span>
                  <Tooltip text="Like it">
                    <button
                      className="text-pink ml-2"
                      onClick={() => onVote('add')}
                    >
                      &#43;
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            {userPostedQuote && (
              <div className="text-center">
                <Tooltip text="delete quote">
                  <div className="right-2rem">
                    <i
                      className="fas fa-trash cursor-pointer"
                      onClick={() => onDelete(id)}
                    />
                  </div>
                </Tooltip>
              </div>
            )}
          </blockquote>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const quotes = state.firestore.data.quotes;
  const quote = quotes ? quotes[id] : null;
  return {
    quote,
    id,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteQuote: id => {
      dispatch(deleteQuote(id));
    },
    voteQuote: (id, votes, operator) => {
      dispatch(voteQuote(id, votes, operator));
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
