import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGnGff_QzougpjMeFn0QcyC1QMEMAPaJc",
  authDomain: "booking-website-b3b4b.firebaseapp.com",
  databaseURL: "https://booking-website-b3b4b-default-rtdb.firebaseio.com",
  projectId: "booking-website-b3b4b",
  storageBucket: "booking-website-b3b4b.appspot.com",
  messagingSenderId: "146141154444",
  appId: "1:146141154444:web:ffc21511741f495a4effa9",
  measurementId: "G-2BFBCHSSV1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };