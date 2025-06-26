// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBRox4fV_vh1A-UsJfGeT1bk0ESZ4pOjA",
    authDomain: "projeeeeeeeeeeeeeeet.firebaseapp.com",
    databaseURL: "https://projeeeeeeeeeeeeeeet-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projeeeeeeeeeeeeeeet",
    storageBucket: "projeeeeeeeeeeeeeeet.firebasestorage.app",
    messagingSenderId: "200177539556",
    appId: "1:200177539556:web:f64b6fd90d64ff23040ff1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Créer la référence à la BDD firebase 
const db = getDatabase(app);
const dbRef = ref(db);