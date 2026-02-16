function HabitListItem({ habit, index, updateProgress, deleteHabit }) {
  const goal = Number(habit.goal) > 0 ? Number(habit.goal) : 1;
  let progress = Number(habit.progress);
  if (isNaN(progress) || progress < 0) progress = 0;
  if (progress > goal) progress = goal;

  const percentage = Math.round((progress / goal) * 100);
  const isComplete = progress >= goal;

  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6 w-full transition-transform hover:scale-[1.01]">
      
      {/* Habit name */}
      <div className="flex-1 mb-3 md:mb-0 md:mr-6">
        <span
          className={`text-lg font-semibold ${
            isComplete ? "text-green-600 line-through" : "text-gray-900"
          }`}
        >
          {habit.name || "Unnamed Habit"}
        </span>
      </div>

      {/* Progress bar */}
      <div className="flex-1 w-full">
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div
            className={`h-6 rounded-full transition-all duration-300`}
            style={{
              width: `${percentage}%`,
              background: isComplete
                ? "linear-gradient(to right, #34D399, #10B981)"
                : "linear-gradient(to right, #3B82F6, #60A5FA)"
            }}
          ></div>
        </div>
      </div>

      {/* Counter + buttons + delete */}
      <div className="flex items-center gap-2 mt-3 md:mt-0 md:ml-6">
        <span className="text-sm text-gray-700 w-14 text-center">
          {progress}/{goal}
        </span>
        <button
          onClick={() => updateProgress(index, -1)}
          className="px-3 py-1 text-gray-500 hover:text-red-600 rounded text-sm bg-gray-100 hover:bg-gray-200 transition"
        >
          −
        </button>
        <button
          onClick={() => updateProgress(index, 1)}
          className="px-3 py-1 text-gray-500 hover:text-green-600 rounded text-sm bg-gray-100 hover:bg-gray-200 transition"
        >
          +
        </button>
        <button
          onClick={() => deleteHabit(index)}
          className="px-2 py-1 text-gray-500 hover:text-red-700 rounded text-sm ml-2 bg-gray-100 hover:bg-gray-200 transition"
          title="Delete habit"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default HabitListItem;