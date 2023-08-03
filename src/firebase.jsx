import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyB7grFkxd_KmJNI354ICABT_9ajQv8_RhM",
  authDomain: "fir-3d1e2.firebaseapp.com",
  projectId: "fir-3d1e2",
  storageBucket: "fir-3d1e2.appspot.com",
  messagingSenderId: "563188092594",
  appId: "1:563188092594:web:823f90c711c1940059c3ab",
  measurementId: "G-L329T4EVJ1",
});

export const auth = getAuth(firebaseApp);


