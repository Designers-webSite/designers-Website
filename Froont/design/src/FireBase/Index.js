// import firebase from "firebase/app"
// import "firebase/storage"
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC261A1M17Tb-2sQMx6jOZYw1elVR0Us1o",
    authDomain: "fir-61d22.firebaseapp.com",
    databaseURL:"gs://fir-61d22.appspot.com",
    projectId: "fir-61d22",
    storageBucket: "fir-61d22.appspot.com",
    messagingSenderId: "97609169500",
    appId: "1:97609169500:web:ca68b2534cb5c7cbb00499",
    measurementId: "G-J311CC2PFF"
  };
  firebase.initializeApp(firebaseConfig )
const storage =firebase.storage();
export {storage, firebase as default};
