import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Clock,
  GraduationCap,
  Download,
} from "lucide-react";
import { ScreenType, UserSession } from "../../types";

interface ScheduleViewProps {
  setScreen: (screen: ScreenType) => void;
  user: UserSession | null;
  onLogout: () => void;
}

export default function ScheduleView({ setScreen, user, onLogout }: ScheduleViewProps) {
  const [currentWeek, setCurrentWeek] = useState(new Date(2026, 5, 1)); // June 1, 2026 (Monday)
  const [viewMode, setViewMode] = useState<"week" | "month">("week");

  // Get Monday of the week
  const getMonday = (d: Date) => {
    const date = new Date(d);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  };

  const monday = getMonday(currentWeek);

  // Generate 7 days of the week
  const daysOfWeek = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"];
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });

  const formatDate = (date: Date) => {
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  };

  const formatDateShort = (date: Date) => {
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    return `${d}/${m}`;
  };

  // Schedule events with correct Vietnamese characters and grid placement style
  const events = [
    {
      title: "Cơ sở dữ liệu",
      time: "08:00 - 10:30",
      room: "A305",
      day: 0, // Thứ Hai
      colorClass: "bg-[#0B1E43]/70 border-[#3b82f6]/30 border-l-4 border-[#3b82f6]",
    },
    {
      title: "Toán rời rạc",
      time: "08:00 - 10:00",
      room: "A101",
      day: 1, // Thứ Ba
      colorClass: "bg-[#241347]/70 border-[#a855f7]/30 border-l-4 border-[#a855f7]",
    },
    {
      title: "Cơ sở dữ liệu",
      time: "08:00 - 10:30",
      room: "A305",
      day: 2, // Thứ Tư
      colorClass: "bg-[#0B1E43]/70 border-[#3b82f6]/30 border-l-4 border-[#3b82f6]",
    },
    {
      title: "Toán rời rạc",
      time: "08:00 - 10:00",
      room: "A101",
      day: 3, // Thứ Năm
      colorClass: "bg-[#241347]/70 border-[#a855f7]/30 border-l-4 border-[#a855f7]",
    },
    {
      title: "Kỹ thuật phần mềm",
      time: "10:30 - 12:00",
      room: "B203",
      day: 1, // Thứ Ba
      colorClass: "bg-[#3B2117]/70 border-[#f97316]/30 border-l-4 border-[#f97316]",
    },
    {
      title: "Kỹ thuật phần mềm",
      time: "10:30 - 12:00",
      room: "B203",
      day: 3, // Thứ Năm
      colorClass: "bg-[#3B2117]/70 border-[#f97316]/30 border-l-4 border-[#f97316]",
    },
    {
      title: "Lập trình Web",
      time: "13:00 - 15:30",
      room: "B202",
      day: 0, // Thứ Hai
      colorClass: "bg-[#0B2C24]/70 border-[#22c55e]/30 border-l-4 border-[#22c55e]",
    },
    {
      title: "Cấu trúc dữ liệu và giải thuật",
      time: "14:00 - 16:00",
      room: "B202",
      day: 1, // Thứ Ba
      colorClass: "bg-[#072B3B]/70 border-[#06b6d4]/30 border-l-4 border-[#06b6d4]",
    },
    {
      title: "Cấu trúc dữ liệu và giải thuật",
      time: "14:00 - 16:00",
      room: "B202",
      day: 3, // Thứ Năm
      colorClass: "bg-[#072B3B]/70 border-[#06b6d4]/30 border-l-4 border-[#06b6d4]",
    },
    {
      title: "Lập trình Web",
      time: "13:00 - 15:30",
      room: "B202",
      day: 2, // Thứ Tư
      colorClass: "bg-[#0B2C24]/70 border-[#22c55e]/30 border-l-4 border-[#22c55e]",
    },
    {
      title: "Lập trình Web",
      time: "13:00 - 15:30",
      room: "B202",
      day: 4, // Thứ Sáu
      colorClass: "bg-[#0B2C24]/70 border-[#22c55e]/30 border-l-4 border-[#22c55e]",
    },
    {
      title: "Trí tuệ nhân tạo",
      time: "17:00 - 19:00",
      room: "Lab AI",
      day: 0, // Thứ Hai
      colorClass: "bg-[#2A1343]/70 border-[#6366f1]/30 border-l-4 border-[#6366f1]",
    },
    {
      title: "Trí tuệ nhân tạo",
      time: "17:00 - 19:00",
      room: "Lab AI",
      day: 2, // Thứ Tư
      colorClass: "bg-[#2A1343]/70 border-[#6366f1]/30 border-l-4 border-[#6366f1]",
    },
  ];

  const upcomingEvents = [
    {
      title: "Cơ sở dữ liệu",
      time: "08:00 - 10:30",
      room: "A305",
      remaining: "Còn 2 giờ",
      color: "bg-[#3b82f6]",
    },
    {
      title: "Lập trình Web",
      time: "13:00 - 15:30",
      room: "B202",
      remaining: "Còn 7 giờ",
      color: "bg-[#22c55e]",
    },
    {
      title: "Trí tuệ nhân tạo",
      time: "17:00 - 19:00",
      room: "Lab AI",
      remaining: "Còn 11 giờ",
      color: "bg-[#6366f1]",
    },
  ];



  const handlePrevWeek = () => {
    const prev = new Date(currentWeek);
    prev.setDate(currentWeek.getDate() - 7);
    setCurrentWeek(prev);
  };

  const handleNextWeek = () => {
    const next = new Date(currentWeek);
    next.setDate(currentWeek.getDate() + 7);
    setCurrentWeek(next);
  };

  const handleToday = () => {
    setCurrentWeek(new Date(2026, 5, 1));
  };

  // Mini calendar data for June 2026
  // Row 1: May 25 to May 31
  // Row 2: Jun 1 to Jun 7
  // Row 3: Jun 8 to Jun 14
  // Row 4: Jun 15 to Jun 21
  // Row 5: Jun 22 to Jun 28
  // Row 6: Jun 29 to Jul 5
  const miniCalendarDays = [
    { day: 25, isCurrentMonth: false },
    { day: 26, isCurrentMonth: false },
    { day: 27, isCurrentMonth: false },
    { day: 28, isCurrentMonth: false },
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: false },
    
    { day: 1, isCurrentMonth: true, isActive: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true },
    { day: 5, isCurrentMonth: true },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },

    { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true },
    { day: 14, isCurrentMonth: true },

    { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true },
    { day: 21, isCurrentMonth: true },

    { day: 22, isCurrentMonth: true },
    { day: 23, isCurrentMonth: true },
    { day: 24, isCurrentMonth: true },
    { day: 25, isCurrentMonth: true },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },

    { day: 29, isCurrentMonth: true },
    { day: 30, isCurrentMonth: true },
    { day: 1, isCurrentMonth: false },
    { day: 2, isCurrentMonth: false },
    { day: 3, isCurrentMonth: false },
    { day: 4, isCurrentMonth: false },
    { day: 5, isCurrentMonth: false },
  ];

  return (
    <div className="w-full flex-grow flex flex-col p-6">
        
        {/* Header - Standard Layout matching image */}
        <header className="h-20 flex items-center justify-between mb-6 border-b border-[#0d1e3d]/60 pb-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Lịch học</h1>
            <p className="text-slate-400 text-sm mt-1">
              Xem thời khóa biểu và quản lý lịch học của bạn
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm môn học, phòng..."
                className="w-[320px] h-11 rounded-xl bg-[#071A3B]/60 border border-[#0d1e3d] pl-5 pr-11 text-sm outline-none placeholder-slate-500 focus:border-[#0c4ec3] focus:ring-1 focus:ring-[#0c4ec3] transition-all text-white"
              />
              <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>

            {/* Notification Bell */}
            <button className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#071A3B]/60 border border-[#0d1e3d] hover:bg-[#071A3B] transition-colors outline-none">
              <Bell size={20} className="text-slate-200" />
              <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ef4444] px-1 text-[10px] font-extrabold text-white">
                8
              </span>
            </button>

            {/* Profile Info */}
            <div className="flex items-center gap-3.5 bg-[#071A3B]/40 border border-[#0d1e3d]/40 rounded-xl py-1.5 pl-2.5 pr-4">
              <img
                src={user?.avatar || "https://i.pravatar.cc/150?img=32"}
                alt="Avatar"
                className="w-8 h-8 rounded-full border border-cyan-400/20 object-cover"
              />
              <span className="text-sm font-semibold text-slate-200">
                {user?.name || "Thùy Linh"}
              </span>
              <ChevronDown size={14} className="text-slate-400" />
            </div>
          </div>
        </header>

        {/* Toolbar - Week Navigation / View Toggles */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevWeek}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#071A3B]/60 border border-[#0d1e3d] hover:bg-[#071A3B] hover:text-white text-slate-300 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <h3 className="text-[16px] font-bold text-slate-200 bg-[#071A3B]/30 border border-[#0d1e3d]/40 px-4 py-2 rounded-lg">
              {formatDate(monday)} - {formatDate(weekDates[6])}
            </h3>

            <button
              onClick={handleNextWeek}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#071A3B]/60 border border-[#0d1e3d] hover:bg-[#071A3B] hover:text-white text-slate-300 transition-colors"
            >
              <ChevronRight size={18} />
            </button>

            <button
              onClick={handleToday}
              className="h-10 px-4 rounded-lg bg-[#071A3B]/60 border border-[#0d1e3d] hover:bg-[#071A3B] hover:text-white text-sm font-bold text-slate-300 transition-colors"
            >
              Hôm nay
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Week/Month Mode Toggle */}
            <div className="flex bg-[#071A3B] border border-[#0d1e3d]/50 p-1 rounded-xl">
              <button
                onClick={() => setViewMode("week")}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  viewMode === "week"
                    ? "bg-[#0c4ec3] text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Tuần
              </button>
              <button
                onClick={() => setViewMode("month")}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  viewMode === "month"
                    ? "bg-[#0c4ec3] text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Tháng
              </button>
            </div>

            {/* Export Schedule button */}
            <button className="flex h-11 items-center gap-2 px-4 rounded-xl bg-[#071A3B]/60 border border-[#0d1e3d] hover:bg-[#071A3B] hover:text-white text-sm font-bold text-slate-300 transition-colors">
              <Download size={16} />
              <span>Xuất lịch</span>
            </button>
          </div>
        </div>

        {/* Dashboard Grid - Two Columns Layout */}
        <div className="flex flex-1 gap-6 items-start">
          
          {/* Left Column: Calendar Grid & Stats underneath */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Calendar Container */}
            <div
              className="grid bg-[#020b24] border border-[#0d1e3d] rounded-xl overflow-hidden shadow-2xl relative select-none"
              style={{ gridTemplateColumns: "80px repeat(7, 1fr)" }}
            >
              {/* Day Headers */}
              <div className="bg-[#071A3B]/80 border-b border-[#0d1e3d] h-14 flex items-center justify-center text-xs font-semibold text-slate-400">
                {/* Empty cell for time column header */}
              </div>
              {daysOfWeek.map((day, i) => (
                <div
                  key={day}
                  className="bg-[#071A3B]/80 border-b border-[#0d1e3d] border-l border-[#0d1e3d]/60 h-14 flex flex-col items-center justify-center"
                >
                  <span className="text-[11px] text-slate-400 font-semibold tracking-wide uppercase">
                    {day}
                  </span>
                  <span className="text-[13px] font-bold text-blue-400 mt-0.5">
                    {formatDateShort(weekDates[i])}
                  </span>
                </div>
              ))}

              {/* Hour rows with cells */}
              {Array.from({ length: 12 }).map((_, hourIdx) => {
                const startHour = 7 + hourIdx;
                const label = `${String(startHour).padStart(2, "0")}:00`;
                
                // Do not display "18:00" label to match mockup image exactly
                const displayLabel = label === "18:00" ? "" : label;

                return (
                  <React.Fragment key={hourIdx}>
                    
                    {/* Hour label cell on the left */}
                    <div
                      className="border-b border-[#0d1e3d]/40 h-16 flex items-start justify-center pt-1.5 text-xs font-bold text-slate-500 bg-[#020b24] border-r border-[#0d1e3d]/40"
                      style={{
                        gridColumn: 1,
                        gridRow: `${hourIdx * 2 + 2} / span 2`,
                      }}
                    >
                      {displayLabel}
                    </div>

                    {/* Day background cells for this hour row */}
                    {Array.from({ length: 7 }).map((_, dayIdx) => (
                      <div
                        key={dayIdx}
                        className="border-b border-[#0d1e3d]/40 border-l border-[#0d1e3d]/30 h-16 bg-[#020b24]"
                        style={{
                          gridColumn: dayIdx + 2,
                          gridRow: `${hourIdx * 2 + 2} / span 2`,
                        }}
                      />
                    ))}

                  </React.Fragment>
                );
              })}

              {/* Display "19:00" grid line label at the bottom grid line (row 26) */}
              <div
                className="absolute left-0 bottom-0 w-20 text-center text-xs font-bold text-slate-500 pb-0.5 select-none"
                style={{
                  gridColumn: 1,
                  gridRow: 26,
                  transform: "translateY(50%)",
                }}
              >
                19:00
              </div>

              {/* Calendar Events (Layered inside CSS grid cells) */}
              {events.map((event, idx) => {
                const [startStr, endStr] = event.time.split(" - ");
                const [startH, startM] = startStr.split(":").map(Number);
                const [endH, endM] = endStr.split(":").map(Number);

                // calculate start row index and end row index in the grid.
                // gridRow 1: headers. Row 2: 07:00. Each row spans 30 minutes.
                const startRow = (startH - 7) * 2 + 2 + (startM >= 30 ? 1 : 0);
                const endRow = (endH - 7) * 2 + 2 + (endM >= 30 ? 1 : 0);
                const gridColumn = event.day + 2;

                return (
                  <div
                    key={idx}
                    className={`m-1 p-2.5 rounded-lg border flex flex-col justify-between text-xs hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-lg z-10 ${event.colorClass}`}
                    style={{
                      gridColumn: gridColumn,
                      gridRow: `${startRow} / ${endRow}`,
                    }}
                  >
                    <div>
                      <div className="font-bold text-white text-[12px] leading-tight">
                        {event.title}
                      </div>
                      <div className="text-white/80 text-[10px] mt-1 font-medium">
                        {event.time}
                      </div>
                    </div>
                    <div className="text-white/60 text-[10px] font-semibold mt-1">
                      {event.room}
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Statistics Footer (Below the calendar) */}
            <div className="grid grid-cols-4 gap-4">
              
              <div className="flex items-center gap-4 bg-[#071A3B]/40 border border-[#0d1e3d]/80 rounded-2xl p-4 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                  <BookOpen size={22} />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">3</div>
                  <div className="text-xs text-slate-400 font-semibold mt-0.5">Môn học</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#071A3B]/40 border border-[#0d1e3d]/80 rounded-2xl p-4 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10 border border-green-500/20 text-green-400">
                  <CalendarIcon size={22} />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">1</div>
                  <div className="text-xs text-slate-400 font-semibold mt-0.5">Hôm nay</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#071A3B]/40 border border-[#0d1e3d]/80 rounded-2xl p-4 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">5</div>
                  <div className="text-xs text-slate-400 font-semibold mt-0.5">Tuần này</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#071A3B]/40 border border-[#0d1e3d]/80 rounded-2xl p-4 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600/10 border border-amber-500/20 text-amber-400">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">12</div>
                  <div className="text-xs text-slate-400 font-semibold mt-0.5">Tổng tín chỉ</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Sidebar (Mini Calendar & Sắp tới) */}
          <div className="w-[320px] flex flex-col gap-6 shrink-0">
            
            {/* Mini Calendar Widget */}
            <div className="bg-[#071A3B]/30 border border-[#0d1e3d]/80 rounded-2xl p-5 shadow-2xl">
              
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-100 text-sm">Tháng 6, 2026</h4>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-[#071A3B] rounded-lg transition-colors outline-none">
                    <ChevronLeft size={16} className="text-slate-400" />
                  </button>
                  <button className="p-1 hover:bg-[#071A3B] rounded-lg transition-colors outline-none">
                    <ChevronRight size={16} className="text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Day Headers (T2, T3...) */}
              <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-500 mb-2">
                <div>T2</div>
                <div>T3</div>
                <div>T4</div>
                <div>T5</div>
                <div>T6</div>
                <div>T7</div>
                <div>CN</div>
              </div>

              {/* Day grid */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {miniCalendarDays.map((item, idx) => (
                  <button
                    key={idx}
                    className={`h-7 w-7 mx-auto rounded-full flex items-center justify-center text-xs font-bold transition-all outline-none ${
                      item.isActive
                        ? "bg-[#0c4ec3] text-white shadow-md"
                        : item.isCurrentMonth
                        ? "text-slate-200 hover:bg-[#071A3B]"
                        : "text-slate-600 hover:bg-[#071A3B]/30"
                    }`}
                  >
                    {item.day}
                  </button>
                ))}
              </div>

            </div>

            {/* Upcoming Classes List */}
            <div className="bg-[#071A3B]/30 border border-[#0d1e3d]/80 rounded-2xl p-5 shadow-2xl flex-grow">
              <h4 className="font-bold text-slate-100 text-sm mb-4">Sắp tới</h4>
              
              <div className="space-y-3">
                {upcomingEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className="group bg-[#071A3B]/40 hover:bg-[#071A3B]/80 border border-[#0d1e3d]/60 rounded-xl p-4 transition-all cursor-pointer flex justify-between items-start"
                  >
                    <div className="flex gap-3">
                      {/* Left color dot indicator */}
                      <span className={`h-2 w-2 rounded-full mt-1.5 shrink-0 ${event.color}`} />
                      <div>
                        <h5 className="font-bold text-slate-200 text-[13px] group-hover:text-white transition-colors">
                          {event.title}
                        </h5>
                        <p className="text-[11px] text-slate-400 mt-1 font-semibold">
                          {event.time}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5 font-bold">
                          {event.room}
                        </p>
                      </div>
                    </div>
                    
                    <span className="text-[11px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-lg border border-blue-500/20">
                      {event.remaining}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* View Full Schedule Button */}
            <button className="w-full bg-[#071A3B]/40 hover:bg-[#0c4ec3] hover:text-white hover:border-[#0c4ec3] border border-[#0d1e3d] text-slate-300 font-bold py-3 rounded-xl text-sm transition-all shadow-lg outline-none active:scale-[0.98]">
              Xem toàn bộ lịch
            </button>

          </div>

        </div>

    </div>
  );
}
