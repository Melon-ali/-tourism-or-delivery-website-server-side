import React, { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [homes, setHomes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setHomes(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <div className="home-container">
                <div className=" p-5">
                    <h1><span className="font">Amazing</span> <span className="font-2">Tours And Fun</span> <br /> <span className="font-2">Adventures</span>  <span className="font">Waiting For You</span></h1>
                    <h5 className="py-4 font-2">The internet is FULL of people who love to talk and share. But if you don’t know who a blogger is and what they’re about, it’s difficult to know whether or not their advice is, or will eventually be, helpful to you. The internet is FULL of people who love to talk and share. But if you don’t know who a blogger is and what they’re about, it’s difficult to know whether or not their advice is, or will eventually be, helpful to you.</h5>
                </div>
                <div className="">
                    <img src="https://www.logolynx.com/images/logolynx/0d/0d7a2e2866ce34c0fc7616939a19bba1.jpeg" alt="" />
                </div>
            </div>
            <br />
            <div id="services" className="service-container">
                {
                    homes.map(service => <Service
                        service = {service}
                    ></Service>)
                }
            </div>
            <div className="home-container pt-5">
                <div className="p-4">
                    <h1><span className="font-2">Trending,</span> <span className="font">Best Selling <br /> Tours And</span>  <span className="font-2">Fun Destinations</span></h1>
                    <h5 className="py-4 font-2">The internet is FULL of people who love to talk and share. But if you don’t know who a blogger is and what they’re about, it’s difficult to know whether or not their advice is, or will eventually be, helpful to you. The internet is FULL of people who love to talk and share. But if you don’t know who a blogger is and what they’re about, it’s difficult to know whether or not their advice is, or will eventually be, helpful to you.</h5>
                </div>
                <div className="">
                    <h1 className="fs">AWAY</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;