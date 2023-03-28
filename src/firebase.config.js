import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVGUqXA9hFs7XMWCpYEE0ktAMWVc7ipwI",
  authDomain: "hoangpc-32c93.firebaseapp.com",
  projectId: "hoangpc-32c93",
  storageBucket: "hoangpc-32c93.appspot.com",
  messagingSenderId: "582082328835",
  appId: "1:582082328835:web:0cafc900dafa57200a1136",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
