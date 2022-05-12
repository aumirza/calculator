const inputButton = (props) => {
  let inputButtonstyle = {
    color: "white",
    background: "#111111",
    padding: "auto",
    border: "none",
    borderRadius: "5px",
    fontSize: "1em",
    fontFamily: "Arial, Helvetica, sans-serif"
  };

  if (props.style) {
    inputButtonstyle = {
      ...inputButtonstyle,
      ...props.style
    };
  }
  return (
    <button onClick={props.clicked} style={inputButtonstyle}>
      {props.value}
    </button>
  );
};

export default inputButton;
