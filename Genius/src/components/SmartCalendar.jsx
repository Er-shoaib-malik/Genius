import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const SmartCalendar = () => {
  const [view, setView] = useState("month"); // month | week | day
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "" });

  // -------- Date Utilities ----------
  const getMonthDays = (date) => {
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const days = [];
    for (let i = 1; i <= end.getDate(); i++) {
      days.push(new Date(date.getFullYear(), date.getMonth(), i));
    }
    return days;
  };

  const getWeekDays = (date) => {
    const curr = new Date(date);
    const first = curr.getDate() - curr.getDay();
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(new Date(curr.getFullYear(), curr.getMonth(), first + i));
    }
    return weekDays;
  };

  const prev = () => {
    if (view === "month")
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
      );
    if (view === "week")
      setCurrentDate(
        new Date(currentDate.setDate(currentDate.getDate() - 7))
      );
    if (view === "day")
      setCurrentDate(
        new Date(currentDate.setDate(currentDate.getDate() - 1))
      );
  };

  const next = () => {
    if (view === "month")
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
      );
    if (view === "week")
      setCurrentDate(
        new Date(currentDate.setDate(currentDate.getDate() + 7))
      );
    if (view === "day")
      setCurrentDate(
        new Date(currentDate.setDate(currentDate.getDate() + 1))
      );
  };

  const addEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: "", date: "" });
      setShowModal(false);
    }
  };

  const today = new Date();
  const monthDays = getMonthDays(currentDate);
  const weekDays = getWeekDays(currentDate);

  const eventsForDay = (day) =>
    events.filter(
      (e) => new Date(e.date).toDateString() === day.toDateString()
    );

  // ----------- UI -------------
  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded-2xl flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-black font-medium">
            {currentDate.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronRight size={20} />
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="ml-3 flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition"
          >
            <Plus size={16} />
            <span className="text-sm font-medium">Add Event</span>
          </button>
        </div>
      </div>

      {/* Calendar View Buttons */}
      <div className="flex justify-end gap-2">
        {["month", "week", "day"].map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              view === v
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>

      {/* Month View */}
      {view === "month" && (
        <div className="grid grid-cols-7 gap-2 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="font-semibold text-gray-500 text-sm">
              {d}
            </div>
          ))}
          {monthDays.map((day, i) => {
            const isToday = day.toDateString() === today.toDateString();
            const dayEvents = eventsForDay(day);
            return (
              <div
                key={i}
                className={`h-24 border rounded-lg p-1 flex flex-col text-xs ${
                  isToday
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <span
                  className={`text-right text-sm ${
                    isToday ? "text-blue-600 font-bold" : "text-gray-700"
                  }`}
                >
                  {day.getDate()}
                </span>
                <div className="flex flex-col gap-1 mt-1">
                  {dayEvents.map((e, i) => (
                    <div
                      key={i}
                      className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded-md truncate"
                    >
                      {e.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Week View */}
      {view === "week" && (
        <div className="grid grid-cols-7 gap-2 text-center">
          {weekDays.map((day, i) => {
            const isToday = day.toDateString() === today.toDateString();
            const dayEvents = eventsForDay(day);
            return (
              <div
                key={i}
                className={`h-32 border rounded-lg p-2 flex flex-col text-xs ${
                  isToday
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <span
                  className={`font-semibold text-sm ${
                    isToday ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {day.toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "numeric",
                  })}
                </span>
                <div className="flex flex-col gap-1 mt-2">
                  {dayEvents.length === 0 && (
                    <div className="text-gray-400 text-xs">No events</div>
                  )}
                  {dayEvents.map((e, i) => (
                    <div
                      key={i}
                      className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md truncate"
                    >
                      {e.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Day View */}
      {view === "day" && (
        <div className="border rounded-lg p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {currentDate.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h3>
          <div className="flex flex-col gap-2">
            {eventsForDay(currentDate).length === 0 && (
              <p className="text-gray-500 text-sm">No events for this day</p>
            )}
            {eventsForDay(currentDate).map((e, i) => (
              <div
                key={i}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm"
              >
                {e.title}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Event Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-6 rounded-2xl shadow-lg w-80"
            >
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Add Event
              </h2>
              <input
                type="text"
                placeholder="Event title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                className="w-full mb-3 border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, date: e.target.value })
                }
                className="w-full mb-3 border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1.5 rounded-lg text-sm bg-gray-100 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={addEvent}
                  className="px-3 py-1.5 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SmartCalendar;
