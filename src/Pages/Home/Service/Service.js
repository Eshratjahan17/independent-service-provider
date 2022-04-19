import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
  
  const {name,Popularity,balance,about}=props.service;
  return (
    <div className="col mb-4  ">
      <div className="card p-3 service-card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>
            <small>{Popularity}</small>
          </p>
          <h1>{balance}</h1>
          <p className="card-text">{about}</p>
          <Button className='mx-auto my-3 btn' variant="success" size="lg">
            Go To Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;