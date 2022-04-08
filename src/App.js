import { useState } from "react";
import "./App.css";
import Chuck from "./components/Chuck";

function App() {
  const [trivia, setTrivia] = useState(false);
  return (
    <div>
      <button onClick={() => setTrivia(true)}>Trivia</button>
      <button onClick={() => setTrivia(false)}>Chuck</button>
      {trivia ? <p>Trivia</p> : <Chuck />}
    </div>
  );
}

export default App;
