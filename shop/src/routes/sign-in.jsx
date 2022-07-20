import { signInWithGooglePopup } from "../../src/utils/firebase/firebase.utils";

export default () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
};
