import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

export const RequireAuth = ({children}) => {
    const auth = useSelector(state => state.auth)
    return auth.token ? children : <Navigate to={'/signIn'}/>
}