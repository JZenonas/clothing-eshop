import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB2et7VBpqwY8UdnJyeZtN3RzdsWmGHXYc",
  authDomain: "clothing-eshop-db-aee49.firebaseapp.com",
  projectId: "clothing-eshop-db-aee49",
  storageBucket: "clothing-eshop-db-aee49.appspot.com",
  messagingSenderId: "233700131746",
  appId: "1:233700131746:web:1f7c6f2861b562b74968fb"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocument = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef)

  const userData = await getDoc(userDocRef);
  console.log(userData)
  console.log(userData.exists())

  if (!userData.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('user not created', error.message)
    }
  }

  return userDocRef;
}