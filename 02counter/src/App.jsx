import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 0;
  const addValue = () => {
    if (counter < 20) {
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      alert("you are going in negative side");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: 15</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <footer>{counter}</footer>
    </>
  );
}

export default App;
