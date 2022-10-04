
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCPILi61tFTNEu4XpAZkOq6qFctYK6uF8I",
  authDomain: "clone-1with-react-js.firebaseapp.com",
  projectId: "clone-1with-react-js",
  storageBucket: "clone-1with-react-js.appspot.com",
  messagingSenderId: "816447536736",
  appId: "1:816447536736:web:301e56f176c206c5180d05",
  measurementId: "G-SKV8XP0SVR"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db , auth, provider}