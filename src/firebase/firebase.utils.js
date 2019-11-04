import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAhVEJanGqHBiUeFxZdOfy4hxKIi3UrFYw",
  authDomain: "crown-clothing-855d5.firebaseapp.com",
  databaseURL: "https://crown-clothing-855d5.firebaseio.com",
  projectId: "crown-clothing-855d5",
  storageBucket: "crown-clothing-855d5.appspot.com",
  messagingSenderId: "869673457313",
  appId: "1:869673457313:web:9c6d0c1715493d499a02e0",
  measurementId: "G-W319JE7DGT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
