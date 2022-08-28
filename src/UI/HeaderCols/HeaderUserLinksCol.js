import {NavLink, useNavigate} from "react-router-dom"
import {Col} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {logOutAction} from "../../redux/authReducer"

export const HeaderUserLinksCol = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const {user} = auth

    const navigator = useNavigate()

    const handleLogout = () => {
        dispatch(logOutAction())
        navigator('/')
    }

    return(
        <Col xs={6} sm={6} md={4} className={'header__auth'}>
            <ul className={'d-flex justify-content-end align-items-center gap-4 m-0 p-0'}>
                {
                    user?.email ?
                        <>
                            <li><NavLink to={`/user/${user.email}`}>
                                {user.email}
                            </NavLink></li>
                            <li><span onClick={handleLogout} className={'logout'}>
                                            Log out
                                        </span></li>
                        </> :
                        <li><NavLink to="/signIn">Sign in</NavLink></li>
                }
            </ul>
        </Col>
    )
}