import {Col} from "react-bootstrap"
import avatar from "../../assets/img/user_avatar.png"
import {useSelector} from "react-redux"

export const UserPageUsersList = () => {
    const users = useSelector(state => state.users.users)

    return(
        <>
            {
                users.length > 0 ? users.map((el, i) => (
                    <Col xs={3} key={`${el.id}${i}`} className={'p-1'}>
                        <img
                            className={'w-100'}
                            src={el?.avatar || avatar}
                            alt="User"
                        />
                    </Col>
                )) : <h1>Users list is empty!</h1>
            }
        </>
    )
}