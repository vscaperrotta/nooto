/*
 *
 * Home Reducer
 *
 * @author Vittorio Scaperrotta
 * @date 16-Nov-2024
 */


import produce from 'immer';
import _ from 'lodash';
import { nullSafe } from 'Utils/globalMethods';
import { actionsType } from '../actions/notes';

const ACTION_HANDLERS = {
  // @generator reducer:type:action
  [actionsType.DO_ADD_NOTE]: produce((draft, action) => {
    const detail = _.cloneDeep(draft.detail);
    if (nullSafe(() => detail.id, null) === action.payload.id) {
    } else {
      draft.data.push(action.payload);
    }
  }),
  [actionsType.DO_EDIT_NOTE]: produce((draft, action) => {
    const data = _.cloneDeep(draft.data);
    draft.detail = data.filter(item => item.id === action.payload)[0];
  }),
  [actionsType.DO_DELETE_NOTE]: produce((draft, action) => {
    const data = _.cloneDeep(draft.data);
    draft.data = data.filter(item => item.id !== action.payload);
  }),
  [actionsType.DO_RESET_DETAIL]: produce((draft, action) => {
    draft.detail = null;
  }),
};

// The initial state of the food reducer
const initialState = {
  data: [],
  detail: null,
  loading: false,
  error: null,
};

const Notes = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default Notes;
