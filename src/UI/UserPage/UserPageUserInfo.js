import avatar from "../../assets/img/user_avatar.png"
import {useSelector} from "react-redux"

export const UserPageUserInfo = () => {
    let userEmail = JSON.parse(localStorage.getItem('user')).email
    const users = useSelector(state => state.users.users)
    const user = users.find(el => el.email = userEmail)

    return (
        <>
            <div className="userPage__avatar">
                <img
                    className={'w-50 my-0 d-block mx-auto'}
                    src={user?.avatar || avatar}
                    alt="User avatar"
                />
            </div>
            <div className="userPage__info text-center">
                <h1>{`${user?.first_name} ${user?.last_name}`}</h1>
                <h3>{user?.email}</h3>
            </div>
        </>
    )
}