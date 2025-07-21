import React, { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">📝 To-Do List</h2>

      <div className="flex mb-6 shadow-sm">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-200 rounded-l-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Enter a task..."
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-5 py-2 rounded-r-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center italic">No tasks yet ✨</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              onClick={() => toggleComplete(task.id)}
              className={`cursor-pointer p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition ${
                task.completed ? "line-through text-gray-400" : "text-gray-700"
              }`}
            >
              {task.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}