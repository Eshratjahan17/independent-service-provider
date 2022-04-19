import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Signup.css';


const Signup = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [error,setError]=useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
    const navigate=useNavigate();

  const handleName=(event)=>{
    setName(event.target.value);
  }
  const handleEmail=(event)=>{
    setEmail(event.target.value);
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value);
  }
  const handleConfirmPassword=(event)=>{
    setConfirmPassword(event.target.value);

  }
  if(user){
    navigate('/home');
  }
  const handleSignUp=(event)=>{
    event.preventDefault();
    if(password.length <6){
      setError('Password Should be atleast 6 Charecters');
    return; 
    }
    if(password !== confirmPassword){
      setError('Password Did not matched');
      return;
    }
    createUserWithEmailAndPassword(email,password);

  }

  return (
    <div className="container ">
      <Form onSubmit={handleSignUp} className="mx-auto w-50 py-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Your Name</Form.Label>
          <Form.Control
            onBlur={handleName}
            type="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePassword}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={handleConfirmPassword}
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <p className='text-danger'>{error}</p>

        <input
          className="form-submit btn btn-success signup-btn "
          type="submit"
          value="Sign Up"
          required
        />
      </Form>
      <p className='text-center'>
        Already have an account?
        <Link to="/login" className="text-primary pe-auto text-decoration-none ">
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;