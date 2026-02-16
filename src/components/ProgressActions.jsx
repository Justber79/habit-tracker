function ProgressActions({ habit, index, updateProgress }) {
  const isComplete = habit.progress === habit.goal;

  return (
    <div className="flex flex-col items-end gap-2">
      <div className={`text-sm ${isComplete ? "text-green-600 font-bold" : "text-gray-500"}`}>
        {habit.progress} / {habit.goal}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => updateProgress(index, -1)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <button
          onClick={() => updateProgress(index, 1)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProgressActions;