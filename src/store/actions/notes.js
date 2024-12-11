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
  DO_EXPORT_NOTE: '@notes/do_export_note',
}

export const doAddNote = (payload) => createAction(actionsType.DO_ADD_NOTE, payload)
export const doEditNote = (payload) => createAction(actionsType.DO_EDIT_NOTE, payload)
export const doResetNote = (payload) => createAction(actionsType.DO_RESET_DETAIL, payload)
export const doDeleteNote = (payload) => createAction(actionsType.DO_DELETE_NOTE, payload)
export const doExportNote = (payload) => createAction(actionsType.DO_EXPORT_NOTE, payload)

// @generator action:method
