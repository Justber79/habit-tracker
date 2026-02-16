import { useState, useEffect } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  function addHabit(newHabit) {
    setHabits([...habits, { ...newHabit, progress: 0 }]);
  }

  function updateProgress(index, delta) {
    setHabits(
      habits.map((habit, i) => {
        if (i === index) {
          let newProgress = habit.progress + delta;
          newProgress = Math.max(0, Math.min(newProgress, habit.goal));
          return { ...habit, progress: newProgress };
        }
        return habit;
      })
    );
  }

  function deleteHabit(index) {
    const confirmed = window.confirm("Are you sure you want to delete this habit?");
    if (!confirmed) return;
    setHabits(habits.filter((_, i) => i !== index));
  }

  const totalHabits = habits.length;
  const completedHabits = habits.filter(h => h.progress === h.goal).length;
  const remainingHabits = totalHabits - completedHabits;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Habit Form — full width */}
      <div className="w-full px-4 md:px-8 lg:px-16 py-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full transition-transform hover:scale-[1.01]">
          <HabitForm addHabit={addHabit} />
        </div>
      </div>

      {/* Summary cards — full width row */}
      <div className="w-full px-4 md:px-8 lg:px-16 py-2 flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1 bg-white p-6 rounded-lg shadow text-center">
          <p className="text-gray-700 font-medium">Total Habits</p>
          <p className="text-2xl font-bold text-gray-900">{totalHabits}</p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow text-center">
          <p className="text-gray-700 font-medium">Completed Today</p>
          <p className="text-2xl font-bold text-green-600">{completedHabits}</p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow text-center">
          <p className="text-gray-700 font-medium">Remaining Today</p>
          <p className="text-2xl font-bold text-yellow-600">{remainingHabits}</p>
        </div>
      </div>

      {/* Habit list — full width cards */}
      <div className="w-full px-4 md:px-8 lg:px-16 py-6 flex flex-col gap-6">
        <HabitList
          habits={habits}
          updateProgress={updateProgress}
          deleteHabit={deleteHabit}
        />
      </div>

      <footer className="text-center text-gray-400 py-4">
        &copy; 2026 Habit Tracker
      </footer>
    </div>
  );
}

export default App;