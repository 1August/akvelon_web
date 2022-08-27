import {Route, Routes} from "react-router-dom"
import {MainPage} from "../pages/MainPage"
import {SignUpPage} from "../pages/SignUpPage"
import {SignInPage} from "../pages/SignInPage"
import {NotFoundPage} from "../pages/NotFoundPage"
import {UserPage} from "../pages/userPage"
import {RequireAuth} from "../components/RequireAuth"

export const NavRoutes = () => {
    return (
        <Routes>
            <Route
                path={'/'}
                element={<RequireAuth children={<MainPage/>}/>}
            />
            <Route
                path={'/signUp'}
                element={<RequireAuth children={<SignUpPage/>} reverse={true}/>}
            />
            <Route
                path={'/signIn'}
                element={<RequireAuth children={<SignInPage/>} reverse={true}/>}
            />
            <Route
                path={'/user/:email'}
                element={<RequireAuth children={<UserPage/>}/>}
            />
            <Route
                path={'*'}
                element={<NotFoundPage/>}
            />
        </Routes>
    )
}