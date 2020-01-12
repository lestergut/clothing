import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: 'AIzaSyApSvo6KniE5DOXoTFAu5nf8c-UzHhi0PM',
   authDomain: 'crwn-db-7d2a3.firebaseapp.com',
   databaseURL: 'https://crwn-db-7d2a3.firebaseio.com',
   projectId: 'crwn-db-7d2a3',
   storageBucket: 'crwn-db-7d2a3.appspot.com',
   messagingSenderId: '67480452360',
   appId: '1:67480452360:web:e82354ca4b2dfa429540bd',
   measurementId: 'G-680E9P839X'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   console.log(firestore.doc('users/128fdashadu'));
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
