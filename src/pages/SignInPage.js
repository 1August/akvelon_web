import {Button, Col, Container, Form, Row} from "react-bootstrap"
import {NavLink, useNavigate} from "react-router-dom"
import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {login} from "../redux/asyncActions/fetchUsers"

export const SignInPage = () => {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const [userData, setUserData] = useState({email: '', password: ''})

    if (auth.token) navigation('/')

    const handleFormChange = e => setUserData({...userData, [e.target.name]: e.target.value})
    const handleLoginSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className="loginPage" id="loginPage">
            <Container>
                <Row className={'justify-content-center my-5'}>
                    <Col xs={6} className={'registerPage__form'}>
                        <Form className={'py-4'} onSubmit={handleLoginSubmit}>
                            <Form.Group className={'mb-5 text-center'}>
                                <h1>Sign in</h1>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    name={'email'}
                                    type="email"
                                    placeholder="Enter email (ex: george.bluth@reqres.in)"
                                    onChange={handleFormChange}
                                    value={userData.email}
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
                                />
                            </Form.Group>
                            <Form.Group className={'d-flex g-4 align-items-center'}>
                                <Button className={'me-4'} variant="primary" type="submit">
                                    Sign In
                                </Button>
                                <NavLink to={'/signUp'}>Join us!</NavLink>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}