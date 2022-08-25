import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {RegisterPage} from "../pages/RegisterPage";

export const NavRoutes = () => {
    return(
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/signUp'} element={<RegisterPage/>}/>
        </Routes>

    )
}