import { initializeApp } from "firebase/app";
import { collection, getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCauhXJeaxyBnwNfmBYxaDOjSbUesIQNaI",
  authDomain: "taqta-2ecf7.firebaseapp.com",
  projectId: "taqta-2ecf7",
  storageBucket: "taqta-2ecf7.appspot.com",
  messagingSenderId: "379280141750",
  appId: "1:379280141750:web:407ae0ff615e660d086517",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionPosts = collection(db, "posts");

const timestamp = serverTimestamp;

export { db, collectionPosts, timestamp };
