import 'bootstrap/dist/css/bootstrap.min.css';
// import './UI/css/default.scss'
import './App.scss'
import {NavRoutes} from "./Routes/NavRoutes";
import {Header} from "./components/Header";
import {Banner} from "./components/Banner";

export const App = () => {
  return (
    <div className="App">
        <Header

        />
        <NavRoutes/>

        {/*<RequireAuth>*/}
        {/*</RequireAuth>*/}
    </div>
  )
}