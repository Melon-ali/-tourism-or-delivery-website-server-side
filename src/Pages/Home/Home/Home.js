import React, { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    const [homes, setHomes] = useState([])
    useEffect(() => {
        fetch('/fake.json')
        .then(res => res.json())
        .then(data => setHomes(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <br />
            <div id="services" className="service-container">
                {
                    homes.map(service => <Service
                        service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Home;