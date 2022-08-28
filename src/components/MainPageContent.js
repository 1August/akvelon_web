import '../assets/css/MainPageContent.scss'

import {Button, Container, Row} from "react-bootstrap"
import {useDispatch} from "react-redux"
import {fetchManyUsers} from "../redux/asyncActions/fetchUsers"
import {MainPageUsersList} from "../UI/MainPageUsersList";

/**
 * Part of main page component
 * @returns {JSX.Element}
 * @constructor
 */
export const MainPageContent = () => {
    const dispatch = useDispatch()

    const generateUsers = () => {
        dispatch(fetchManyUsers())
    }

    return (
        <main className={'mainPageContent'} id={'mainPageContent'}>
            <section className="mainPageContent__usersList py-4" id="usersList">
                <Container>
                    <h1 className={'py-2'}>Take any email to sign in!</h1>
                    <Button onClick={generateUsers}>Generate users</Button>
                    <Row className={'mainPageContent__userCards'}>
                        <MainPageUsersList/>
                    </Row>
                </Container>
            </section>
        </main>
    )
}