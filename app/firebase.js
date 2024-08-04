import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3AaoNo-RSKRcnwZop7ukF2XGGGfSOwv0",
  authDomain: "inventory-management-app-9eaa4.firebaseapp.com",
  projectId: "inventory-management-app-9eaa4",
  storageBucket: "inventory-management-app-9eaa4.appspot.com",
  messagingSenderId: "761175016179",
  appId: "1:761175016179:web:44fd2199bf8482d3af2d86",
  measurementId: "G-WX4K6HM12J"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
