import { Calculator } from "../containers";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Calculator</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Calculator />
      </div>
    </>
  );
}
