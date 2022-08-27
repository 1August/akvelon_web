import {Col, Container, Row} from "react-bootstrap"

export const NotFoundPage = () => {
    return (
        <div className="notFoundPage" id="notFoundPage">
            <main>
                <Container>
                    <Row className={'justify-content-center mt-5 '}>
                        <Col xs={12} className={'text-center'}>
                            <h1 className={'text-danger'}>Error 404. Page not found!</h1>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    )
}