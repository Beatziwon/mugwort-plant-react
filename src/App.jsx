import { useState } from "react";
import StartStep from "./components/StartStep";
import QuestionStep from "./components/QuestionStep";
import ResultStep from "./components/ResultStep";
import "./App.css";

const initialAnswers = {
  space: null, // 공간 크기
  light: null, // 빛 조건
  experience: null, // 식물 경험
  water: null, // 물 조는 스타일
};

const stepOrder = ["start", "space", "light", "experience", "water", "result"];

const questions = {
  space: {
    progress: "1 / 4",
    title: (
      <>
        식물을 둘 공간은
        <br />
        어느 정도인가요?
      </>
    ),
    options: [
      { value: "small", label: "작은 공간" },
      { value: "medium", label: "중간 공간" },
      { value: "large", label: "넓은 공간" },
    ],
    nextStep: "light",
  },
  light: {
    progress: "2 / 4",
    title: (
      <>
        햇빛은 얼마나
        <br />잘 들어오나요?
      </>
    ),
    options: [
      {
        value: "low",
        label: "거의 안 들어와요",
        description: "북향, 창문과 먼 공간",
      },
      {
        value: "medium",
        label: "은은하게 들어와요",
        description: "간접광, 커튼 너머 빛",
      },
      {
        value: "high",
        label: "햇빛이 잘 들어와요",
        description: "남향 창가, 밝은 공간",
      },
    ],
    nextStep: "experience",
  },
  experience: {
    progress: "3 / 4",
    title: (
      <>
        식물을 얼마나
        <br />
        키워봤나요?
      </>
    ),
    options: [
      { value: "beginner", label: "처음이에요" },
      { value: "failed", label: "몇 번 실패했어요" },
      { value: "normal", label: "어느 정도 키워봤어요" },
    ],
    nextStep: "water",
  },
  water: {
    progress: "4 / 4",
    title: (
      <>
        물 주기는
        <br />
        어떤 편인가요?
      </>
    ),
    options: [
      { value: "low", label: "자주 까먹어요" },
      { value: "medium", label: "생각나면 챙겨요" },
      { value: "high", label: "자주 확인할 수 있어요" },
    ],
    nextStep: "result",
  },
};

function App() {
  const [step, setStep] = useState("start");
  const [answers, setAnswers] = useState(initialAnswers);

  const select = (key, value, nextStep) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));

    setStep(nextStep);
  };

  const reset = () => {
    setStep("start");
    setAnswers(initialAnswers);
  };

  const goBack = () => {
    const currentIndex = stepOrder.indexOf(step);

    if (currentIndex <= 0) return;

    setStep(stepOrder[currentIndex - 1]);
  };

  if (step === "start") {
    return <StartStep onStart={() => setStep("space")} />;
  }

  if (questions[step]) {
    const question = questions[step];

    return (
      <QuestionStep
        progress={question.progress}
        title={question.title}
        options={question.options}
        onBack={goBack}
        onSelect={(value) => select(step, value, question.nextStep)}
      />
    );
  }

  if (step === "result") {
    return <ResultStep answers={answers} onReset={reset} />;
  }

  return null;
}

export default App;
