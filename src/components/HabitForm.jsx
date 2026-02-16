import { useState } from "react";

function HabitForm({ addHabit }) {
  const [habitName, setHabitName] = useState("");
  const [goal, setGoal] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!habitName || !goal) return alert("Please enter habit name and goal.");
    addHabit({ name: habitName, goal: Number(goal) });
    setHabitName("");
    setGoal("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h2 className="font-bold text-lg mb-2">Add a Habit</h2>
      <input
        type="text"
        placeholder="Habit Name"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        placeholder="Goal (times/day)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Habit
      </button>
    </form>
  );
}

export default HabitForm;