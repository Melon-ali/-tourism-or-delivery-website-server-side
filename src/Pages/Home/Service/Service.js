import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name, description, img, price} = props.service;
    return (
        <div>
            <div className="">
                <div class="card service">
                    <img src={img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h1 class="card-title">{name}</h1>
                        <p class="card-text px-2">{description}</p>
                        <div className="d-flex bd-highlight">
                            <div className=" flex-grow-1 bd-highlight">
                                {/* <Link to={`/details/${id}`}> */
                                <button className="btn">Read More</button>
                                /*</Link> */}
                            </div>
                            <div className=" flex-grow-1 bd-highlight"><h3>$ {[price]}</h3></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;