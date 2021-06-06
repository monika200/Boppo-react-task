import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {

  apiKey: "AIzaSyBfA_d4o82bMGwyhGwRERuYikvrD7rNUAc",
  authDomain: "ecom-ae396.firebaseapp.com",
  projectId: "ecom-ae396",
  storageBucket: "ecom-ae396.appspot.com",
  messagingSenderId: "549651110593",
  appId: "1:549651110593:web:b271bf3f7543269f32d240",
  measurementId: "G-7PR92NJLJJ"

};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
