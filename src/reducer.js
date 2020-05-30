import * as actions from "./actiontypes";
let lastid = 0;
const initialState = [];

export default function reducer(state = initialState, action) {
  // by switch
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastid,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.BUG_RESOLED:
      return state.map((b) =>
        b.id !== action.payload.id ? b : { ...b, resolved: true }
      );

    default:
      return state;
  }
  //by if
  // if (action.type === "bugAdded") {
  //   return [
  //     ...state,
  //     {
  //       id: ++lastid,
  //       description: action.payload.description,
  //       resolved: false,
  //     },
  //   ];
  // } else if (action.type === "bugRemoved") {
  //   return StyleSheet.filter((bug) => bug.id !== action.payload.id);
  // } else {
  //   return state;
  // }
}
