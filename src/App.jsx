import { useState } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  function addHabit(newHabit) {
    setHabits([...habits, { ...newHabit, progress: 0 }]);
  }

  function updateProgress(index, delta) {
    const updatedHabits = habits.map((habit, i) => {
      if (i === index) {
        let newProgress = habit.progress + delta;
        newProgress = Math.max(0, Math.min(newProgress, habit.goal));
        return { ...habit, progress: newProgress };
      }
      return habit;
    });
    setHabits(updatedHabits);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-50 to-blue-50 flex flex-col">
      <Header />

      <div className="max-w-2xl mx-auto p-4 mt-6 flex flex-col gap-6">
        <HabitForm addHabit={addHabit} />
        <HabitList habits={habits} updateProgress={updateProgress} />
      </div>
    </div>
  );
}

export default App;