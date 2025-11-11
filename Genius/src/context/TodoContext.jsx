import React, { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();
const storageKey = "TASKS_reactjs";

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Load tasks once
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey));
      if (Array.isArray(stored)) setTasks(stored);
    } catch {
      setTasks([]);
    }
  }, []);

  // Save whenever tasks change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id) =>
    setTasks((t) =>
      t.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x))
    );

  const updateTask = (id, patch) =>
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, ...patch } : x)));

  const deleteTask = (id) =>
    setTasks((t) => t.filter((x) => x.id !== id));

  const addTask = (task) =>
    setTasks((t) => [task, ...t]);

  return (
    <TodoContext.Provider
      value={{ tasks, setTasks, toggleTask, updateTask, deleteTask, addTask }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
