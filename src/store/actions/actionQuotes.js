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
