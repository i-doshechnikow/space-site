import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/signUpForm";
import SignInForm from "../../components/sign-in-form/signInForm";

import "./authentification.scss";

export default () => {
  useEffect(() => {
    const authRequest = async () => {
      const response = await getRedirectResult(auth);

      response && (await createUserDocumentFromAuth(response.user));
    };

    authRequest();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="authentification-container">
      {/* <h1>sign in page</h1> */}
      {/* <button onClick={logGoogleUser}>sign in with google</button>
      <button onClick={signInWithGoogleRedirect}>
        sign in with google redirect
      </button> */}
      <SignUpForm />
      <SignInForm />
    </div>
  );
};
