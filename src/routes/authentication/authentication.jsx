import Button from "../../components/button/button.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { signInWithGooglePopup, createUserDocument } from "../../utils/firebase/firebase.utils";

const Authentication = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // eslint-disable-next-line no-unused-vars
        const userDocRef = await createUserDocument(user);
    };
    return (
        <div>
            <h1> SIGN IN!</h1>
            <Button bType='ggl' onClick={logGoogleUser}> Sign In With Google! </Button>
            <SignUpForm />
            <SignInForm />
        </div>
    );
};

export default Authentication;