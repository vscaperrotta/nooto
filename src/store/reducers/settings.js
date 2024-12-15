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
import { actionsType } from 'Store/actions/settings';

const ACTION_HANDLERS = {
  // @generator reducer:type:action
  [actionsType.DO_UPDATE_SETTINGS]: produce((draft, action) => {
    if (action.payload.font) {
      draft.font = action.payload.font;
    }
    if (action.payload.theme) {
      draft.theme = action.payload.theme;
    }
  }),
};

// The initial state of the food reducer
const initialState = {
  font: 'SANS_SERIF',
  theme: 'DARK',
};

const Settings = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default Settings;
