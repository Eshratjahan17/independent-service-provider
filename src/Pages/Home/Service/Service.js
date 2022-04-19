import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
  
  const {name,Popularity,balance,about}=props.service;
  return (
    <div className="col ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>
            <small>{Popularity}</small>
          </p>
          <h1>{balance}</h1>
          <p className="card-text">{about}</p>
          <Button className='btn' variant="success">Success</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Service;