import React from "react";
import { InputBox, Display } from "../../components";
import evaluate, { symbols } from "../../utils/math";

class Calculator extends React.Component {
  initialstate = {
    result: 0,
    inputField: "0",
    resultHover: false,
    inputHide: false
  };

  state = {
    ...this.initialstate
  };

  clickHandler(value) {
    if (this.state.inputHide) {
      this.setInputHide(false);
    }
    if (value === "Clear") {
      this.setState({
        ...this.initialstate
      });
    } else if (Number.isInteger(value)) {
      if (this.state.inputField !== "0") {
        this.concatInput(value);
      } else {
        this.setInput(value.toString(10));
      }
      this.calculateResult();
    } else if (value === ".") {
      this.concatInput(value);
      this.calculateResult();
    } else if (value === "=") {
      if (!isNaN(this.state.inputField.substr(-1))) {
        this.calculateResult();
        this.setInput(this.state.result.toString(10));
        this.setResultHover(true);
        this.setInputHide(true);
      }
    } else if (value === "Back") {
      this.sliceInput();
      this.calculateResult();
    } else if (symbols.includes(value)) {
      this.concatInput(value);
    }
  }

  sliceInput() {
    if (this.state.inputField.length === 1) {
      this.setInput("0");
    } else {
      this.setInput(this.state.inputField.slice(0, -1));
    }
  }

  setResultHover(value) {
    this.setState((oldState) => {
      return {
        ...oldState,
        resultHover: value
      };
    });
  }

  setInput(value) {
    this.setState((oldState) => {
      return {
        ...oldState,
        inputField: value
      };
    });
  }

  setInputHide(value) {
    this.setState((oldState) => {
      return {
        ...oldState,
        inputHide: value
      };
    });
  }

  concatInput(input) {
    this.setState((oldState) => {
      return {
        ...oldState,
        inputField: oldState.inputField.concat(input)
      };
    });
  }

  calculateResult() {
    this.setState((oldState) => {
      return {
        ...oldState,
        result: evaluate(oldState.inputField)
      };
    });
  }

  render() {
    return (
      <div>
        <Display
          resultHover={this.state.resultHover}
          inputHide={this.state.inputHide}
          result={this.state.result}
          input={this.state.inputField}
        />
        <InputBox
          clicked={(value) => {
            this.clickHandler(value);
          }}
        />
      </div>
    );
  }
}

export default Calculator;
