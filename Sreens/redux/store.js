import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { rootReducer } from "./reducer/rootReducer"
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./saga/rootSaga";

// const persistConfig = {
//     key: 'root', 
//     storage: AsyncStorage,
//     whitelist: ['counter']
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleware]


// export const configstoreg = () => {

  export  const store = createStore( rootReducer,  applyMiddleware(...middlewares))

  // persistedReducer,   \\upar lakhvanu
    // let persistor = persistStore(store)

    sagaMiddleware.run(rootSaga)

    // return {store, persistor}
    
    // return persistor
// }





// import { createStore } from "redux";
// import {rootReducer} from './reducer/rootReducer'

// export const  configstoreg = () =>{
//     let store = createStore(rootReducer )
//     return store
// }