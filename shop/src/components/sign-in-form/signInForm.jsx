import { useState, useContext } from "react";

import { UserContext } from "../../context/user";

import FormInput from "../form-input/formInput";
import Button from "../button/button";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./signInForm.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

export default () => {
  const { setCurrentUser } = useContext(UserContext);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = ({ target: { value, name } }) => {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const resetFormFields = () => {
    // setFormFields(
    //   Object.keys(formFields).reduce((acc, key) => {
    //     acc[key] = "";
    //     return acc;
    //   }, {})
    // );

    setFormFields(defaultFormFields);
  };

  const signInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);

      resetFormFields();
    } catch ({ code }) {
      if (code === "auth/wrong-password" || code === "auth/user-not-found") {
        console.log("incorrect email or password");
      } else {
        console.log("something went wrong");
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          required
          value={email}
          name="email"
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          value={password}
          name="password"
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" type="button" onClick={signInGoogleUser}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};
