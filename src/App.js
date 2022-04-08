import "./App.css";
import Circle from "./components/Circle";
import React from "react";
function App() {
  const [value, newValue] = React.useState(15);
  const [height,newHeight] = React.useState(15);
  return (
    <div className="App" >
      <div className="main__app">
        <h1>Max Waves : 50</h1>
        <Circle value={value} height={height} newHeight={newHeight} newValue={newValue} />
      </div>
    </div>
  );
}

export default App;
