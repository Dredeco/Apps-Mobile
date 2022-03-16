import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCanH-nLTUDFUpwUJmarmWM4PSspbtrhFs",
  authDomain: "portalventos.firebaseapp.com",
  projectId: "portalventos",
  storageBucket: "portalventos.appspot.com",
  messagingSenderId: "388871643750",
  appId: "1:388871643750:web:87776b3883169a630043a7"
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