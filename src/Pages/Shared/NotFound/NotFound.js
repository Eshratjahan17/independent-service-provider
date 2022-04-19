import React from 'react';
import errorImg from "../../../images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <img className='w-100 mb-0' src={errorImg} alt="" />
    </div>
  );
};

export default NotFound;