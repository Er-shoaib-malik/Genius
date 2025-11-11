import React from "react";
import DashNavbar from "../components/DashNavbar";
import SmartCalendar from "../components/SmartCalendar";
import TodoList from "../components/TodoList";

const Calendar = () => {
  const now = new Date();
  const date = now.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // ✅ Fixed: function should *return* a string
  const getGreeting = (hour) => {
    if (hour < 12) {
      return "Good Morning!";
    } else if (hour < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  };

  return (
    <div>

      <div className="bg-gray-100 min-h-screen">
        <div className="rounded-[70px] px-10 py-8 bg-white flex flex-row items-center gap-[20px] min-h-screen">
          <div className="flex flex-col gap-8 w-1/3">
            {/* Greeting + Date */}
            <div className="flex flex-col space-y-1">
              <p className="text-gray-800 text-sm font-medium">{date}</p>
              <h2 className="text-2xl font-semibold text-gray-900">
                {getGreeting(now.getHours())} Alice
              </h2>
            </div>

            {/* Todo List */}
            <TodoList />
          </div>

          {/* Calendar */}
          <div className="flex-1 flex justify-center">
            <SmartCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
