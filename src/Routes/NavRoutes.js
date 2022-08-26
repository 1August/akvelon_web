import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {SignUpPage} from "../pages/SignUpPage";
import {SignInPage} from "../pages/SignInPage";
import {NotFoundPage} from "../pages/NotFoundPage";
import {UserPage} from "../pages/userPage";
import {RequireAuth} from "../components/RequireAuth";

export const NavRoutes = () => {
    const getWrappedElement = (children, reverse = false) => <RequireAuth children={children} reverse={reverse}/>

    return(
        <Routes>
            <Route path={'/'} element={getWrappedElement(<MainPage/>)}/>
            <Route path={'/signUp'} element={getWrappedElement(<SignUpPage/>, true)}/>
            <Route path={'/signIn'} element={getWrappedElement(<SignInPage/>, true)}/>
            <Route path={'/user/:email'} element={getWrappedElement(<UserPage/>)}/>
            <Route path={'*'} element={<NotFoundPage/>}></Route>
        </Routes>
    )
}