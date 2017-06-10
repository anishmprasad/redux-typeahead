import { SEARCH_KEY } from '../actions';

const initialState = [];

export default function searchKey(state = initialState, action) {
  switch (action.type) {
      case SEARCH_KEY:
        return action.key;
      default:
        return state;
  }
};
