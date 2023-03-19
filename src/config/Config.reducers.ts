import {createStore, combineReducers} from 'redux';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducerList = combineReducers({
    // Add reducers here
})

const persistedReducer = persistReducer(persistConfig, reducerList)
const store = createStore(persistedReducer)

export default store