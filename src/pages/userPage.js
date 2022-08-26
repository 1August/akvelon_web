import {Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";

import avatar from '../assets/img/user_avatar.png'
import {useEffect, useRef} from "react";

export const UserPage = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    const users = useSelector(state => state.users.users)

    return(
        <div className="userPage my-5" id="userPage">
            <Container>
                <Row className={'justify-content-center'}>
                    <Col xs={6}>
                        <div className="userPage__avatar">
                            <img className={'w-50 my-0 d-block mx-auto'} src={user?.avatar || avatar} alt="User avatar"/>
                        </div>
                        <div className="userPage__info text-center">
                            <h1>{`${user?.first_name} ${user?.last_name}`}</h1>
                            <h3>{user?.email}</h3>
                        </div>
                        <Row className={'justify-content-center'}>
                            <Col xs={10}>
                                <hr/>
                            </Col>
                        </Row>
                        <Row className={'userPage__usersList'}>
                            <h1>Active users:</h1>
                            {
                                users.length > 0 ? users.map((el, i) => (
                                    <Col xs={3} key={`${el.id}${i}`}>
                                        <img className={'w-100'} src={el?.avatar || avatar} alt="User"/>
                                    </Col>
                                )) : <h1>Users list is empty!</h1>
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}