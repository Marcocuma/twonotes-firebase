import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDn_viwntvIsN9OogQhAdIKcGE-AuglBbo",
  authDomain: "twonotes-c9d1c.firebaseapp.com",
  databaseURL: "https://twonotes-c9d1c.firebaseio.com",
  projectId: "twonotes-c9d1c",
  storageBucket: "twonotes-c9d1c.appspot.com",
  messagingSenderId: "517868775559",
  appId: "1:517868775559:web:7d5ae3a01bfa60deb87022"
};
// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })
