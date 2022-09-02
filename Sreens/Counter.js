import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { decrementCounter, incrementCounter } from './redux/action/counter.action';

export default function Counter() {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter);

    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDecrement = () =>{
        dispatch(decrementCounter())
    }
  return (
    <View>
    <TouchableOpacity
        onPress={() => handleIncrement()}>
        <Text>+</Text>
    </TouchableOpacity>
    <Text>{counter.count}</Text>
    <TouchableOpacity
        onPress={() => handleDecrement()}>
        <Text>-</Text>
    </TouchableOpacity>
</View>
  )
}


// import { View, Text } from 'react-native'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {PluseCount,MinesCount} from './redux/action/counter.action'

// export default function Counter() {
     
//     const dispatch = useDispatch()
//     const count = useSelector(state => state.Counter);

//     hendelPluse = () => {
//          dispatch(PluseCount())
//     }

//     hendelMines = () => {
//      dispatch(MinesCount())
//     }


//     return (
//         <View>
//             <TouchableOpacity
//                 onPress={() => hendelPluse()}>
//                 <Text>+</Text>
//             </TouchableOpacity>
//             <Text>{count.count}</Text>
//             <TouchableOpacity
//                 onPress={() => hendelMines()}>
//                 <Text>-</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }