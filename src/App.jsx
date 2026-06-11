import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>머그워트 식물 추천</h1>
      <p>React 프로젝트 시작!</p>
    </div>
  );
}

export default App;
