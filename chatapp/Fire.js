import "@firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'
import 'firebase/compat/firestore';

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyBMWiV3cTf00hFu1_J9nq17dSCisX-ysCM",
                authDomain: "chatapp-ef8dd.firebaseapp.com",
                projectId: "chatapp-ef8dd",
                storageBucket: "chatapp-ef8dd.appspot.com",
                messagingSenderId: "438998728138",
                appId: "1:438998728138:web:a972de5cba2dca7298e333"
            });
        }
    };


    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };

            this.db.push(message);
        });
    };

    parse = message => {
        const { user, text, timestamp } = message.val();
        const { key: _id } = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user,
        };
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off();
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}


export default new Fire();