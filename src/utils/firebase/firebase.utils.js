import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2et7VBpqwY8UdnJyeZtN3RzdsWmGHXYc",
  authDomain: "clothing-eshop-db-aee49.firebaseapp.com",
  projectId: "clothing-eshop-db-aee49",
  storageBucket: "clothing-eshop-db-aee49.appspot.com",
  messagingSenderId: "233700131746",
  appId: "1:233700131746:web:1f7c6f2861b562b74968fb"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocument = async (userAuth, additionalInfo = {}) => {
  if(!userAuth)return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userData = await getDoc(userDocRef);

  if (!userData.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log('user not created', error.message);
    };
  };

  return userDocRef;
};

export const createAuthUserWithEmailAndPass = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};