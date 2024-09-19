import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4HvsFA8NrgBU2PGRUPpmKkD6EXEQlxAM",
  authDomain: "facebook-b290a.firebaseapp.com",
  projectId: "facebook-b290a",
  storageBucket: "facebook-b290a.appspot.com",
  messagingSenderId: "23977465308",
  appId: "1:23977465308:web:a6ea1b8982dc25d1812b19",
};

const Dbapp = initializeApp(firebaseConfig);
console.log("firebase connton done");
export default Dbapp;
