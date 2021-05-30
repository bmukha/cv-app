const Input = (props) => {
  console.log("props received by Input", props)
  return (
    <p>This is input</p>
    // <label>
    //   {props.labelName}:
    //   <input
    //     type="text"
    //     name="firstName"
    //     value={props.firstName}
    //     onChange={props.handleChange}
    //   />
    // </label>
  );
};

export default Input