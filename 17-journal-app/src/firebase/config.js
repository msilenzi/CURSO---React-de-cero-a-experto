// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAeYjuxAzduHm5aX-fsUrhq0HULAGnS7Ho',
  authDomain: 'react-de-cero-a-experto-ms.firebaseapp.com',
  projectId: 'react-de-cero-a-experto-ms',
  storageBucket: 'react-de-cero-a-experto-ms.appspot.com',
  messagingSenderId: '387341751626',
  appId: '1:387341751626:web:18736e5d7b183b210addb3',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)
