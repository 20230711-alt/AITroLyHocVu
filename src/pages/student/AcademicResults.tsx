import React, { useState } from "react";
import {
  GraduationCap,
  BarChart3,
  Trophy,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Settings,
  Calendar,
} from "lucide-react";
import { UserSession } from "../../types";

interface AcademicResultsProps {
  user?: UserSession | null;
}

export default function AcademicResults({ user }: AcademicResultsProps) {
  const [semesterSelect, setSemesterSelect] = useState("Học kỳ 2 - 2023-2024");
  const [currentPage, setCurrentPage] = useState(1);

  // Score statistics & details matching the mockup
  const subjects = [
    { stt: 1, name: "Cơ sở dữ liệu", credits: 3, qt: 8.5, thi: 8.3, tong: 8.4, grade: "A" },
    { stt: 2, name: "Lập trình Java", credits: 4, qt: 9.5, thi: 8.8, tong: 9.0, grade: "A+" },
    { stt: 3, name: "Lập trình Web", credits: 3, qt: 8.0, thi: 8.8, tong: 8.5, grade: "A" },
    { stt: 4, name: "Trí tuệ nhân tạo", credits: 3, qt: 7.5, thi: 8.2, tong: 8.0, grade: "B+" },
    { stt: 5, name: "Mạng máy tính", credits: 3, qt: 9.0, thi: 8.5, tong: 8.7, grade: "A" },
    { stt: 6, name: "Hệ điều hành", credits: 3, qt: 8.1, thi: 8.4, tong: 8.3, grade: "A" },
  ];

  const trendData = [
    { hk: "HK1", value: 3.10 },
    { hk: "HK2", value: 3.32 },
    { hk: "HK3", value: 3.41 },
    { hk: "HK4", value: 3.45 },
  ];

  const detailsStats = [
    { label: "Tổng tín chỉ", value: "102" },
    { label: "Tổng số môn", value: "35" },
    { label: "Môn cao nhất", value: "Lập trình Java (9.0)" },
    { label: "Môn thấp nhất", value: "Trí tuệ nhân tạo (7.0)" },
  ];

  // Donut chart segments for GPA distribution
  // Giỏi: 50%, Khá: 30%, Trung bình: 15%, Yếu: 5%
  // SVG perimeter calculations: 2 * pi * r. For r=38, perimeter = 238.76
  // Green (Giỏi - 50%): dasharray="119.38 238.76", offset="0"
  // Blue (Khá - 30%): dasharray="71.63 238.76", offset="-119.38"
  // Yellow (Trung bình - 15%): dasharray="35.81 238.76", offset="-191.01"
  // Red (Yếu - 5%): dasharray="11.94 238.76", offset="-226.82"

  return (
    <div className="w-full flex-grow flex flex-col p-6 text-white bg-[#020B24]">
      
      {/* Header - Matching layout of schedule view */}
      <header className="h-20 flex items-center justify-between mb-6 border-b border-[#0d1e3d]/60 pb-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Kết quả học tập</h1>
          <p className="text-slate-400 text-sm mt-1">
            Theo dõi kết quả học tập và quá trình tiến bộ của bạn
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm học phần..."
              className="w-[320px] h-11 rounded-xl bg-[#071A3B]/60 border border-[#0d1e3d] pl-5 pr-11 text-sm outline-none placeholder-slate-500 focus:border-[#0c4ec3] focus:ring-1 focus:ring-[#0c4ec3] transition-all text-white"
            />
            <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>

          {/* Notification icon removed from header */}

          {/* User Profile */}
          <div className="flex items-center gap-3.5 bg-[#071A3B]/40 border border-[#0d1e3d]/40 rounded-xl py-1.5 pl-2.5 pr-4">
            <img
              src={user?.avatar || "/assets/images/default-avatar.svg"}
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

      {/* GPA Banner Card - Full Width blue container */}
      <div className="bg-[#071A3B]/40 border border-[#0d1e3d]/80 rounded-2xl p-5 mb-6 shadow-xl flex items-center gap-4.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 shadow-md">
          <GraduationCap size={24} />
        </div>
        <div>
          <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">GPA Hiện tại</div>
          <div className="text-2xl font-black text-white mt-0.5">3.45 / 4.0</div>
          <div className="text-xs text-emerald-400 font-extrabold mt-0.5">Giỏi</div>
        </div>
      </div>

      {/* Main Body - Two Columns Grid */}
      <div className="flex flex-1 gap-6 items-start">
        
        {/* Left Column - Score Trend Chart & Grades Table */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* GPA Trend Bar Chart */}
          <div className="bg-[#071A3B]/30 border border-[#0d1e3d]/80 rounded-2xl p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wide">Xu hướng điểm số</h3>
              <div className="relative">
                <select
                  value={semesterSelect}
                  onChange={(e) => setSemesterSelect(e.target.value)}
                  className="bg-[#071A3B]/60 border border-[#0d1e3d] text-slate-300 rounded-lg px-3 py-1.5 text-xs font-bold outline-none cursor-pointer"
                >
                  <option>4 học kỳ gần nhất</option>
                  <option>Tất cả học kỳ</option>
                </select>
              </div>
            </div>

            {/* Custom Bar Chart Canvas */}
            <div className="relative h-64 w-full flex items-end justify-between px-2 mt-6">
              
              {/* Horizontal markings & lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-7">
                {[4.0, 3.0, 2.0, 1.0, 0.0].map((val, idx) => (
                  <div key={idx} className="w-full flex items-center h-4">
                    <span className="text-[10px] text-slate-500 font-bold w-8 text-left">{val.toFixed(1)}</span>
                    <div className="flex-grow border-b border-[#0d1e3d]/30"></div>
                  </div>
                ))}
              </div>

              {/* Bar items container */}
              <div className="absolute left-8 right-0 bottom-0 top-0 flex justify-around items-end pb-7">
                {trendData.map((item) => {
                  const heightPercent = (item.value / 4.0) * 100;
                  return (
                    <div key={item.hk} className="flex flex-col items-center w-16 group">
                      
                      {/* GPA Value */}
                      <span className="text-xs font-bold text-slate-200 mb-2 opacity-95 group-hover:text-blue-400 transition-colors">
                        {item.value.toFixed(2)}
                      </span>

                      {/* Rounded Bar */}
                      <div
                        className="w-10 rounded-t-lg bg-gradient-to-t from-[#0c4ec3] to-[#3b82f6] shadow-[0_0_12px_rgba(59,130,246,0.25)] transition-all group-hover:brightness-110"
                        style={{ height: `${heightPercent}%` }}
                      />

                      {/* Semester Label */}
                      <span className="text-xs font-bold text-slate-400 mt-2">{item.hk}</span>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>

          {/* Grades Table List */}
          <div className="bg-[#071A3B]/30 border border-[#0d1e3d]/80 rounded-2xl p-5 shadow-2xl">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wide mb-4">
              Bảng điểm học phần - Học kỳ 2 (2023-2024)
            </h3>

            <div className="overflow-x-auto w-full">
              <table className="w-full text-sm text-slate-200">
                <thead>
                  <tr className="bg-[#071A3B]/70 border-b border-[#0d1e3d]/80">
                    <th className="p-3 text-left font-bold text-xs text-slate-400 uppercase tracking-wider">STT</th>
                    <th className="p-3 text-left font-bold text-xs text-slate-400 uppercase tracking-wider">Tên học phần</th>
                    <th className="p-3 text-center font-bold text-xs text-slate-400 uppercase tracking-wider">Tín chỉ</th>
                    <th className="p-3 text-center font-bold text-xs text-slate-400 uppercase tracking-wider">QT</th>
                    <th className="p-3 text-center font-bold text-xs text-slate-400 uppercase tracking-wider">Thi</th>
                    <th className="p-3 text-center font-bold text-xs text-slate-400 uppercase tracking-wider">Tổng</th>
                    <th className="p-3 text-center font-bold text-xs text-slate-400 uppercase tracking-wider">Điểm chữ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0d1e3d]/40">
                  {subjects.map((s) => (
                    <tr key={s.stt} className="hover:bg-[#071A3B]/20 transition-colors">
                      <td className="p-3 font-semibold text-slate-500">{s.stt}</td>
                      <td className="p-3 font-semibold text-white">{s.name}</td>
                      <td className="p-3 text-center font-semibold">{s.credits}</td>
                      <td className="p-3 text-center font-semibold">{s.qt.toFixed(1)}</td>
                      <td className="p-3 text-center font-semibold">{s.thi.toFixed(1)}</td>
                      <td className="p-3 text-center font-bold text-blue-400">{s.tong.toFixed(1)}</td>
                      <td className="p-3 text-center font-extrabold text-emerald-400">{s.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-1.5 mt-5">
              
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="flex h-8 w-8 items-center justify-center rounded bg-[#071A3B]/60 border border-[#0d1e3d] text-slate-400 hover:text-white transition-colors outline-none"
              >
                <ChevronLeft size={16} />
              </button>

              {[1, 2, 3, "...", 6].map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => typeof p === "number" && setCurrentPage(p)}
                  className={`h-8 w-8 rounded text-xs font-bold transition-all outline-none ${
                    p === currentPage
                      ? "bg-[#0c4ec3] text-white shadow-md"
                      : "bg-[#071A3B]/30 border border-[#0d1e3d]/50 text-slate-400 hover:text-white"
                  }`}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, 6))}
                className="flex h-8 w-8 items-center justify-center rounded bg-[#071A3B]/60 border border-[#0d1e3d] text-slate-400 hover:text-white transition-colors outline-none"
              >
                <ChevronRight size={16} />
              </button>

            </div>

          </div>

        </div>

        {/* Right Column - Stats, Donut Chart, Progress bar */}
        <div className="w-[320px] flex flex-col gap-6 shrink-0">
          
          {/* Detailed Statistics Widget */}
          <div className="bg-[#071A3B]/30 border border-[#0d1e3d]/80 rounded-2xl p-5 shadow-2xl">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wide mb-4">Thống kê chi tiết</h3>
            
            <div className="space-y-4 text-xs font-semibold text-slate-300">
              {detailsStats.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-0.5">
                  <span className="text-slate-400">{item.label}</span>
                  <span className="text-white font-bold text-right max-w-[150px] truncate">{item.value}</span>
                </div>
              ))}
            </div>

          </div>

          {/* SVG Donut Chart for Academic Classification */}
          <div className="bg-[#071A3B]/30 border border-[#0d1e3d]/80 rounded-2xl p-5 shadow-2xl">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wide mb-5">Phân loại học thuật</h3>
            
            <div className="flex flex-col items-center gap-5">
              
              {/* Donut graphic */}
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="transparent"
                    stroke="#0b1a3d"
                    strokeWidth="8"
                  />
                  {/* Red: Yếu (5%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="transparent"
                    stroke="#ef4444"
                    strokeWidth="8"
                    strokeDasharray="11.94 238.76"
                    strokeDashoffset="-226.82"
                    strokeLinecap="round"
                  />
                  {/* Yellow: Trung bình (15%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="transparent"
                    stroke="#eab308"
                    strokeWidth="8"
                    strokeDasharray="35.81 238.76"
                    strokeDashoffset="-191.01"
                    strokeLinecap="round"
                  />
                  {/* Blue: Khá (30%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="transparent"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    strokeDasharray="71.63 238.76"
                    strokeDashoffset="-119.38"
                    strokeLinecap="round"
                  />
                  {/* Green: Giỏi (50%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="transparent"
                    stroke="#10b981"
                    strokeWidth="8"
                    strokeDasharray="119.38 238.76"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Inner Text info */}
                <div className="text-center z-10">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">GPA</div>
                  <div className="text-2xl font-black text-white leading-none mt-0.5">3.45</div>
                  <div className="text-[11px] font-extrabold text-emerald-400 mt-1">Giỏi</div>
                </div>
              </div>

              {/* Legends with percentage */}
              <div className="w-full space-y-2 mt-2 text-xs">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-slate-400">Giỏi (3.2 - 4.0)</span>
                  </div>
                  <span className="font-bold text-white">50%</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
                    <span className="text-slate-400">Khá (2.5 - 3.19)</span>
                  </div>
                  <span className="font-bold text-white">30%</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-yellow-500" />
                    <span className="text-slate-400">Trung bình (2.0 - 2.49)</span>
                  </div>
                  <span className="font-bold text-white">15%</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="text-slate-400">Yếu (&lt; 2.0)</span>
                  </div>
                  <span className="font-bold text-white">5%</span>
                </div>

              </div>

            </div>

          </div>

          {/* Completion Progress widget */}
          <div className="bg-[#071A3B]/30 border border-[#0d1e3d]/80 rounded-2xl p-5 shadow-2xl">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wide mb-4">Tiến độ hoàn thành</h3>
            
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                <BookOpen size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs text-slate-400 font-bold">Đã hoàn thành</div>
                <div className="text-[13px] font-extrabold text-white mt-0.5">82 / 102 tín chỉ</div>
              </div>
            </div>

            {/* Progress bar container */}
            <div className="mt-4">
              <div className="h-2.5 w-full bg-[#0b1a3d] rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.4)]" style={{ width: "80%" }}></div>
              </div>
              <div className="text-right text-[10px] font-bold text-blue-400 mt-2">80%</div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
