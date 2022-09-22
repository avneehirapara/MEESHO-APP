import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

export default function SyncronizeAsyncronize() {


  // 1 // syncronize : one after another ,In order     // one undefind  three     //axios without async await 

  const one = () => {
      return '1 number'
  }

  const two = () => {
    setTimeout(()=>{return 'secondans'} , 2000)
  }

  const three = () => {

      return '3 number'
  }

  const All = () => {
      const firstAns = one();
      console.log(firstAns);


      const secondAns = two();
      console.log(secondAns);


      const thirdAns = three();
      console.log(thirdAns);
}
      useEffect(()=>{
          All();
      },[])


  // 2 // Asyncronize : Allow other process to run , not in order      // onr promises <pending> three  // axios with async await 
  //one two(wait for 3  sec)  three // axios with async await 
  // const one = () => {
  //     return '1 number'
  // }

  // const two = () => {
  //     return new Promise((resolve, reject) => {
  //         setTimeout(() => resolve('2 number'), 2000);
  //     })
  // }

  // const three = () => {

  //     return new Promise((resolve, reject) => {
  //         setTimeout(() => resolve('3 number'), 2000);
  //     })
  // }

  // const fore = () => {
  //     return '4 number'
  // }

  // const All = async () => {

  //     const firstAns = one();
  //     console.log(firstAns);


  //     const secondAns = await two();
  //     console.log(secondAns);


  //     const thirdAns = await three();
  //     console.log(thirdAns);

  //     const foreAns =  fore();
  //     console.log(foreAns);
// }
  //     useEffect(() => {
  //         All();
  //     }, [])


  //3 // callback funtion is called after working some task
  // promises.all resolve all
  // const All = () => {
  //   const print = (Total) => {
  //     console.log(Total);
  //   }

  //   const sum = (a, b,callback) => {
  //     Total = a + b;

  //     callback(Total)
  //   }
  //   sum(10, 20, print);
  // }



  // useEffect(() => {
  //   All()
  // }, [])

  return (
    <View>
      <Text>SyncronizeAsyncronize</Text>
    </View>
  )
}