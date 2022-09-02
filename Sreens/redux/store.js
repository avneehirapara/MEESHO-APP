import { createStore,applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { rootReducer } from "./reducer/rootReducer"




export const configstoreg = () => {
    let store = createStore(rootReducer , applyMiddleware(thunk))
    return store
}

// import { createStore } from "redux";
// import {rootReducer} from './reducer/rootReducer'

// export const  configstoreg = () =>{
//     let store = createStore(rootReducer )
//     return store
// }