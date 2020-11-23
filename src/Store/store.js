import { createStore } from "redux";
import rootReducer from "../Reducer/reducer";
const store = createStore(rootReducer);
export default store;
