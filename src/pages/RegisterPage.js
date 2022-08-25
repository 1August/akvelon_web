import '../UI/css/RegisterPage.scss'

import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Header} from "../components/Header";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUserAction} from "../redux/usersReducer";

export const RegisterPage = () => {
    const dispatch = useDispatch()
    // const user = useSelector(state => state.user)
    const users = useSelector(state => state.users.users)

    const [userData, setUserData] = useState({email: '', password: ''})

    const handleFormChange = e => setUserData({...userData, [e.target.type]: e.target.value})

    const handleRegisterSubmit = e => {
        e.preventDefault()

        dispatch(addUserAction(userData))
    }

    return (
        <div className="registerPage" id="registerPage">
            {
                JSON.stringify(users)
            }
            <Container>
                <Row className={'justify-content-center g-5'}>
                    <Col className={'registerPage__goMain col-12'}>
                        <NavLink to={'/'}>Main</NavLink>
                    </Col>
                    <Col className={'registerPage__form col-6'}>
                        <Form className={'py-4'} onSubmit={handleRegisterSubmit}>
                            <Form.Group className={'mb-5 text-center'}>
                                <h1>Sign up for free!</h1>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={handleFormChange}
                                    value={userData.email}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleFormChange}
                                    value={userData.password}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}