import{combineReducers ,createStore} from "redux"
import userReducer from "./user"
import utilityReducer from "./utility"
import designerReducer from "./designer"

const reducers=combineReducers({ userReducer},{designerReducer},{utilityReducer})
const store=createStore(reducers)
export default store;