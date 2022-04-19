import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialMediaLogIN from '../SocialMediaLogIN/SocialMediaLogIN';
import './Login.css';

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || "/";
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
    navigate(from,{replace:true});
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
        
        <p className="text-danger">{error?.message}</p>

        <input
          className="form-submit btn btn-success signup-btn "
          type="submit"
          value="Log In"
          required
        />
      </Form>
      <p className="text-center">
       New to Relish Weddings?
        <Link
          to="/signup"
          className="text-primary pe-auto text-decoration-none "
        >
          Sign up
        </Link>

      </p>
      <SocialMediaLogIN></SocialMediaLogIN>
    </div>
  );
};

export default Login;