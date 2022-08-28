import {NavLink} from "react-router-dom"
import {Col} from "react-bootstrap"

export const HeaderLogoCol = () => {
    return(
        <Col md={3} className={'header__brand d-flex justify-content-md-start justify-content-center'}>
            <h1><NavLink to={'/'}>Akvelon</NavLink></h1>
        </Col>
    )
}