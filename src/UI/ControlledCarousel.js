import Carousel from 'react-bootstrap/Carousel'
import {useState} from "react"

export const ControlledCarousel = () => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://d2ofqe7l47306o.cloudfront.net/games/1920x1080/lost-in-random-concept-art-02.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://d2ofqe7l47306o.cloudfront.net/games/1920x1080/lost-in-random-concept-art-02.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://d2ofqe7l47306o.cloudfront.net/games/1920x1080/lost-in-random-concept-art-02.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}