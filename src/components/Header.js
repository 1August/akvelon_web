import '../assets/css/Header.scss'
import {Col, Container, Row} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../redux/asyncActions/fetchUsers";

export const Header = () => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const { user } = auth

    const navigator = useNavigate()

    const handleLogout = () => {
        dispatch(logOut())
        navigator('/')
    }

    return (
        <header className={'header py-2'} id={'header'}>
            <Container>
                <Row className={'align-items-center g-4 g-md-0'}>
                    <Col md={3} className={'header__brand d-flex justify-content-md-start justify-content-center'}>
                        <h1>
                            <NavLink to={'/'}>
                                Akvelon
                            </NavLink>
                        </h1>
                    </Col>
                    <Col xs={6} sm={6} md={6} className={'header__nav'}>
                        <ul className={'d-flex align-items-center gap-4 m-0 p-0'}>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/products">Products</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={6} md={3} className={'header__auth'}>
                        <ul className={'d-flex justify-content-end align-items-center gap-4 m-0 p-0'}>
                            {
                                user?.email ?
                                    <>
                                        <li><NavLink to={`/user/${user.email}`}>{user.email}</NavLink></li>
                                        <li><span onClick={handleLogout}>Log out</span></li>
                                    </> :
                                    <li><NavLink to="/signIn">Sign in</NavLink></li>
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}