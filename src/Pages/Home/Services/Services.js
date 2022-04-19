import React from 'react';
import useData from '../../../Hooks/useData';
import Service from '../Service/Service';

const Services = () => {
  const [services,setServices]=useData([]);
  
  return (
    <div className="container">
      <h1 className="text-center my-5">Services</h1>
      <div className="row row-cols-1 row-cols-lg-3 g-5 card-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;