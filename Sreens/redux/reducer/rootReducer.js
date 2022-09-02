import { combineReducers } from "redux";
import { CounterReducer } from "./counter.reducer";



export const rootReducer = combineReducers ({
    counter: CounterReducer,
})


// import {combineReducers} from 'redux'
// import {CounterReducer} from '../counter.reducer'

// export const rootReducer = combineReducers ({
//     count:CounterReducer,
// })

