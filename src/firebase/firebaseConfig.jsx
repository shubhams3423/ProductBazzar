import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyANF5mAD1Y95AZLNkgnW2M0QRdis-dQZSI",
  authDomain: "productbazzar-af887.firebaseapp.com",
  projectId: "productbazzar-af887",
  storageBucket: "productbazzar-af887.appspot.com",
  messagingSenderId: "169348799087",
  appId: "1:169348799087:web:610634d9d2fd39f2190b9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
export { fireDb, auth };
