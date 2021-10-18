import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxbkoRAJF5G8zVBAEaTLKRAx1EuSu6T_A",
  authDomain: "ecommerce-morilla.firebaseapp.com",
  projectId: "ecommerce-morilla",
  storageBucket: "ecommerce-morilla.appspot.com",
  messagingSenderId: "442154770173",
  appId: "1:442154770173:web:c68e1986b68f32736e6894"
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

export default dataBase;