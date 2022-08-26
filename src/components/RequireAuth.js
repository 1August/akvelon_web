import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export const RequireAuth = ({children, ...props}) => {
    const auth = useSelector(state => state.auth)
    const { token } = auth

    if (token){
        return children
    } else {
        return <Navigate to={'/signIn'}/>
    }
}