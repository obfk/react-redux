import { ADD_COMMENT } from '../actions/comments';
import R from 'ramda';

export default function comment(state = {}, action) {
  switch (action.type) {
  case ADD_COMMENT:
    return R.merge(state, action.text);
  default:
    return state;
  }
}
