import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

export const RequireAuth = ({children, reverse = false}) => {
    const { token } = useSelector(state => state.auth)

    if (reverse) return token ? <Navigate to={'/'}/> : children
    return token ? children : <Navigate to={'/signIn'}/>
}