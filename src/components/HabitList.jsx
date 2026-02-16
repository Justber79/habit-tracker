import HabitListItem from "./HabitListItem";

function HabitList({ habits }) {
    console.log("HabitList rendered");
  return (
    <div className="mt-6 w-full max-w-2xl mx-auto flex flex-col gap-4">
      {habits.length === 0 ? (
        <p className="text-gray-500 text-center">No habits added yet.</p>
      ) : (
        habits.map((habit, index) => (
          <HabitListItem key={index} habit={habit} />
        ))
      )}
    </div>
  );
}

export default HabitList;