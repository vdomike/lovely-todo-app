// import { ADD_TODO } from '../constants';

export const addTodo = todo => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore.collection('todos').add({
      ...todo,
      userId: userId
    });
    // .then(() => {
    //   dispatch({ type: ADD_TODO, todo });
    // });
  };
};

export const deleteTodo = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('todos')
      .doc(id)
      .delete();
  };
};

export const completeTodo = (id, isCompleted) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('todos')
      .doc(id)
      .update({ isCompleted: !isCompleted });
  };
};
