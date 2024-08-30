import { combineReducers, legacy_createStore, applyMiddleware, compose } from "redux"
import {thunk} from "redux-thunk"  // 'thunk' yanlış import edilmiş, doğrudan 'redux-thunk' kütüphanesinden import etmelisiniz.
import ozetReducer from "../reducers/ozets"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
    const store = legacy_createStore(
        combineReducers({
            ozet: ozetReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}

export default configureStore
