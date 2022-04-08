import { useState } from "react";
import "./App.css";
import Chuck from "./components/Chuck";
import { Trivia } from "./components/Trivia";

function App() {
  const [trivia, setTrivia] = useState(true);
  return (
    <div>
      <button onClick={() => setTrivia(true)}>Trivia</button>
      <button onClick={() => setTrivia(false)}>Chuck</button>
      {trivia ? <Trivia /> : <Chuck />}
    </div>
  );
}

export default App;
