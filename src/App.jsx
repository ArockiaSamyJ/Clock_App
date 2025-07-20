// src/App.jsx
import { useState } from "react";
import Clock from "./components/Clock";
import "./index.css";

const App = () => {
  const [showClock, setShowClock] = useState(false);

  return (
    <div className="app-container">
      <h1>⏰ React Clock App</h1>
      <button onClick={() => setShowClock(!showClock)}>
        {showClock ? "Hide Clock" : "Show Clock"}
      </button>
      {showClock && <Clock />}
    </div>
  )
};

export default App;
