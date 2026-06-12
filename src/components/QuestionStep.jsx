import OptionButton from "./OptionButton";

function QuestionStep({ progress, title, options, onSelect, onBack }) {
  return (
    <div className="max-w-md mx-auto p-5 min-h-screen bg-green-50 flex flex-col">
      <button
        onClick={onBack}
        className="mb-5 text-sm text-gray-500 text-left flex items-center gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        이전
      </button>

      <p className="text-sm text-green-700 font-bold mb-3">{progress}</p>

      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <OptionButton
            key={option.value}
            onClick={() => onSelect(option.value)}
          >
            <strong className="block text-lg">{option.label}</strong>
            {option.description && (
              <span className="text-sm text-gray-500">
                {option.description}
              </span>
            )}
          </OptionButton>
        ))}
      </div>
    </div>
  );
}

export default QuestionStep;
