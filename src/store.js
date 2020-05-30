import { createStore } from "redux";
import reducer from "./reducer";
//if its not default import like this
// import {reducer} from "./reducer";

const store = createStore(reducer);

export default store;
