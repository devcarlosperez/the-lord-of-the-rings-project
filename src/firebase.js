import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCWWxy57Rj1Hsj6hp4tt0CJWI_2XN_Dt14",
  authDomain: "lord-of-the-rings-4444a.firebaseapp.com",
  databaseURL: "https://lord-of-the-rings-4444a-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "lord-of-the-rings-4444a",
  storageBucket: "lord-of-the-rings-4444a.firebasestorage.app",
  messagingSenderId: "107290559503",
  appId: "1:107290559503:web:52b8cc6d838b241d198f7a"
};

const APP = initializeApp(firebaseConfig);
const DATABASE = getDatabase(APP);

export const auth = getAuth(APP);
export { DATABASE };