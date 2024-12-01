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
  DO_EDIT_NOTE: '@notes/do_edit_note',
  DO_RESET_DETAIL: '@notes/do_reset_note',
  DO_DELETE_NOTE: '@notes/do_delete_note',
  DO_CONFIRM_SAVE: '@notes/do_confirm_save'
}

export const doAddNote = (payload) => createAction(actionsType.DO_ADD_NOTE, payload)
export const doEditNote = (payload) => createAction(actionsType.DO_EDIT_NOTE, payload)
export const doResetNote = (payload) => createAction(actionsType.DO_RESET_DETAIL, payload)
export const doDeleteNote = (payload) => createAction(actionsType.DO_DELETE_NOTE, payload)
export const doConfirmSave = (payload) => createAction(actionsType.DO_CONFIRM_SAVE, payload)

// @generator action:method
