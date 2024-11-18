/*
 *
 * Home Actions
 *
 * @author Vittorio Scaperrotta
 * @date 16-Nov-2024
 */

import { createAction } from 'Utils/globalMethods';

export const actionsType = {
  DO_ADD_NOTE: '@notes/do_add_note',
  DO_DELETE_NOTE: '@notes/do_delete_note'
}

export const doAddNote = (payload) => createAction(actionsType.DO_ADD_NOTE, payload)
export const doDeleteNote = (payload) => createAction(actionsType.DO_DELETE_NOTE, payload)

// @generator action:method
