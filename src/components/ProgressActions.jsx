function ProgressActions({ habit, index, updateProgress }) {
  return (
    <div className="flex gap-2 justify-end">
      <button
        onClick={() => updateProgress(index, -1)}
        className="text-gray-500 hover:text-red-600 px-2 py-1 rounded text-sm transition-colors"
      >
        −
      </button>
      <button
        onClick={() => updateProgress(index, 1)}
        className="text-gray-500 hover:text-green-600 px-2 py-1 rounded text-sm transition-colors"
      >
        +
      </button>
    </div>
  );
}

export default ProgressActions;