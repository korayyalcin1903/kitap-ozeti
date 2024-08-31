import { combineReducers, legacy_createStore, applyMiddleware, compose } from "redux"
import {thunk} from "redux-thunk"  
import { categoryReducer } from "../reducers/category"
import ozetReducer from "../reducers/ozets"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
    const store = legacy_createStore(
        combineReducers({
            ozets: ozetReducer,
            categories: categoryReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}

export default configureStore
