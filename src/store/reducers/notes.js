/*
 *
 * Home Reducer
 *
 * @author Vittorio Scaperrotta
 * @date 16-Nov-2024
 */


import produce from 'immer';
import { actionsType } from '../actions/notes';
import _ from 'lodash';

const ACTION_HANDLERS = {
  // @generator reducer:type:action
  [actionsType.DO_ADD_NOTE]: produce((draft, action) => {
    draft.data.push(action.payload);
  }),
  [actionsType.DO_DELETE_NOTE]: produce((draft, action) => {
    const data = _.cloneDeep(draft.data);
    draft.data = data.filter(item => item.id !== action.payload);
  }),
};

// The initial state of the food reducer
const initialState = {
  data: [],
  loading: false,
  error: null,
};

const Notes = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default Notes;
