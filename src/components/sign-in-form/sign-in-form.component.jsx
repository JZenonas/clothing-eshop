import { useState } from 'react';
import { createAuthUserWithEmailAndPass, createUserDocument } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

const SignInForm = () => {

    const defaultFields = {
        email: '',
        password: ''
    };
    const [formFields, setFormFields] = useState(defaultFields);
    const { email, password } = formFields;

    const resetFields = () => {
        setFormFields(defaultFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            resetFields();
        } catch (error) {

        }
    };

    return ( 
        <div className='sign-up-form'>
            <h3>Sign In!</h3>
            <form onSubmit={handleSubmit}>

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

                <Button bType='inv' type='submit'>Sign In!</Button>
            </form>
        </div>
    )
}

export default SignInForm;