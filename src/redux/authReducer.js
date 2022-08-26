// const initialState = {
//     id: null,
//     email: '',
//     password: ''
// }
// const SIGN_UP = 'SIGN_UP'
//
// export const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SIGN_UP:
//             return {...state, email: action.payload.email, password: action.payload.password}
//         default:
//             return state
//     }
// }

const initialState = {
    user: null,
    token: null
}

const SET_CREDENTIALS = 'SET_CREDENTIALS'
const LOG_OUT = 'LOG_OUT'

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_CREDENTIALS:
            return {user: action.payload.user, token: action.payload.token}
        case LOG_OUT:
            localStorage.removeItem('user')
            return {user: null, token: null}
        default:
            return state
    }
}

export const setCredentialsAction = payload => ({type: SET_CREDENTIALS, payload})
export const logOutAction = () => ({type: LOG_OUT})

export const selectCurrentUser = state => state.auth.user
export const selectCurrentToken = state => state.auth.token