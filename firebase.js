import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDHx3MBSPnBY466FIWHv3hWFmkgKTJE35A',
	authDomain: 'facebook-clone-5af31.firebaseapp.com',
	projectId: 'facebook-clone-5af31',
	storageBucket: 'facebook-clone-5af31.appspot.com',
	messagingSenderId: '143625006514',
	appId: '1:143625006514:web:c1d05d11dc9f06b5c9c8ab',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
