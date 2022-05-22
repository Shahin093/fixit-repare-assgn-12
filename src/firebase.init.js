// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyC-FsoqYpUHXE6KP5bGehNNOqE0JNh4pjU",
//     authDomain: "fixit-repair-assign-12.firebaseapp.com",
//     projectId: "fixit-repair-assign-12",
//     storageBucket: "fixit-repair-assign-12.appspot.com",
//     messagingSenderId: "190811720889",
//     appId: "1:190811720889:web:7bccadbc4a2346a9d29f68"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;