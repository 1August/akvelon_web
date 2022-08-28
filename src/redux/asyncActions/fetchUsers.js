import axios from "axios"
import {addManyUsersAction, addUserAction} from "../usersReducer"
import {setCredentialsAction} from "../authReducer"

/**
 * Sets users in store
 * @returns {function(*): Promise<*>}
 */
export const fetchManyUsers = () =>
    dispatch =>
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => dispatch(addManyUsersAction(res.data.data)))

/**
 * Aka registration
 * @param payload
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const fetchUser = payload =>
    dispatch =>
        axios.post('https://reqres.in/api/register', {
            username: payload.email,
            email: payload.email,
            password: payload.password
        })
            .then(res => {
                if (res.status !== 200) return
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

/**
 * Logins only email that have in API
 * @param payload
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const login = payload =>
    dispatch =>
        axios.post('https://reqres.in/api/login', {
            email: payload.email,
            password: payload.password
        })
            .then(res => {
                if (res.status !== 200) return
                dispatch(setCredentialsAction({user: payload, token: res.data.token}))

                const user = {
                    email: payload.email,
                    first_name: payload.first_name,
                    last_name: payload.last_name,
                    token: res.data.token
                }
                localStorage.setItem('user', JSON.stringify(user))
            })