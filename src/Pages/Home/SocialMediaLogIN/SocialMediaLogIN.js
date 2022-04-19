import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import googleLogo from '../../../images/google.png';
import './SocialMediaLogIN.css';

const SocialMediaLogIN = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleGoogleLogIn=()=>{
    signInWithGoogle();
  }
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div
          style={{ height: "3px", width: "250px" }}
          className="bg-success "
        ></div>
        <h5 className="mt-2 px-2   font-weight-bold ">OR</h5>
        <div
          style={{ height: "3px", width: "250px" }}
          className="bg-success "
        ></div>
      </div>
      <div className="">
        <button onClick={handleGoogleLogIn} className="google-login ">
          <img src={googleLogo} alt="" />
          <h5>Log in with Google</h5>
        </button>
      </div>
    </div>
  );
};

export default SocialMediaLogIN;