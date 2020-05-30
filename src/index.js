import store from "./store";
import * as actionCreator from "./actionCrearor";
import * as actions from "./actiontypes";

//every time that state is changed this is called
// in here we refresh the ui
// store.subscribe(() => {
//   console.log("store change", store.getState());
// });

//this return unsubscribe for whrn user exit the page
const unsubscribe = store.subscribe(() => {
  console.log("store change", store.getState());
});

// dispatch an action
store.dispatch(actionCreator.addBug("bug1"));
store.dispatch(actionCreator.addBug("bug3"));

// unsubscribe();

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });
store.dispatch(actionCreator.removeBug(2));

store.dispatch(actionCreator.resolveBug(1));

// console.log(store);

// console.log(store.getState());
