import * as ActionType from '../ActionType';
let inival = {
    count: 0
}

export const CounterReducer = (state = inival, action) => {
    console.log(action.type);
    switch (action.type) {
        case ActionType.INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count + 1
            }
        case ActionType.DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

// import * as ActionType from '../ActionType'

// inivalue = {
//     count: 0
// }
// export const CounterReducer = (state = inivalue, action) => {
//     switch (action.Type) {
//         case ActionType.Pluse:
//             return {
//                 ...state,
//                 count: state.count + 1
//             }

//         case ActionType.Mines:
//             return {
//                 ...state,
//                 count: state.count - 1
//             }

//         default:
//             return state
//     }
// }
