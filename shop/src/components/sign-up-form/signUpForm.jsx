import { useState } from "react";

import FormInput from "../form-input/formInput";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = ({ target: { value, name } }) => {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const resetFormFields = () => {
    setFormFields(
      Object.keys(formFields).reduce((acc, key) => {
        acc[key] = "";
        return acc;
      }, {})
    );

    //setFormFields(defaultFormFields)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName, email });

      resetFormFields();
    } catch (error) {
      if (error === "auth/email-already-in-use") {
        console.log("this user already exist", error);
      }
      console.log("user creation error", error);
    }
  };

  return (
    <div className="">
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          value={displayName}
          name="displayName"
          onChange={handleChange}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
        <button type="submit">Sign up </button>
      </form>
    </div>
  );
};
