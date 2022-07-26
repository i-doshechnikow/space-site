export default ({ label, ...additionalProps }) => {
  return (
    <div className="group">
      {label && (
        <label
          className={`${
            additionalProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
      <input className="form-input" {...additionalProps} />
    </div>
  );
};
