import { combineReducers } from "redux";
import { commentReducer } from "./CommentReducer";
import { CounterReducer } from "./counter.reducer";
import { postReducer } from "./post.reducer";



export const rootReducer = combineReducers ({
    counter: CounterReducer,
    post: postReducer,
    comment:commentReducer
})


// import {combineReducers} from 'redux'
// import {CounterReducer} from '../counter.reducer'

// export const rootReducer = combineReducers ({
//     count:CounterReducer,
// })

