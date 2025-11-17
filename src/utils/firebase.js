import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzWzNjFIvn66fwoTd4fYufAPzzcJTGd6c",
  authDomain: "netflixgpt-55f8c.firebaseapp.com",
  projectId: "netflixgpt-55f8c",
  storageBucket: "netflixgpt-55f8c.firebasestorage.app",
  messagingSenderId: "1050846664246",
  appId: "1:1050846664246:web:49f1f4587ceec855456a97",
  measurementId: "G-H7C2K5VG6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();