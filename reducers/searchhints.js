import { SEARCH_HINTS } from '../actions';

const initialState = [];


export default function searchHints(state = initialState, action) {
  switch (action.type) {
      case SEARCH_HINTS:
        return action.hint;
      default:
        return state;
  }
};