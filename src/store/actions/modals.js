/*
 *
 * Home Actions
 *
 * @author Vittorio Scaperrotta
 * @date 16-Nov-2024
 */

import { createAction } from 'Utils/globalMethods';

export const actionsType = {
  DO_OPEN_MODAL: '@notes/do_open_modal',
  DO_CLOSE_MODAL: '@notes/do_close_modal',
}

export const doOpenModal = (payload) => createAction(actionsType.DO_OPEN_MODAL, payload)
export const doCloseModal = (payload) => createAction(actionsType.DO_CLOSE_MODAL, payload)

// @generator action:method
