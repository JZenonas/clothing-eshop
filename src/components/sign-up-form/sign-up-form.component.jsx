import { useState } from 'react';
import { createAuthUserWithEmailAndPass, createUserDocument } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

const SignUpForm = () => {

    const defaultFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
    const [formFields, setFormFields] = useState(defaultFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFields = () => {
        setFormFields(defaultFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPass(email, password);
            await createUserDocument(user, { displayName });
            resetFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') alert('Email already in use!');
            else console.log(error);
        }
    };

    return ( 
        <div className='sign-up-form'>
            <h3>Sign Up!</h3>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Name'
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label='Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label='Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />

                <button type='submit'>Sign Up!</button>
            </form>
        </div>
    )
}

export default SignUpForm;