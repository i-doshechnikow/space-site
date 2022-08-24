import {
  BaseButton,
  GoogleSignInBtn,
  InvertedButton,
} from "./button-styled.js";

const getButton = (buttonType = "base") =>
  ({
    base: BaseButton,
    google: GoogleSignInBtn,
    inverted: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
