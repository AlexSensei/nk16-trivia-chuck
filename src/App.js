import { useState } from "react";
import "./App.css";

function App() {
  const [trivia, setTrivia] = useState(false);
  return (
    <div>
      <button onClick={() => setTrivia(true)}>Trivia</button>
      <button onClick={() => setTrivia(false)}>Chuck</button>
      {trivia ? <p>Trivia</p> : <p>Chuck</p>}
    </div>
  );
}

export default App;
