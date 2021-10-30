import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/main-slider-2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <img src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/best-hotel.png" alt="" />
                        <h1>Find your <span className="title">Paradise</span></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/main-slider-3.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1><span className="title">Asian</span> Islands last Minits</h1>
                        <button className="btn">Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/main-slider-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <img src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/h6-img-1-yellow.png" alt="" />
                        <h1><span className="title">Thailand</span> Last Minists</h1>
                        <h4 className="text-danger">30% Off In August</h4>
                        <button className="btn">Subscribe</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;