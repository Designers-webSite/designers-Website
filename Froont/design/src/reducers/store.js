import{combineReducers ,createStore} from "redux"
import userReducer from "./user"
import utilityReducer from "./utility"

const reducers=combineReducers({ userReducer})
const store=createStore(reducers)
export default store;