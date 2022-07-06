import { signInWithGooglePopup, createUserDocument } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocument(user)
        console.log(user);
    };
    return (
        <div>
            <h1> SIGN IN!</h1>
            <button onClick={logGoogleUser}> Sign In With Google Popup! </button>
        </div>
    );
};

export default SignIn;