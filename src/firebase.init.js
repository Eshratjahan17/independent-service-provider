// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNRyD3z2-WN77H8ub2YEfPixcVoJ66ATA",
  authDomain: "independent-service-prov-d0bbd.firebaseapp.com",
  projectId: "independent-service-prov-d0bbd",
  storageBucket: "independent-service-prov-d0bbd.appspot.com",
  messagingSenderId: "37657972201",
  appId: "1:37657972201:web:513a149b49a695b5e0cf78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;