import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDeyA6oBbbJMVwFoL_Gr6VBMbPHLp65ys8",
    authDomain: "vuenqueen.firebaseapp.com",
    projectId: "vuenqueen",
    storageBucket: "vuenqueen.appspot.com",
    messagingSenderId: "1099096601972",
    appId: "1:1099096601972:web:3f81638e5319a1d848a821",
    measurementId: "G-T6DS86LMNM"
  };
  
export const app = initializeApp(firebaseConfig);