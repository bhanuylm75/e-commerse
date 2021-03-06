import { signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,} from "../firebase/firebase"
import { useState } from 'react';

import FormInput from "../forminput";
import "./index.css"


const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      alert('user sign in failed', error);
      console.log(error.code)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h3>Already have an account?</h3>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <button type='submit' className="button">Sign In</button>
          <button className="google-butt"  type='button' onClick={signInWithGoogle}>
            Sign In With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;