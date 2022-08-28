import '../assets/css/SignUpPage.scss'

import {Button, Col, Container, Form, Row} from "react-bootstrap"
import {NavLink, useNavigate} from "react-router-dom"
import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchUser} from "../redux/asyncActions/fetchUsers"
import {SignUpPageFormGroups} from "../UI/AuthPages/SignUpPageFormGroups"


/**
 * Registration page
 * @returns {JSX.Element}
 * @constructor
 */
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
                            <h1 className={'mb-5 text-center'}>Sign up for free!</h1>
                            <SignUpPageFormGroups
                                userData={userData}
                                setUserData={setUserData}
                            />
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