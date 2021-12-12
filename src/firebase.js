import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyAiDirZxgAsqIqse6-eYJwiuSv1nwdvk7E",
  authDomain: "e-commerce-6311d.firebaseapp.com",
  databaseURL: "https://e-commerce-6311d-default-rtdb.firebaseio.com",
  projectId: "e-commerce-6311d",
  storageBucket: "e-commerce-6311d.appspot.com",
  messagingSenderId: "117626580094",
  appId: "1:117626580094:web:b1f59685ffad1abf633c2f",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
