import {NavLink} from "react-router-dom"
import {Col} from "react-bootstrap"

export const HeaderLinksCol = () => {
    return(
        <Col xs={6} sm={6} md={5} className={'header__nav'}>
            <ul className={'d-flex align-items-center gap-4 m-0 p-0 text-info'}>
                <li><NavLink to="/">Home</NavLink></li>
                <li>error page: <NavLink to="/products">Products</NavLink></li>
                <li>have not access: <NavLink to={'/signIn'}>Sign In</NavLink></li>
            </ul>
        </Col>
    )
}