import { createStore } from "redux";
import rootReducer from "../Reducers/index";
const Store = createStore(rootReducer);
export default Store;