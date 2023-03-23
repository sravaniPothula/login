import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0VkkFFJXBT2M_B7ZoCTkC04H3d-KlWvs",
  authDomain: "loginauthentication-70cf1.firebaseapp.com",
  projectId: "loginauthentication-70cf1",
  storageBucket: "loginauthentication-70cf1.appspot.com",
  messagingSenderId: "410701665667",
  appId: "1:410701665667:web:33430be5bf64899be012b6",
  measurementId: "G-9FRL0CRCSZ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

