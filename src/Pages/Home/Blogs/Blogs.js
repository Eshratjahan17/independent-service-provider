import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='container blogs'>
      <div>
        <h4>Difference between authorization and authentication :</h4>
        <p>
          1.In Authentication , identity is checked for providing access to the
          system . <br></br>
          2.In authorization identity checked for accessing the resources.
          <br></br>
          3.In Authentication,usually needs log in details.<br></br>
          4.In authorization,it needs user's previlege or security.
        </p>
      </div>
      <div>
        <h4>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p>
          I'm using firebase for authentication system,like log in ,sign in ,log
          out ,protect my pages from unauthoriezed user . <br></br>
          Other ways to do authentication is ,through cards, retina scans,voice
          records,fringerprints etc.
        </p>
      </div>
      <div>
        <h4>
          What other services does firebase provide other than authentication?
        </h4>
        <p>
        There are many services that fribase provides :
        1.Cloud Firestore
        2.Cloud Functions
        3.Cloud Storage 
        4.Google Analytics 
        5.Predictions .
        </p>
      </div>
    </div>
  );
};

export default Blogs;