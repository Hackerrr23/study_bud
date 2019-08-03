import { firebase } from "@firebase/app";
import "firebase/firebase-storage";

var firebaseConfig = {
  apiKey: "AIzaSyDGv8ii2j6zjBZhKJGtTNuoLNewFOI57ac",
  authDomain: "studyup-bb1a1.firebaseapp.com",
  databaseURL: "https://studyup-bb1a1.firebaseio.com",
  projectId: "studyup-bb1a1",
  storageBucket: "",
  messagingSenderId: "1063738839606",
  appId: "1:1063738839606:web:871059d1f76de69e"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
//or use below
// firebase.initializeApp(firebaseConfig);

export default firebase;
