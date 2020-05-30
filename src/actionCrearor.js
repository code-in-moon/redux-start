import * as actions from "./actiontypes";
export const removeBug = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: id,
  },
});
export const resolveBug = (id) => ({
  type: actions.BUG_RESOLED,
  payload: {
    id: id,
  },
});
export function addBug(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: description,
    },
  };
}
