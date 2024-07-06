import "./App.css";
import { useState } from "react";
import Card from "./view/1stbutton";

function App() {
  // let counter = 15;

  let [counter, setCounter] = useState(15);

  const addvalue = () => {
    console.log("addvalue", counter);
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removevalue = () => {
    console.log("remove valure", Math.random());
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter app</h1>
      <h2 className="bg-white text-black">Counter Value : {counter} </h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
      <Card username="kishan" />
      <Card username="jack" />
    </>
  );
}

export default App;
