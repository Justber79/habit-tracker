import { useState } from "react";

function HabitForm({ addHabit }) {
  const [habitName, setHabitName] = useState("");
  const [goal, setGoal] = useState("");

  function handleSubmit(e) {
    console.log("HabitForm rendered");
    e.preventDefault();
    if (!habitName || !goal) return;

    addHabit({ name: habitName, goal });
    setHabitName("");
    setGoal("");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-700">Add a Habit</h2>
      <input
        type="text"
        placeholder="Habit Name"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <input
        type="number"
        placeholder="Goal (times/day)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <button
        type="submit"
        className="bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition-colors"
      >
        Add Habit
      </button>
    </form>
  );
}

export default HabitForm;