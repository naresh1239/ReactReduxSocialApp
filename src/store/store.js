// import {createStore} from "redux"
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootreducer";
import SagaProductList from "./SagaProductList";
// const store = createStore(rootReducer)
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware : () => [sagaMiddleware]

})
sagaMiddleware.run(SagaProductList)


export default store;