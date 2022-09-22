

export const fetchPostAPI = () => {
//  console.log('avnee');
    try {
        return new Promise((resolve,reject)=>{
            fetch('http://192.168.2.221:8000/posts')
            .then((response) => response.json())
            .then((data)=>resolve(data))
            .catch((error)=>reject(error))
         })
    } catch (e) {
        reject(e); 
    }
}

export const addPostAPI = (data) => {
    // console.log('avnee');
       try {
           return new Promise((resolve,reject)=>{
               fetch('http://192.168.2.221:8000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
               })
               .then((response) => response.json())
               .then((data)=>resolve(data))
               .catch((error)=>reject(error))
            })
       } catch (e) {
           reject(e); 
       }
   }


   export const DeletePostAPI = (id) => {
    console.log('API file done' , id );
       try {
           return new Promise((resolve,reject)=>{
               fetch('http://192.168.2.221:8000/posts/'+id, {
                method: 'DELETE',
               })
               .then(resolve(id))
               .catch((error)=>reject(error))
            })
       } catch (e) {
           reject(e); 
       }
   }


   export const EditPostAPI = (data) => {
    console.log(' Edite API file done' , data );
       try {
           return new Promise((resolve,reject)=>{
               fetch('http://192.168.2.221:8000/posts/'+data.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
               })
               .then((response) => response.json())
               .then((data)=>resolve(data))
               .catch((error)=>reject(error))
            })
       } catch (e) {
           reject(e); 
       }
   }
   