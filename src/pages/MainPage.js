import {Header} from "../components/Header";
import {Banner} from "../components/Banner";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "../redux/asyncActions/fetchUsers";
import {MainPageContent} from "../components/MainPageContent";

export const MainPage = () => {



    return (
        <div className={'mainPage'} id={'mainPage'}>
            <Banner/>
            <MainPageContent/>
        </div>
    )
}