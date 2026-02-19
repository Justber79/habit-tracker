import { useState } from "react";

function HabitForm({ addHabit }) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !goal) return;

    addHabit({ name, goal: Number(goal) });

    setName("");
    setGoal("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      {/* Row container */}
      <div className="flex flex-col md:flex-row gap-4">

        {/* Habit Name */}
        <div className="flex flex-col flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Habit name
          </label>
          <input
            type="text"
            placeholder="e.g. Drink water"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Goal */}
        <div className="flex flex-col w-full md:w-32">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Daily goal
          </label>
          <input
            type="number"
            placeholder="e.g. 8"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add Habit
          </button>
        </div>

      </div>

    </form>
  );
}

export default HabitForm;