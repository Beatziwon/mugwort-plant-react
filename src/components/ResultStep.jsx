import { getRecommendedPlants, getRecommendText } from "../utils/recommend";

function ResultStep({ answers, onReset }) {
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

      <button onClick={onReset} className="mt-6 h-12 bg-gray-200 rounded-xl">
        다시 하기
      </button>
    </div>
  );
}

export default ResultStep;
