import{combineReducers ,createStore} from "redux"
import userReducer from "./user"
import utilityReducer from "./utility"
import designerReducer from "./designer"
import galleryReducer from "./gallery"

const reducers=combineReducers({ userReducer},{designerReducer},{utilityReducer},{galleryReducer})
const store=createStore(reducers)
export default store;