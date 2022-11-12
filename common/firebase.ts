import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBmWXi5wdtZCkoyfzzjzNT7Qpn1GFRNnxQ",
    authDomain: "blackjack-8784d.firebaseapp.com",
    projectId: "blackjack-8784d",
    storageBucket: "blackjack-8784d.appspot.com",
    messagingSenderId: "42550768474",
    appId: "1:42550768474:web:a807ceacc9459706837963",
    measurementId: "G-4B9BXQ85NW"
};

const FirebaseUtils = initializeApp(firebaseConfig);
export default FirebaseUtils;
