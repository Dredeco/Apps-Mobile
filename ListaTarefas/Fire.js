import "@firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDuBdJO2FXPz_zzzS3XuQn1t5mSEcoNcME",
    authDomain: "listatarefas-b5523.firebaseapp.com",
    projectId: "listatarefas-b5523",
    storageBucket: "listatarefas-b5523.appspot.com",
    messagingSenderId: "338389244304",
    appId: "1:338389244304:web:49b3fb515fd5352ef8fb15"
}

class Fire {
    constructor(callback) {
        this.init(callback)
    }


    init(callback) {
        app = firebase.initializeApp(firebaseConfig);

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null, user);
            } else {
                firebase
                    .auth()
                    .signInAnonymously()
                    .catch(error => {
                        callback(error);
                    });
            }
        });
    }

    getLists(callback) {
        let ref = this.ref.orderBy("name");
        
        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = [];

            snapshot.forEach(doc => {
                lists.push({ id: doc.id, ...doc.data() });
            });

            callback(lists);
        });
    }

    addList(list) {
        let ref = this.ref;

        ref.add(list);
    }

    updateList(list) {
        let ref = this.ref;

        ref.doc(list.id).update(list);
    }

    get userId() {
        return firebase.auth().currentUser.uid;
    }

    get ref() {
        return firebase
        .firestore()
        .collection("users")
        .doc(this.userId)
        .collection("lists");
    }

    detach() {
        this.unsubscribe()
    }
}

export default Fire;