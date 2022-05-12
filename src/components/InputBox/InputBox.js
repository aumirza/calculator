import { InputButton } from "../../components";

const inputBox = (props) => {
  const inputBoxStyle = {
    height: "280px",
    width: "280px",
    padding: "5px",
    borderRadius: "0 0 5px 5px",
    background: "black",
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridTemplateRows: "repeat(5,1fr)",
    gridGap: "8px"
  };

  let buttons = [
    "Clear",
    "Back",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    ".",
    0,
    "="
  ];
  return (
    <div style={inputBoxStyle} className="inputBox">
      {buttons.map((value, index) => {
        let style = {};
        if (index === 0) {
          style = { gridColumn: "1/3" };
        } else if (index === buttons.length - 1) {
          style = { gridColumn: "3/5" };
        }

        if (isNaN(value) && value !== ".") {
          style = {
            ...style,
            background: "#0088ff"
          };
        }

        return (
          <InputButton
            clicked={() => {
              props.clicked(value);
            }}
            style={style}
            key={value}
            value={value}
          />
        );
      })}
    </div>
  );
};

export default inputBox;
