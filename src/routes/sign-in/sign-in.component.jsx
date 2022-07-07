import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { signInWithGooglePopup, createUserDocument } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // eslint-disable-next-line no-unused-vars
        const userDocRef = await createUserDocument(user);
    };
    return (
        <div>
            <h1> SIGN IN!</h1>
            <button onClick={logGoogleUser}> Sign In With Google! </button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;