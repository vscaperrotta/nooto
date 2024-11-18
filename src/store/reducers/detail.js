/*
 *
 * Detail Reducer
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
 */


import produce from 'immer';

const ACTION_HANDLERS = {
  // @generator reducer:type:action
};

// The initial state of the food reducer
const initialState = {
  data: {},
  loading: false,
  error: null,
};

const Detail = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default Detail;
