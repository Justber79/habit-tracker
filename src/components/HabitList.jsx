import HabitListItem from "./HabitListItem";

function HabitList({ habits, updateProgress, deleteHabit }) {
  if (!habits || habits.length === 0) {
    return (
      <p className="text-center text-gray-500 w-full">
        No habits added yet.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      {habits.map((habit, index) => (
        <HabitListItem
          key={index}
          habit={habit}
          index={index}
          updateProgress={updateProgress}
          deleteHabit={deleteHabit}
        />
      ))}
    </div>
  );
}

export default HabitList;