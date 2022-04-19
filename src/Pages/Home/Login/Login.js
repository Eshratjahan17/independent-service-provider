import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();
  const handleloginEmail=(event)=>{
    setEmail(event.target.value);
  }
  const handleloginPassword = (event) => {
    setPassword(event.target.value);
  };
  const handlelogin =(event)=>{
    event.preventDefault();
    signInWithEmailAndPassword(email,password);

  }
  if(user){
    navigate('/home');
  }
  return (
    <div className="container ">
      <Form onSubmit={handlelogin} className="mx-auto w-50 py-5">

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleloginEmail}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handleloginPassword}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        
        <p className="text-danger">{}</p>

        <input
          className="form-submit btn btn-success signup-btn "
          type="submit"
          value="Sign Up"
          required
        />
      </Form>
      <p className="text-center">
       New to Relish Weddings?
        <Link
          to="/signup"
          className="text-primary pe-auto text-decoration-none "
        >
          Please SignUp
        </Link>
      </p>
    </div>
  );
};

export default Login;