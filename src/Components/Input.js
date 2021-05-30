const Input = (props) => {
  console.log("props received by Input", props);
  return (
    <label>
      {props.labelName}:
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.firstName}
        onChange={props.onChange}
      />
    </label>
  );
};

export default Input;
