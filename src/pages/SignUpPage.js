import '../assets/css/RegisterPage.scss'

import {Button, Col, Container, Form, Row} from "react-bootstrap"
import {NavLink, useNavigate} from "react-router-dom"
import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchUser} from "../redux/asyncActions/fetchUsers";

export const SignUpPage = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const navigation = useNavigate()

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    })

    if (auth.token) navigation('/')

    const handleFormChange = e => setUserData({...userData, [e.target.name]: e.target.value})
    const handleRegisterSubmit = e => {
        e.preventDefault()
        dispatch(fetchUser(userData))
    }

    return (
        <div className="registerPage" id="registerPage">
            <Container>
                <Row className={'justify-content-center my-5'}>
                    <Col xs={6} className={'registerPage__form'}>
                        <Form className={'py-4'} onSubmit={handleRegisterSubmit}>
                            <Form.Group className={'mb-5 text-center'}>
                                <h1>Sign up for free!</h1>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    name={'first_name'}
                                    type="text"
                                    placeholder="Enter first name"
                                    onChange={handleFormChange}
                                    value={userData.first_name}
                                    required={true}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    name={'last_name'}
                                    type="text"
                                    placeholder="Enter last name"
                                    onChange={handleFormChange}
                                    value={userData.last_name}
                                    required={true}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    name={'email'}
                                    type="email"
                                    placeholder="Enter email (ex: george.bluth@reqres.in)"
                                    onChange={handleFormChange}
                                    value={userData.email}
                                    required={true}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name={'password'}
                                    type="password"
                                    placeholder="Password (tip: any)"
                                    onChange={handleFormChange}
                                    value={userData.password}
                                    required={true}
                                />
                            </Form.Group>
                            <Form.Group className={'d-flex g-4 align-items-center'}>
                                <Button className={'me-4'} variant="primary" type="submit">
                                    Sign Up
                                </Button>
                                <NavLink to={'/signIn'}>Already have an account?</NavLink>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}