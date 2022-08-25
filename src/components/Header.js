import '../UI/css/Header.scss'
import {Button, Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const Header = () => {

    const user = {
        id: 1,
        // name: 'Maksat',
        // email: 'maksat@mail.com',
    }

    return (
        <header className={'header'} id={'header'}>
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
                            <li><NavLink to="/register">Products</NavLink></li>
                            <li><NavLink to="/login">About</NavLink></li>
                        </ul>
                    </Col>
                    <Col xs={6} sm={6} md={3} className={'header__auth'}>
                        <ul className={'d-flex justify-content-end align-items-center gap-4 m-0 p-0'}>
                            {
                                user?.email ?
                                    <li><NavLink to={`/user/${user.id}`}>{user.name}</NavLink></li> :
                                    <li><NavLink to="/signUp">Register</NavLink></li>
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}