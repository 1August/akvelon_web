const initialState = {
    users: []
}

const ADD_MANY_USERS = 'ADD_MANY_USERS'
const GET_USERS = 'GET_USERS'
const ADD_USER = 'ADD_USER'
// const REMOVE_USER = 'REMOVE_USER'

export const usersReducer = (state = initialState, action) => {
    console.log({state, action})

    switch (action.type){
        case GET_USERS:
            return {users: state.users}
        case ADD_MANY_USERS:
            return {...state, users: [...state.users, ...action.payload]}
        case ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        // case REMOVE_USER:
        //     return {...state, users: state.users.filter(el => el.email !== action.payload.email)}
        default:
            return state
    }
}

export const addManyUsersAction = payload => ({type: ADD_MANY_USERS, payload})
export const getUsersAction = () => ({type: GET_USERS})
export const addUserAction = payload => ({type: ADD_USER, payload})
// export const removeUserAction = payload => ({type: REMOVE_USER, payload})