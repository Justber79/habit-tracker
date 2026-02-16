function HabitListItem({ habit }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <span className="font-medium text-gray-700">{habit.name}</span>
      <span className="text-gray-500">{habit.goal} times/day</span>
    </div>
  );
}

export default HabitListItem;