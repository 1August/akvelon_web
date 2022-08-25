import axios from "axios";
import {addManyUsersAction} from "../usersReducer";

export const fetchUsers = () => {
    return dispatch => {
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => res.data)
            .then(res => {
                console.log(res.data)
                dispatch(addManyUsersAction(res.data))
            })
    }
}