import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDyv6mKdJdxcF2hShpdWW2ymCbHtqIj16k",

  authDomain: "mrxvaaau.firebaseapp.com",

  projectId: "mrxvaaau",

  storageBucket: "mrxvaaau.firebasestorage.app",

  messagingSenderId: "748184577917",

  appId: "1:748184577917:web:8e16b525c36b63b7458e14"

};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
