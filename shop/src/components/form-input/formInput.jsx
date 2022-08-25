import { GroupDiv, InputSC, FormInputLabel } from "./formInput-styled.js";

const FormInput = ({ label, ...additionalProps }) => {
  return (
    <GroupDiv>
      <InputSC {...additionalProps} />
      {label && (
        <FormInputLabel shrink={additionalProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </GroupDiv>
  );
};

export default FormInput;
