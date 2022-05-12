const display = (props) => {
  let displayStyle = {
    height: "80px",
    width: "270px",
    background: "black",
    borderRadius: "5px 5px 0 0",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "column"
  };

  let resultStyle = { color: "gray" };

  if (props.resultHover) {
    resultStyle = { color: "white" };
  }

  let inputStyle = { color: "white" };

  if (props.resultHide) {
    inputStyle = { color: "grey" };
  }

  let result, input;

  if (props.result) {
    result = <span style={resultStyle}> = {props.result}</span>;
  }

  if (!props.inputHide) {
    input = <span style={inputStyle}>{props.input}</span>;
  }
  return (
    <div style={displayStyle} className="display">
      {input}
      {result}
    </div>
  );
};

export default display;
