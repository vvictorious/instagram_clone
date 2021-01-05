import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
    authDomain: "instagram-clone-e0949.firebaseapp.com",
    projectId: "instagram-clone-e0949",
    storageBucket: "instagram-clone-e0949.appspot.com",
    messagingSenderId: "758641275560",
    appId: "1:758641275560:web:ad44a9f0e4fe53f73d489d"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage } 