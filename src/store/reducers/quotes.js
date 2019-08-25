import { ADD_QUOTE } from '../constants';

const initState = {
  quote: null
};

const quotes = (state = initState, { type, quote }) => {
  switch (type) {
    case ADD_QUOTE:
      return [...state, quote];
    default:
      return state;
  }
};

export default quotes;
