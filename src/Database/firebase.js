import firebase from "firebase";
import env from "react-dotenv";
import auth from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log('env ' + process.env.REACT_APP_API_KEY)
const firebaseConfig = {
  apiKey: "AIzaSyBnhJ7OBJen6Yo3l1F39Jk3Ucf4G4dxbg4",
  authDomain: "chat-app-dd579.firebaseapp.com",
  projectId: "chat-app-dd579",
  storageBucket: "chat-app-dd579.appspot.com",
  messagingSenderId: "82657326523",
  appId: "1:82657326523:web:870ba9dc57c9d7586d809e",
  measurementId: "G-DPZJP5623F",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase, useAuthState, useCollectionData };
