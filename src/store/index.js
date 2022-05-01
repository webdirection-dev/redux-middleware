import {legacy_createStore as createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {counterReducer} from "./counter-reducer";

//middleware
const myLogger = (store) => (next) => (action) => {
    console.log('dispatched an action', action.type)
    next(action)
    console.log('updated state is', store.getState())
}

export const store = createStore(
    counterReducer,
    0,
    composeWithDevTools(applyMiddleware(myLogger)) //подключаем redux-devtools
)