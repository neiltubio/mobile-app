// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkZ6bn_VKNxstvB9k2bZqTg5kvKaSSQ70",
    authDomain: "react-native-login-cbcc6.firebaseapp.com",
    projectId: "react-native-login-cbcc6",
    storageBucket: "react-native-login-cbcc6.appspot.com",
    messagingSenderId: "162065190938",
    appId: "1:162065190938:web:996dfcb9244c49a81d81a3",
    measurementId: "G-M5PWR06XQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getStorage(app);

export { storage }