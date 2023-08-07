
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDARn8ylIMEL4xmM6ojmDvtTPW-5hiG1jI",
  authDomain: "web-login-f4741.firebaseapp.com",
  projectId: "web-login-f4741",
  storageBucket: "web-login-f4741.appspot.com",
  messagingSenderId: "617915839879",
  appId: "1:617915839879:web:400922105a7adaa0fbcf22",
  measurementId: "G-XJF9GK0MQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);