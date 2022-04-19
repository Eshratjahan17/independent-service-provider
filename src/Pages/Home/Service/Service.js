import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
  
  const { name, Popularity, balance, about, picture } = props.service;
  return (
    <div className="col mb-4  ">
      <div className="card p-3 service-card">
        <Card.Img style={{height:"200px",borderRadius:"10px"}} variant="top" src={picture} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>
            <small>{Popularity}</small>
          </p>
          <h1>{balance}</h1>
          <p className="card-text">{about}</p>
          <Link to="/checkout">
            <Button className="mx-auto my-3 btn" variant="success" size="lg">
              Go To Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;