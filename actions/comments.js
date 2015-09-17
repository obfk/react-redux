export const ADD_COMMENT = 'ADD_COMMENT';

export function add(text) {
  return {
    type: ADD_COMMENT,
    text
  };
}
