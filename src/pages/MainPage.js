import {Banner} from "../components/Banner"
import {MainPageContent} from "../components/MainPageContent"

/**
 * Shows after sign in/sign up
 * @returns {JSX.Element}
 * @constructor
 */
export const MainPage = () => {
    return (
        <div className={'mainPage'} id={'mainPage'}>
            <Banner/>
            <MainPageContent/>
        </div>
    )
}