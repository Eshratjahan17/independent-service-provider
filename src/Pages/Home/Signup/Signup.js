import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div className="container ">
      <Form className="mx-auto w-50 py-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Your Name</Form.Label>
          <Form.Control type="name" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <button type="button" class="btn btn-success signup-btn ">
          Success
        </button>
      </Form>
      <p >
        Already have an account?
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;