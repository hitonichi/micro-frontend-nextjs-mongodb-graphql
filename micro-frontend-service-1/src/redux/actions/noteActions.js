import * as types from "./actionTypes";

export function createNote(note) {
  return { type: types.CREATE_NOTE, note };
}
