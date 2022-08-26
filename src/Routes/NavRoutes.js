import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {SignUpPage} from "../pages/SignUpPage";
import {SignInPage} from "../pages/SignInPage";
import {NotFoundPage} from "../pages/NotFoundPage";
import {UserPage} from "../pages/userPage";
import {RequireAuth} from "../components/RequireAuth";

export const NavRoutes = () => {
    return(
        <Routes>
            <Route path={'/'} element={
                <RequireAuth>
                    <MainPage/>
                </RequireAuth>
            }/>
            <Route path={'/signUp'} element={<SignUpPage/>}/>
            <Route path={'/signIn'} element={<SignInPage/>}/>
            <Route path={'/user/:email'} element={
                <RequireAuth>
                    <UserPage/>
                </RequireAuth>
            }/>
            <Route path={'*'} element={<NotFoundPage/>}></Route>
        </Routes>

    )
}