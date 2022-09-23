import { addRequest, deleteRequest, EditRequest } from "../request"
import { getRequest } from "../request"


export const Alldata = () => {
    return  getRequest('users')

}

export const AddData = (data) => {
    return  addRequest('users/',data)
}

export const DeleteData = (id) => {
    return  deleteRequest('users/', id)
}

export const Editdata = (data) => {
     return EditRequest('users/',data.id)
}