import { useState } from "react";
import { getRecommendedPlants, getRecommendText } from "./utils/recommend";
import "./App.css";
import { space } from "postcss/lib/list";

const initialAnswers = {
  space: null,            // 공간 크기
  light: null,            // 빛 조건
  experience: null,       // 식물 경험
  water: null             // 물 조는 스타일
}

const stepOrder = ["statr", "space", "light", "experience", "water", "result"]

function App() {
  const [step, setStep] = useState("start");
  const [answers, setAnswers] = useState(initialAnswers);

  const select = (key, value, nextStep) => {
    setAnswers((prev) => ({
      ...prev,
      [key] : value,
    }));

    setStep(nextStep);
  }

  const reset = () => {
    setStep("start");
    setAnswers(initialAnswers);
  }

  const goBack = () => {
    const currentIndex =
  }
  
  return (
    // <div>
    //   <h1>머그워트 식물 추천</h1>
    //   <p>React 프로젝트 시작!</p>
    // </div>
  );
}

export default App;
