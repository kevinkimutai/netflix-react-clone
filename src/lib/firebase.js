import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbCaLJESRGVJGbGESxZ-OqNV0heK_Q8ak",
  authDomain: "netflix-clone-6b429.firebaseapp.com",
  projectId: "netflix-clone-6b429",
  storageBucket: "netflix-clone-6b429.appspot.com",
  messagingSenderId: "1096092365297",
  appId: "1:1096092365297:web:afcaa460dadb8bc21ed450",
  measurementId: "G-14CGNZ2B1S",
};

export const app = initializeApp(firebaseConfig);
export default app;
