import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-admin-tut.firebaseapp.com",
  projectId: "react-admin-tut",
  storageBucket: "react-admin-tut.appspot.com",
  messagingSenderId: "402834968432",
  appId: "1:402834968432:web:a2b52edef64d5cd94249b5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
