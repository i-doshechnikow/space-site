import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../src/utils/firebase/firebase.utils";

export default () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
};
