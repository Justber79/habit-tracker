import ProgressActions from "./ProgressActions";

function HabitListItem({ habit, index, updateProgress }) {
  const isComplete = habit.progress === habit.goal;

  return (
    <div
      className={`p-4 rounded-lg shadow flex justify-between items-center transition-colors
        ${isComplete ? "bg-green-100 border-green-500" : "bg-white border-gray-200"} border`}
    >
      <div>
        <span className={`font-medium text-gray-700 ${isComplete ? "line-through" : ""}`}>
          {habit.name}
        </span>
      </div>

      <ProgressActions habit={habit} index={index} updateProgress={updateProgress} />
    </div>
  );
}

export default HabitListItem;