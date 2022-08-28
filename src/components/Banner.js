import {ControlledCarousel} from "../UI/ControlledCarousel"

/**
 * Bootstrap banner
 * @returns {JSX.Element}
 * @constructor
 */
export const Banner = () => {
    return (
        <div className={'banner'} id={'banner'}>
            <ControlledCarousel/>
        </div>
    )
}