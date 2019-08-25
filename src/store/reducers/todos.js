import { ADD_TODO } from '../constants';

const tasks = (state = [], { todo, type }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, todo];
    default:
      return state;
  }
};

export default tasks;
