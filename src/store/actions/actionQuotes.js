// import { ADD_QUOTE, ADD_QUOTE_ERROR } from '../constants';

export const addQuote = quote => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const { firstName, lastName } = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore.collection('quotes').add({
      ...quote,
      userFirstName: firstName,
      userLastName: lastName,
      createdAt: new Date(),
      userId: userId
    });
    // .then(() => {
    //   dispatch({ type: ADD_QUOTE, quote });
    // })
    // .catch(error => {
    //   dispatch({ type: ADD_QUOTE_ERROR, error });
    // });
  };
};

export const deleteQuote = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('quotes')
      .doc(id)
      .delete();
  };
};

export const voteQuote = (id, votes, votedBy, userId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('quotes')
      .doc(id)
      .update({
        votes,
        votedBy
      });
  };
};
