import { legacy_createStore,combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer as authReducer} from './Authentication/reducer'
import {reducer as adminReducer} from "./Admin/reducer"
import {reducer as productReducer} from './Products/reducer'
import {reducer as singleProductReducer} from './SingleProduct/reducer'
import {reducer as searchReducer} from './Search/reducer'

const rootReducer = combineReducers({authReducer,adminReducer,productReducer,singleProductReducer,searchReducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))