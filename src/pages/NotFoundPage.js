import {Header} from "../components/Header";
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const NotFoundPage = () => {
    const user = localStorage.getItem('user')

    return(
        <div className="notFoundPage" id="notFoundPage">
            <main>
                <Container>
                    <Row className={'justify-content-center mt-5 '}>
                        <Col xs={12} className={'text-center'}>
                            <h1 className={'text-danger'}>Error 404. Page not found!</h1>
                            {
                                user && <h5><NavLink to={'/'} className={'text-decoration-none'}>Go Home</NavLink></h5>
                            }
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    )
}