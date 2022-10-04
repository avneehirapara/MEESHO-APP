import { combineReducers } from "redux";
import { authUserReducer } from "./AuthReducer";
import { commentReducer } from "./CommentReducer";
import { CounterReducer } from "./counter.reducer";
import { postReducer } from "./post.reducer";



export const rootReducer = combineReducers ({
    counter: CounterReducer,
    post: postReducer,
    comment:commentReducer,
    auth:authUserReducer
})



