import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

import {NavRoutes} from "./Routes/NavRoutes";
import {Header} from "./components/Header";
import {useSelector} from "react-redux";

export const App = () => {
    const user = useSelector(state => state.auth.user)

    return (
        <div className="App">
            { user?.email && <Header/>}
            <NavRoutes/>
        </div>
    )
}