import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  connectAuthEmulator,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  serverTimestamp,
  connectFirestoreEmulator,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFG1FhAgpmvxP42rESpi6sEJHXs6oyorI",
  authDomain: "chat-app-791f7.firebaseapp.com",
  projectId: "chat-app-791f7",
  storageBucket: "chat-app-791f7.appspot.com",
  messagingSenderId: "272019727699",
  appId: "1:272019727699:web:c52b193951a0aa7b12eda6",
  measurementId: "G-1B3F6ZX5GP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Auth and Firestore services
const auth = getAuth(app);
const db = getFirestore(app);
const ggAuthProvider = new GoogleAuthProvider(); // google authentication
const fbAuthProvider = new FacebookAuthProvider(); // facebook authentication

// Connect to emulators if running on localhost
if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", "8080");
}

export const GoogleAuth = async () => {
  try {
    const ggAuth = signInWithPopup(auth, ggAuthProvider);
    return ggAuth;
  } catch (error) {
    console.log(error);
  }
};

export const FacebookAuth = async () => {
  try {
    const fbAuth = signInWithPopup(auth, fbAuthProvider);
    return fbAuth;
  } catch (error) {
    console.log(error);
  }
};

export { app, analytics, auth, db, serverTimestamp };
