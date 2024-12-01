/*
 *
 * Modals Reducer
 *
 * @author Vittorio Scaperrotta
 * @date 16-Nov-2024
 */


import produce from 'immer';
import _ from 'lodash';
import { nullSafe } from 'Utils/globalMethods';
import { actionsType } from 'Store/actions/modals';

const ACTION_HANDLERS = {
  // @generator reducer:type:action
  [actionsType.DO_OPEN_MODAL]: produce((draft, action) => {
    draft.data = action.payload;
  }),
  [actionsType.DO_CLOSE_MODAL]: produce((draft, action) => {
    draft.data = null;
    draft.type = null;
  }),
};

// The initial state of the food reducer
const initialState = {
  data: null,
  type: null,
};

const Modals = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default Modals;
