import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 2000,
  });

const sendRequest = (config) => {
    return  axiosInstance.request(config)
}

export  const getRequest = (path) => {
   return sendRequest({ 
    url:path,
    method:"get"
   })
}

export  const addRequest = (path,data) => {
    // console.log("addd requast fie doneeee");
    return sendRequest({
     url:path + data ,
     method:"post"
    })
 }

export  const deleteRequest = (path, id) => {
    console.log("requast fie doneeee",id);
    return sendRequest({
     url:path + id, 
     method:"delete"
    })
 }


 export  const EditRequest = (path, data) => {
    // console.log("requast fie doneeee",data;
    return sendRequest({
     url:path + data.id, 
     method:"put"
    })
 }



