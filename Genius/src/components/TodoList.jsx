import React, { useState, useEffect } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [draft, setDraft] = useState({
    name: "",
    date: toISODate(new Date(Date.now() + 86400000)),
    time: "09:00",
    course: "General",
  });

  const storageKey = "TASKS_reactjs";

  useEffect(() => {
    const stored = loadLocal(storageKey);
    setTasks(stored);
    setLoading(false);
  }, []);

  useEffect(() => {
    saveLocal(storageKey, tasks);
  }, [tasks]);

  const toggleTask = (id) =>
    setTasks((t) =>
      t.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x))
    );

  const updateTask = (id, patch) =>
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, ...patch } : x)));

  const deleteTask = (id) => setTasks((t) => t.filter((x) => x.id !== id));

  const saveDraft = () => {
    if (!isDraftValid(draft)) return;
    const alarmISO = new Date(`${draft.date}T${normalizeTime(draft.time)}:00`).toISOString();
    const newT = {
      id: cryptoId(),
      name: draft.name.trim(),
      alarm: alarmISO,
      completed: false,
      createdAt: new Date().toISOString(),
      course: draft.course.trim(),
    };
    setTasks((t) => [newT, ...t]);
    setShowForm(false);
  };

  const DUE_COLORS = {
    green: "text-green-600",
    orange: "text-orange-500",
    red: "text-red-600",
    muted: "text-slate-500",
  };

  const dueColor = (alarmISO, completed) => {
    if (completed) return DUE_COLORS.muted;
    const ms = new Date(alarmISO).getTime() - Date.now();
    if (ms < 0) return DUE_COLORS.red;
    if (ms <= 12 * 60 * 60 * 1000) return DUE_COLORS.orange;
    return DUE_COLORS.green;
  };

  const isOverdue = (alarmISO, completed) =>
    !completed && new Date(alarmISO) < new Date();

  return (
    <div className="w-[310px] max-w-[333px] rounded-xl bg-gray-100 p-4 font-inter text-slate-900">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[16px] font-semibold">To-do list</h3>
        <button
          onClick={() => setShowForm(true)}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-lg font-bold"
        >
          +
        </button>
      </div>

      {loading ? (
        <p className="text-sm text-slate-500">Loading…</p>
      ) : (
        <div className="grid gap-2">
          {tasks.map((t) => {
            const overdue = isOverdue(t.alarm, t.completed);
            const color = dueColor(t.alarm, t.completed);
            return (
              <div
                key={t.id}
                className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white p-3"
              >
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTask(t.id)}
                  className="mt-1 h-[18px] w-[18px] accent-blue-600 cursor-pointer"
                />

                <div className="flex flex-1 flex-col">
                  <input
                    type="text"
                    value={t.name}
                    onChange={(e) => updateTask(t.id, { name: e.target.value })}
                    placeholder="Task title"
                    className={`border-none bg-transparent text-sm font-semibold focus:outline-none ${
                      t.completed ? "line-through text-gray-400" : "text-slate-900"
                    }`}
                  />

                  {!t.completed && (
                    <div className={`mt-1 text-xs font-medium ${color}`}>
                      {overdue ? "OVERDUE • " : ""}Due:{" "}
                      {new Date(t.alarm).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  )}

                  {t.course && (
                    <div className="mt-1 text-xs text-gray-400">{t.course}</div>
                  )}
                </div>

                <button
                  onClick={() => deleteTask(t.id)}
                  className="text-gray-400 hover:text-gray-600 text-lg"
                >
                  🗑
                </button>
              </div>
            );
          })}
          {!tasks.length && (
            <p className="text-sm text-slate-500">No tasks yet.</p>
          )}
        </div>
      )}

      {showForm && (
        <QuickAddModal
          draft={draft}
          setDraft={setDraft}
          onCancel={() => setShowForm(false)}
          onSave={saveDraft}
        />
      )}
    </div>
  );
}

/* ------------------ Modal ------------------ */
function QuickAddModal({ draft, setDraft, onCancel, onSave }) {
  const valid = isDraftValid(draft);

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-slate-900/40"
      onClick={onCancel}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[310px] max-w-[333px] rounded-xl border border-gray-200 bg-white p-4 shadow-lg font-inter"
      >
        <h2 className="font-semibold mb-2">Add task</h2>

        <label className="text-xs mb-1 block">Title</label>
        <input
          value={draft.name}
          onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
          placeholder="e.g. Finish project"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm mb-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />

        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <label className="text-xs mb-1 block">Date</label>
            <input
              type="date"
              value={draft.date}
              onChange={(e) => setDraft((d) => ({ ...d, date: e.target.value }))}
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-xs mb-1 block">Time</label>
            <input
              type="time"
              value={draft.time}
              onChange={(e) => setDraft((d) => ({ ...d, time: e.target.value }))}
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <label className="text-xs mb-1 block">Category / Class</label>
        <input
          value={draft.course}
          onChange={(e) => setDraft((d) => ({ ...d, course: e.target.value }))}
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-3"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-slate-700"
          >
            Cancel
          </button>
          <button
            disabled={!valid}
            onClick={onSave}
            className={`rounded-md px-3 py-2 text-sm font-semibold ${
              valid
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------ Helpers ------------------ */
function isDraftValid(d) {
  const nameOK = d.name.trim().length > 0;
  const dateOK = /^\d{4}-\d{2}-\d{2}$/.test(d.date);
  const timeOK = /^\d{2}:\d{2}$/.test(d.time);
  const courseOK = d.course.trim().length > 0;
  return nameOK && dateOK && timeOK && courseOK;
}

function loadLocal(k) {
  try {
    const raw = localStorage.getItem(k);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocal(k, v) {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {}
}

function cryptoId() {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);
}

function toISODate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function normalizeTime(t) {
  const [h = "00", m = "00"] = t.split(":");
  return `${h.padStart(2, "0")}:${m.padStart(2, "0")}`;
}
