import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

export const RequireAuth = ({children, reverse = false}) => {
    const auth = useSelector(state => state.auth)
    console.log(auth)

    if (reverse) return auth.token ? <Navigate to={'/'}/> : children
    return auth.token ? children : <Navigate to={'/signIn'}/>
}