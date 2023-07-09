import { initializeApp } from "firebase/app";
// import { getFirestore} from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4GsyiwuD1WK7HndfHYzUWFv4ly3UO2Bo",
  authDomain: "scissors-97cdc.firebaseapp.com",
  projectId: "scissors-97cdc",
  storageBucket: "scissors-97cdc.appspot.com",
  messagingSenderId: "1082997785200",
  appId: "1:1082997785200:web:6115f2b9e623750414eab5",
  measurementId: "G-TTZNEVTVPR",
};

const app = initializeApp(firebaseConfig);
   const firestore = getFirestore(app);
   const auth = getAuth(app);

// Check if running in development environment
// if (process.env.NODE_ENV === 'development') {
//   connectFirestoreEmulator(firestore, 'localhost', 8080);
//   connectAuthEmulator(auth,'http://localhost:9099');
// }

export { app, firestore, auth };