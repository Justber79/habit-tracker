import { useState } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  console.log("App rendered");
  const [habits, setHabits] = useState([]);

  function addHabit(newHabit) {
    setHabits([...habits, newHabit]);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-50 to-blue-50 flex flex-col">
      <Header />
      <div className="max-w-2xl mx-auto p-4 mt-6">
        <HabitForm addHabit={addHabit} />
        <HabitList habits={habits} />
      </div>
    </div>
  );
}

export default App;