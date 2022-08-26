import {ControlledCarousel} from "../UI/ControlledCarousel";
import {Container} from "react-bootstrap";

export const Banner = () => {
    return(
        <div className={'banner'} id={'banner'}>
            <ControlledCarousel/>
        </div>
    )
}