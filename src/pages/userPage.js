import {Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";

import avatar from '../assets/img/user_avatar.png'

export const UserPage = () => {
    const user = useSelector(state => state.auth.user)

    return(
        <div className="userPage my-5" id="userPage">
            <Container>
                <Row className={'justify-content-center'}>
                    <Col xs={6}>
                        <div className="userPage__avatar">
                            <img className={'w-50 my-0 d-block mx-auto'} src={user?.avatar || avatar} alt="User avatar"/>
                        </div>
                        <div className="userPage__info">
                            <h1 className={'text-center'}>{user.email}</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}