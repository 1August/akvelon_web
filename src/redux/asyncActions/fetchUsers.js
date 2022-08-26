import axios from "axios";
import {addManyUsersAction, addUserAction} from "../usersReducer";
import {logOutAction, setCredentialsAction} from "../authReducer";

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

export const fetchUser = (payload) => {
    return dispatch => {
        axios.post('https://reqres.in/api/users', payload)
            .then(res => {
                console.log(res)
                if (res.status === 201) {
                    dispatch(addUserAction({...payload, id: res.data.id, createdAt: res.data.createdAt}))

                    // auth.login(res.data.token, res.data.id)
                    // navigation('/')
                }
            })
    }
}

// export const loginUser = (payload) => {
//     return dispatch => {
//         axios.post('https://reqres.in/api/login', {
//             email: payload.email,
//             password: payload.password
//         }).then(res => {
//             console.log(res)
//             // res.data.token
//
//             if (res.status !== 200) {
//                 throw new Error(res.message)
//             }
//             // const user = {email: payload.email, token: res.data.token}
//
//             // auth.login(res.data.token, auth.getId())
//             // navigation('/')
//             // dispatch()
//         })
//     }
//
//     // console.log('loginUser Action > ', payload)
//
//     // const users = JSON.parse(localStorage.getItem('users')) || []
//     // if (users.length !== 0){
//     //     let user = users.find(el => el.email === payload.email && el.password === payload.password)
//     //     if (!user){
//     // }
//     // }
//



export const login = payload => {
    return dispatch => {
        axios.post('https://reqres.in/api/login', {
            email: payload.email,
            password: payload.password
        }).then(res => {
            console.log(res)

            if (res.status !== 200) throw new Error(res.message)
            dispatch(setCredentialsAction({user: payload, token: res.data.token}))
        })
    }
}

export const logOut = () => dispatch => dispatch(logOutAction())