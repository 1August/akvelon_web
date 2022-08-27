import '../assets/css/MainPageContent.scss'

import {Button, Col, Container, Row} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {fetchManyUsers} from "../redux/asyncActions/fetchUsers"

import userAvatar from '../assets/img/user_avatar.png'

export const MainPageContent = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    const generateUsers = () => {
        dispatch(fetchManyUsers())
    }

    return (
        <main className={'mainPageContent'} id={'mainPageContent'}>
            <section className="mainPageContent__usersList py-4" id="usersList">
                <Container>
                    <h1 className={'py-2'}>
                        Take any email to sign in!
                        <Button onClick={generateUsers}>Generate users</Button>
                    </h1>
                    <Row className={'mainPageContent__userCards'}>
                        {
                            users?.length > 0 ? users.map((el, i) => (
                                <Col key={el.id + `${i}`} xs={12} className={'userCard'}>
                                    <div className={'cardImg'}>
                                        <img
                                            className={'m-2 w-75'}
                                            src={el?.avatar || userAvatar}
                                            alt="Avatar"
                                        />
                                    </div>
                                    <div className="cardInfo">
                                        <h3>{`${el.first_name} ${el.last_name}`}</h3>
                                        <p>{`${el.email}`}</p>
                                    </div>
                                </Col>
                            )) : <div>
                                <h1>Users list is empty!</h1>
                            </div>
                        }
                    </Row>
                </Container>
            </section>
        </main>
    )
}