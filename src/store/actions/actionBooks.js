export const addBook = book => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore.collection('books').add({
      ...book,
      userId: userId
    });
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
