import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../src/utils/firebase/firebase.utils";

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
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>sign in with google</button>
      <button onClick={signInWithGoogleRedirect}>
        sign in with google redirect
      </button>
    </div>
  );
};
