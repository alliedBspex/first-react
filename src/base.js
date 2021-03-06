import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB1No6ACIAr0lLgCkPGjBeMg4TIkTVcYcM",
    authDomain: "catch-of-the-day-alliedbspex.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-alliedbspex.firebaseio.com"
}); 

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export 
export default base;