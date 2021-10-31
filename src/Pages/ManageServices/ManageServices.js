import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Deleted')
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            }
        })
    }
    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div key={service._id}>

                    <div class="card w-50 mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={service.img} class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h1 class="card-title">{service.name}</h1>
                                    <p class="card-text">{service.description}</p>
                                    <h4>$ {service.price}</h4>
                                    <button className="btn" onClick={() => handleDelete(service._id)}>Delete</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageServices;