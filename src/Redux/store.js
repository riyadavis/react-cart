import { createStore } from "redux";
import storeReducer from "./Reducer/storeReducer";

const store = createStore(storeReducer);
export default store;
