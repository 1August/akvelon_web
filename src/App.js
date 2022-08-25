import 'bootstrap/dist/css/bootstrap.min.css';
// import './UI/css/default.scss'
import './App.scss'
import {NavRoutes} from "./Routes/NavRoutes";

export const App = () => {
  return (
    <div className="App">
        <NavRoutes/>

        {/*<RequireAuth>*/}
        {/*    <MainPage/>*/}
        {/*</RequireAuth>*/}
    </div>
  )
}