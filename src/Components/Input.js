const Input = (props) => {
  return (
    <label>
      {props.labelName}:
      <input
        required
        type={props.type}
        name={props.name}
        value={props.firstName}
        onChange={props.onChange}
      />
    </label>
  );
};

export default Input;
