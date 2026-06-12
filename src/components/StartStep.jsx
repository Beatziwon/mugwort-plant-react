function StartStep({ onStart }) {
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
        onClick={onStart}
        className="mt-10 h-14 rounded-2xl bg-green-700 text-white font-bold text-lg active:scale-95 transition"
      >
        추천 시작하기
      </button>
    </div>
  );
}

export default StartStep;
