// import { ADD_BOOK } from '../constants';

export const addBook = book => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore.collection('books').add({
      ...book,
      userId: userId
    });
    // .then(() => {
    //   dispatch({ type: ADD_BOOK, book });
    // });
  };
};

export const deleteBook = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('books')
      .doc(id)
      .delete();
  };
};

export const readBook = (id, isRead) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('books')
      .doc(id)
      .update({
        isRead: !isRead
      });
  };
};
