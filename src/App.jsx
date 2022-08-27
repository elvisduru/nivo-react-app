import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>nivo + React</h1>
      {/* Our charts will go here */}
    </div>
  );
}

export default App;
