import {Banner} from "../components/Banner";
import {MainPageContent} from "../components/MainPageContent";

export const MainPage = () => {
    return (
        <div className={'mainPage'} id={'mainPage'}>
            <Banner/>
            <MainPageContent/>
        </div>
    )
}