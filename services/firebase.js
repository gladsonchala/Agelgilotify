import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  // Your Firebase configuration object
  // Replace with your actual Firebase configuration
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase database
const database = firebase.database();

// Get a reference to the Firebase storage
const storage = firebase.storage();

export { firebase, database, storage };
