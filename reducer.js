import { SEARCH_KEY, SEARCH_RESULT } from './actions';

const initialState = [];

export default function searchReducer(state = initialState, action) {
  console.log("asdasdadadsdsad")
  switch (action.type) {
  case SEARCH_KEY:
    return state.key;
  case SEARCH_RESULT:
    return state.result;
  default:
    return state;
  }
};