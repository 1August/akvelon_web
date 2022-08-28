import '../assets/css/Header.scss'

import {Container, Row} from "react-bootstrap"

import {HeaderLogoCol} from "../UI/HeaderCols/HeaderLogoCol"
import {HeaderLinksCol} from "../UI/HeaderCols/HeaderLinksCol"
import {HeaderUserLinksCol} from "../UI/HeaderCols/HeaderUserLinksCol"

/**
 * Navigation of the page
 * @returns {JSX.Element}
 * @constructor
 */
export const Header = () => {
    return (
        <header className={'header py-2'} id={'header'}>
            <Container>
                <Row className={'align-items-center g-4 g-md-0'}>
                    <HeaderLogoCol/>
                    <HeaderLinksCol/>
                    <HeaderUserLinksCol/>
                </Row>
            </Container>
        </header>
    )
}