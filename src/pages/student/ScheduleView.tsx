import {
  Calendar,
  BookOpen,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function ScheduleView() {
  const [currentWeek, setCurrentWeek] = useState(new Date(2026, 5, 1)); // June 1, 2026

  // Schedule events with position data
  const events = [
    {
      title: "Co s? d? li?u",
      time: "08:00 - 10:30",
      room: "A305",
      day: 0,
      startHour: 8,
      duration: 2.5,
      color: "bg-blue-600",
    },
    {
      title: "To�n r?i r?c",
      time: "08:00 - 10:00",
      room: "A101",
      day: 1,
      startHour: 8,
      duration: 2,
      color: "bg-purple-600",
    },
    {
      title: "Co s? d? li?u",
      time: "08:00 - 10:30",
      room: "A305",
      day: 2,
      startHour: 8,
      duration: 2.5,
      color: "bg-blue-600",
    },
    {
      title: "To�n r?i r?c",
      time: "08:00 - 10:00",
      room: "A101",
      day: 3,
      startHour: 8,
      duration: 2,
      color: "bg-purple-600",
    },
    {
      title: "K? thu?t ph?n m?m",
      time: "10:30 - 12:00",
      room: "B203",
      day: 1,
      startHour: 10.5,
      duration: 1.5,
      color: "bg-orange-600",
    },
    {
      title: "K? thu?t ph?n m?m",
      time: "10:30 - 12:00",
      room: "B203",
      day: 3,
      startHour: 10.5,
      duration: 1.5,
      color: "bg-orange-600",
    },
    {
      title: "L?p tr�nh Web",
      time: "13:00 - 15:30",
      room: "B202",
      day: 0,
      startHour: 13,
      duration: 2.5,
      color: "bg-green-600",
    },
    {
      title: "C?u tr�c d? li?u v� gi?i thu?t",
      time: "14:00 - 16:00",
      room: "B202",
      day: 1,
      startHour: 14,
      duration: 2,
      color: "bg-cyan-600",
    },
    {
      title: "C?u tr�c d? li?u v� gi?i thu?t",
      time: "14:00 - 16:00",
      room: "B202",
      day: 3,
      startHour: 14,
      duration: 2,
      color: "bg-cyan-600",
    },
    {
      title: "L?p tr�nh Web",
      time: "13:00 - 15:30",
      room: "B202",
      day: 2,
      startHour: 13,
      duration: 2.5,
      color: "bg-green-600",
    },
    {
      title: "Tr� tu? nh�n t?o",
      time: "17:00 - 19:00",
      room: "Lab AI",
      day: 0,
      startHour: 17,
      duration: 2,
      color: "bg-purple-600",
    },
    {
      title: "Tr� tu? nh�n t?o",
      time: "17:00 - 19:00",
      room: "Lab AI",
      day: 2,
      startHour: 17,
      duration: 2,
      color: "bg-purple-600",
    },
  ];

  const upcomingEvents = [
    {
      title: "Co s? d? li?u",
      time: "08:00 - 10:30",
      room: "A305",
    },
    {
      title: "L?p tr�nh Web",
      time: "13:00 - 15:30",
      room: "B202",
    },
    {
      title: "Tr� tu? nh�n t?o",
      time: "17:00 - 19:00",
      room: "Lab AI",
    },
  ];

  const daysOfWeek = ["Th? Hai", "Th? Ba", "Th? Tu", "Th? Nam", "Th? S�u", "Th? B?y", "CN"];
  const dates = [1, 2, 3, 4, 5, 6, 7]; // Mon-Sun

  const hours = Array.from({ length: 12 }, (_, i) => `${String(7 + i).padStart(2, "0")}:00`);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a1428] text-white">
      {/* HEADER */}
      <div className="bg-[#0f1b2e] border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">L?ch h?c</h1>
          <p className="text-gray-400 text-sm">Xem th?i kh�a bi?u v� qu?n l� l?ch h?c</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="T�m ki?m m�n h?c, ph�ng..."
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-96 placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <Search size={18} className="absolute right-3 top-2.5 text-gray-500" />
          </div>
          <Bell size={20} className="text-gray-400 cursor-pointer" />
          <img src="https://i.pravatar.cc/32?u=student" alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </div>

      {/* CONTENT AREA */}
      <main className="relative mx-auto w-full max-w-[1500px] px-5 py-8 h-[calc(100vh-100px)] flex gap-6">
        {/* TIMETABLE */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-white/10 rounded">
                <ChevronLeft size={20} />
              </button>
              <span className="text-sm px-4">01/06/2026 - 07/06/2026</span>
              <button className="p-1 hover:bg-white/10 rounded">
                <ChevronRight size={20} />
              </button>
            </div>
            <button className="text-blue-400 text-sm hover:text-blue-300">H�m nay</button>
          </div>

          {/* Calendar Table */}
          <div className="flex-1 flex flex-col bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            {/* Days Header */}
            <div className="grid grid-cols-7 border-b border-white/10 bg-[#0f1b2e]">
              {daysOfWeek.map((day, i) => (
                <div key={day} className="border-r border-white/10 last:border-r-0 p-3 text-center">
                  <div className="text-xs font-semibold text-gray-400">{day}</div>
                  <div className="text-sm font-bold text-blue-400 mt-1">{dates[i]}/06</div>
                </div>
              ))}
            </div>

            {/* Hours Grid Container */}
            <div className="flex-1 overflow-y-auto relative">
              <div className="grid grid-cols-7 gap-0 relative" style={{ minHeight: "100%" }}>
                {/* Time Row Background */}
                {Array.from({ length: 12 }).map((_, hourIdx) => (
                  <div key={`row-bg-${hourIdx}`} className="col-span-7 grid grid-cols-7 h-20 border-b border-white/10 last:border-b-0">
                    {Array.from({ length: 7 }).map((_, dayIdx) => (
                      <div
                        key={`cell-${hourIdx}-${dayIdx}`}
                        className="border-r border-white/10 last:border-r-0 relative p-1"
                      >
                        {dayIdx === 0 && (
                          <div className="text-xs text-gray-500 px-1">{hours[hourIdx]}</div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}

                {/* Events Layer */}
                {events.map((event, idx) => {
                  const topPosition = (event.startHour - 7) * 5 + 0.5; // rem units
                  const heightSize = event.duration * 5; // rem units
                  const leftPercent = (event.day / 7) * 100;
                  const widthPercent = (1 / 7) * 100;
                  
                  return (
                    <div
                      key={idx}
                      className={`${event.color} absolute rounded border border-white/20 px-2 py-1 text-xs font-semibold text-white overflow-hidden cursor-pointer hover:opacity-90 transition z-10`}
                      style={{
                        left: `${leftPercent}%`,
                        top: `${topPosition}rem`,
                        width: `calc(${widthPercent}% - 0.25rem)`,
                        height: `${heightSize}rem`,
                        margin: "0 0.125rem",
                      }}
                    >
                      <div className="font-bold text-[10px]">{event.title}</div>
                      <div className="text-white/80 text-[9px]">{event.time}</div>
                      <div className="text-white/70 text-[9px]">{event.room}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3 mt-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-400">3</div>
              <div className="text-xs text-gray-400">M�n h?c</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-400">1</div>
              <div className="text-xs text-gray-400">H�m nay</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-400">5</div>
              <div className="text-xs text-gray-400">Tu?n n�y</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-400">12</div>
              <div className="text-xs text-gray-400">T�n ch?</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-72 flex flex-col gap-4 overflow-y-auto">
          {/* Mini Calendar */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Th�ng 6, 2026</h3>
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: 30 }).map((_, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 rounded text-xs font-semibold ${
                    i + 1 === 1 ? "bg-blue-600 text-white" : "hover:bg-white/10"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex-1">
            <h3 className="font-semibold mb-3">S?p t?i</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded p-3 hover:bg-white/10 cursor-pointer">
                  <div className="font-semibold text-sm">{event.title}</div>
                  <div className="text-xs text-gray-400 mt-1">{event.time}</div>
                  <div className="text-xs text-gray-500">{event.room}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Add event button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold text-sm">
            Xem to�n b? l?ch
          </button>
        </div>
      </main>
    </div>
  );
}
