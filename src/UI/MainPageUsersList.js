import {Col} from "react-bootstrap"
import userAvatar from "../assets/img/user_avatar.png"
import {useSelector} from "react-redux"

export const MainPageUsersList = () => {
    const users = useSelector(state => state.users.users)

    return(
        <>
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
        </>
    )
}