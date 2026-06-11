import { useState } from "react";
import { getRecommendedPlants, getRecommendText } from "./utils/recommend";
import "./App.css";
import { space } from "postcss/lib/list";

const initialAnswers = {
  space: null, // 공간 크기
  light: null, // 빛 조건
  experience: null, // 식물 경험
  water: null, // 물 조는 스타일
};

const stepOrder = ["start", "space", "light", "experience", "water", "result"];

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
    return (
      <div className="max-w-md mx-auto p-5 min-h-screen bg-green-50 flex flex-col justify-center">
        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full w-fit mb-5">
          mugwort plants
        </span>

        <h1 className="text-3xl font-bold leading-tight">
          내 공간에 맞는
          <br />
          식물을 추천해드려요
        </h1>

        <p className="mt-4 text-gray-600">
          공간, 햇빛, 경험을 선택하면
          <br />
          어울리는 식물을 찾아드릴게요.
        </p>

        <button
          onClick={() => setStep("space")}
          className="mt-10 h-14 rounded-2xl bg-green-700 text-white font-bold text-lg active:scale-95 transition"
        >
          추천 시작하기
        </button>
      </div>
    );
  }

  if (step === "space") {
    return (
      <div className="max-w-md mx-auto p-5 min-h-screen bg-green-50 flex flex-col">
        <button
          onClick={goBack}
          className="mb-5 text-sm text-gray-500 text-left"
        >
          ← 이전
        </button>

        <p className="text-sm text-green-700 font-bold mb-3">1 / 4</p>

        <h2 className="text-2xl font-bold mb-6">
          식물을 둘 공간은
          <br />
          어느 정도인가요?
        </h2>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => select("space", "small", "light")}
            className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition"
          >
            작은 공간
          </button>

          <button
            onClick={() => select("space", "medium", "light")}
            className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition"
          >
            중간 공간
          </button>

          <button
            onClick={() => select("space", "large", "light")}
            className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition"
          >
            넓은 공간
          </button>
        </div>
      </div>
    );
  }

  if (step === "light") {
    return (
      <div className="max-w-md mx-auto p-5 min-h-screen bg-green-50 flex flex-col">
        <button
          onClick={goBack}
          className="mb-5 text-sm text-gray-500 text-left"
        >
          ← 이전
        </button>

        <p className="text-sm text-green-700 font-bold mb-3">2 / 4</p>

        <h2 className="text-2xl font-bold mb-6">
          햇빛은 얼마나
          <br />잘 들어오나요?
        </h2>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => select("light", "low", "experience")}
            className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left active:scale-95 transition"
          >
            <strong className="block text-lg">거의 안 들어와요</strong>
            <span className="text-sm text-gray-500">북향, 창문과 먼 공간</span>
          </button>

          <button
            onClick={() => select("light", "medium", "experience")}
            className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left active:scale-95 transition"
          >
            <strong className="block text-lg">은은하게 들어와요</strong>
            <span className="text-sm text-gray-500">간접광, 커튼 너머 빛</span>
          </button>

          <button
            onClick={() => select("light", "high", "experience")}
            className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left active:scale-95 transition"
          >
            <strong className="block text-lg">햇빛이 잘 들어와요</strong>
            <span className="text-sm text-gray-500">남향 창가, 밝은 공간</span>
          </button>
        </div>
      </div>
    );
  }

  if (step === "experience") {
    return (
      <div className="max-w-md mx-auto p-5 min-h-screen bg-green-50 flex flex-col">
        <button
          onClick={goBack}
          className="mb-5 text-sm text-gray-500 text-left"
        >
          ← 이전
        </button>

        <p className="text-sm text-green-700 font-bold mb-3">3 / 4</p>

        <h2 className="text-2xl font-bold mb-6">
          식물을 얼마나
          <br />
          키워봤나요?
        </h2>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => select("experience", "beginner", "water")}
            className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition"
          >
            처음이에요
          </button>

          <button
            onClick={() => select("experience", "failed", "water")}
            className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition"
          >
            몇 번 실패했어요
          </button>

          <button
            onClick={() => select("experience", "normal", "water")}
            className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition"
          >
            어느 정도 키워봤어요
          </button>
        </div>
      </div>
    );
  }

  if (step === "water") {
    return (
      <div className="max-w-md mx-auto p-5 min-h-screen bg-green-50 flex flex-col">
        <button
          onClick={goBack}
          className="mb-5 text-sm text-gray-500 text-left"
        >
          ← 이전
        </button>

        <p className="text-sm text-green-700 font-bold mb-3">4 / 4</p>

        <h2 className="text-2xl font-bold mb-6">
          물 주기는
          <br />
          어떤 편인가요?
        </h2>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => select("water", "low", "result")}
            className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition"
          >
            자주 까먹어요
          </button>

          <button
            onClick={() => select("water", "medium", "result")}
            className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition"
          >
            생각나면 챙겨요
          </button>

          <button
            onClick={() => select("water", "high", "result")}
            className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition"
          >
            자주 확인할 수 있어요
          </button>
        </div>
      </div>
    );
  }

  if (step === "result") {
    const list = getRecommendedPlants(answers);

    return (
      <div className="max-w-md mx-auto p-5 min-h-screen bg-green-50 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">🌿 추천 식물</h2>

        <div className="flex flex-col gap-4">
          {list.map((plant) => (
            <div key={plant.name} className="p-5 bg-white rounded-2xl border">
              <h3 className="text-lg font-bold mb-2">{plant.name}</h3>

              <p className="text-sm text-green-700 mb-2">
                {getRecommendText(plant)}
              </p>

              <p className="text-sm text-gray-600 mb-2">{plant.reason}</p>
              <p className="text-sm">관리법: {plant.care}</p>
              <p className="text-green-700 font-bold mt-2">{plant.price}</p>
            </div>
          ))}
        </div>

        <button onClick={reset} className="mt-6 h-12 bg-gray-200 rounded-xl">
          다시 하기
        </button>
      </div>
    );
  }

  return null;
}

export default App;
