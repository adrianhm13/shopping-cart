import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDmNd3snO0p5P5XZf44aAY52FLs6hR96Q4",
    authDomain: "shopping-cart-194e5.firebaseapp.com",
    projectId: "shopping-cart-194e5",
    storageBucket: "shopping-cart-194e5.appspot.com",
    messagingSenderId: "381315497170",
    appId: "1:381315497170:web:7f903c8d21ca4a6700410b"
  };

// Init firebase
firebase.initializeApp(firebaseConfig)

// Init services
const projectFirestore = firebase.firestore()

export {projectFirestore}