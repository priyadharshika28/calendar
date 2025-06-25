import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    const updated = [...tasks, { text: newTask, done: false }];
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
    setNewTask('');
  };

  const toggleTask = (index) => {
    const updated = tasks.map((t, i) => i === index ? { ...t, done: !t.done } : t);
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📝 Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="Enter a task..."
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, idx) => (
          <li
            key={idx}
            onClick={() => toggleTask(idx)}
            className={`p-2 border rounded cursor-pointer ${
              task.done ? 'line-through text-gray-500 bg-gray-100' : 'bg-white'
            }`}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
