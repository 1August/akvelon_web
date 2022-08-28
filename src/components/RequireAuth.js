import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

/**
 * Redirect component that will see if user authorized or not
 * @param children
 * @param authReversed if true user can not access if authorized
 * @returns {*|JSX.Element}
 * @constructor
 */
export const RequireAuth = ({children, authReversed = false}) => {
    const { token } = useSelector(state => state.auth)

    if (authReversed) return token ? <Navigate to={'/'}/> : children
    return token ? children : <Navigate to={'/signIn'}/>
}