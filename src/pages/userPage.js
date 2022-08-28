import {Col, Container, Row} from "react-bootstrap"

import {UserPageUsersList} from "../UI/UserPage/UserPageUsersList";
import {UserPageUserInfo} from "../UI/UserPage/UserPageUserInfo";

/**
 * URL: /user/:email
 * @returns {JSX.Element}
 * @constructor
 */
export const UserPage = () => {
    return (
        <div className="userPage my-5" id="userPage">
            <Container>
                <Row className={'justify-content-center'}>
                    <Col xs={6}>
                        <UserPageUserInfo/>
                        <hr className={'w-75 mx-auto'}/>
                        <Row className={'userPage__usersList'}>
                            <h1>Active users:</h1>
                            <UserPageUsersList/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}