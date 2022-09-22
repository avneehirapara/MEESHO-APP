import { addRequest, deleteRequest, EditRequest } from "../request"
import { getRequest } from "../request"


export const Alldata = () => {
    return  getRequest('comments')

}

export const AddData = (data) => {
    return  addRequest('comments/',data)
}

export const DeleteData = (id) => {
    return  deleteRequest('comments/', id)
}

export const Editdata = (data) => {
     return EditRequest('comments/',data.id)
}