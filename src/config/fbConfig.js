import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"


var config = {
    apiKey: "AIzaSyBz8bKkQsao5OaRQxFv_tIKBl3U1lg4mOs",
    authDomain: "appchat-fb0db.firebaseapp.com",
    databaseURL: "https://appchat-fb0db.firebaseio.com",
    projectId: "appchat-fb0db",
    storageBucket: "appchat-fb0db.appspot.com",
    messagingSenderId: "5185357440"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: True});

export default firebase;