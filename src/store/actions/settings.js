/*
 *
 * Home Actions
 *
 * @author Vittorio Scaperrotta
 * @date 16-Nov-2024
 */

import { createAction } from 'Utils/globalMethods';

export const actionsType = {
  DO_UPDATE_SETTINGS: '@notes/do_update_settings',
}

export const doUpdateSettings = (payload) => createAction(actionsType.DO_UPDATE_SETTINGS, payload)

// @generator action:method
