import { useState } from "react";

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

  return (
    <div className="">
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}} onChange={handleChange}>
        <label htmlFor="">Display Name</label>
        <input type="text" required value={displayName} name="displayName" />
        <label htmlFor="">Email</label>
        <input type="email" required value={email} name="email" />
        <label htmlFor="">Password</label>
        <input type="password" required value={password} name="password" />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          required
          value={confirmPassword}
          name="confirmPassword"
        />
        <button type="submit">Sign up </button>
      </form>
    </div>
  );
};
