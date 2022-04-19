import React from 'react';
import myImg from '../../../images/my-img.png';

const About = () => {
  return (
    <div className="d-flex align-items-center">
      <img
        style={{ height: "300px", width: "300px", borderRadius: "300px" ,margin:"10px 20px"}}
        src={myImg}
        alt=""
      />
      <div className="ms-5 mt-5">
        <h3>My Goal</h3>
        <p style={{width:"400px"}}>
          My future goal is to be a web developer,and to get an job in related
          field.I prefer remote jobs.I want to get heired from any It Company of
          Uk.This was all about my goal.
        </p>
      </div>
    </div>
  );
};

export default About;