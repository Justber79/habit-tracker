import HabitListItem from "./HabitListItem";

function HabitList({ habits, updateProgress }) {
  return (
    <div className="mt-6 w-full flex flex-col gap-4">
      {habits.length === 0 ? (
        <p className="text-gray-500 text-center">No habits added yet.</p>
      ) : (
        habits.map((habit, index) => (
          <HabitListItem
            key={index}
            habit={habit}
            index={index}
            updateProgress={updateProgress}
          />
        ))
      )}
    </div>
  );
}

export default HabitList;