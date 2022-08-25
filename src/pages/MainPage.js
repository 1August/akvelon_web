import {Header} from "../components/Header";
import {Banner} from "../components/Banner";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "../redux/asyncActions/fetchUsers";

export const MainPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const users = useSelector(state => state.users.users)

    return (
        <main>
            <Header

            />
            <Banner

            />
            <ul>
                {
                    (users && users?.length !== 0 && users.map((el, i) => (
                        <li key={i}>{JSON.stringify(el)}</li>
                    ))) || (
                        <h1>Users list is empty!</h1>
                    )
                }
            </ul>
        </main>
    )
}