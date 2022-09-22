import { commentsAllData } from '../../../common/api/comments.api';
import * as ActionType from '../ActionType'


export const incrementCounter = () => (dispatch) => {
    console.log("AAAAAAAAAAAAAAAAA");
    commentsAllData()
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    dispatch ({type:ActionType.INCREMENT_COUNTER})
}

export const decrementCounter = () => (dispatch) => {
    dispatch({type: ActionType.DECREMENT_COUNTER})
}

// import * as ActionType from './ActionType'

// export const PluseCount = () => (dispatch) => {
//     dispatch({Type:ActionType.Pluse})
// }

// export const MinesCount =() => (dispatch) => {
//      dispatch({Type:ActionType.Mines})
// }