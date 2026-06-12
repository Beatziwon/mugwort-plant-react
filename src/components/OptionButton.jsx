function OptionButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left active:scale-95 transition"
    >
      {children}
    </button>
  );
}

export default OptionButton;
