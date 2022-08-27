import axios from "axios"
import {addManyUsersAction, addUserAction} from "../usersReducer"
import {setCredentialsAction} from "../authReducer"

export const fetchManyUsers = () => {
    return dispatch => {
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => res.data)
            .then(res => {
                console.log(res.data)
                dispatch(addManyUsersAction(res.data))
            })
    }
}

export const fetchUser = payload => {
    return dispatch => {
        console.log(payload)
        axios.post('https://reqres.in/api/register', {
            username: payload.email,
            email: payload.email,
            password: payload.password
        })
            .then(res => {
                console.log(res)
                if (res.status !== 200) throw new Error(res.message)
                dispatch(addUserAction({...payload, id: res.data.id}))
                dispatch(setCredentialsAction({user: {...payload, id: res.data.id}, token: res.data.token}))

                const user = {
                    id: res.data.id,
                    email: payload.email,
                    first_name: payload.first_name,
                    last_name: payload.last_name,
                    token: res.data.token
                }
                localStorage.setItem('user', JSON.stringify(user))
            })
    }
}

export const login = payload => {
    return dispatch => {
        axios.post('https://reqres.in/api/login', {
            email: payload.email,
            password: payload.password
        }).then(res => {
            if (res.status !== 200) throw new Error(res.message)
            dispatch(setCredentialsAction({user: payload, token: res.data.token}))

            const user = {
                email: payload.email,
                first_name: payload.first_name,
                last_name: payload.last_name,
                token: res.data.token
            }
            localStorage.setItem('user', JSON.stringify(user))
        })
    }
}