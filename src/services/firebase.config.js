
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0_5nlukSagZCMtw9msz8x9zxHvBA2488",
  authDomain: "chat-b3cdb.firebaseapp.com",
  projectId: "chat-b3cdb",
  storageBucket: "chat-b3cdb.appspot.com",
  messagingSenderId: "1079419656114",
  appId: "1:1079419656114:web:ee8a3ef7c7779cfacb36ab",
  measurementId: "G-S1P56Z6P4V"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);