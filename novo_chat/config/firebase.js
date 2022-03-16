import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBMWiV3cTf00hFu1_J9nq17dSCisX-ysCM",
    authDomain: "chatapp-ef8dd.firebaseapp.com",
    projectId: "chatapp-ef8dd",
    storageBucket: "chatapp-ef8dd.appspot.com",
    messagingSenderId: "438998728138",
    appId: "1:438998728138:web:a972de5cba2dca7298e333",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();