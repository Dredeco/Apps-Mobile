import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBNdv1D7vgWodV4csi0RfiSToaQQAA1hRI",
  authDomain: "goytz-4761b.firebaseapp.com",
  projectId: "goytz-4761b",
  storageBucket: "goytz-4761b.appspot.com",
  messagingSenderId: "545180520631",
  appId: "1:545180520631:web:1de5e0d05f64f4c0abfd32"
});

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };