import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGziYfejwpS2BIF75QbsnVA4F65t5FWUA",
  authDomain: "island-bites.firebaseapp.com",
  projectId: "island-bites",
  storageBucket: "island-bites.appspot.com",
  messagingSenderId: "86108714281",
  appId: "1:86108714281:web:1eb5d51fec559bd57e3338",
  measurementId: "G-905RYR750S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };