/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Users, FileText, HelpCircle, MessageSquare, TrendingUp, Sparkles, Upload, MessageCircle, UserPlus, ArrowRight } from 'lucide-react';
import { RecentActivity } from '../../types';

export default function AnalyticsView() {
  const [animateBars, setAnimateBars] = useState(false);
  const [activities, setActivities] = useState<RecentActivity[]>([
    {
      id: 'act-1',
      user: 'Minh Tuấn',
      action: 'vừa tải lên 12 tài liệu Kinh Tế Chính Trị.',
      time: '2 phút trước',
      type: 'upload'
    },
    {
      id: 'act-2',
      user: 'Hương Giang',
      action: 'đang có cuộc hội thoại dài 45 phút với AI.',
      time: '15 phút trước',
      type: 'chat'
    },
    {
      id: 'act-3',
      user: 'Hoàng Long',
      action: 'vừa đăng ký tài khoản mới.',
      time: '1 giờ trước',
      type: 'register'
    }
  ]);

  useEffect(() => {
    // Trigger chart bar vertical growing animation with small timeout
    setAnimateBars(true);

    // Periodically feed a simulated live activity event for interactive richness!
    const interval = setInterval(() => {
      const names = ['Thúy Linh', 'Quốc Bảo', 'Khánh Huyền', 'Trần Nam', 'Phương Thảo'];
      const actions = [
        'vừa giải xong bài tập đại số tuyến tính cùng AI.',
        'đã tóm tắt tài liệu chương 4 môn Mạng máy tính.',
        'vừa tạo câu hỏi đề thi thử môn Hệ điều hành.',
        'đang tham khảo lịch ôn thi môn Triết học.',
        'đã cập nhật hồ sơ đăng ký thi thử TOEIC.'
      ];
      const types = ['chat', 'upload', 'chat', 'chat', 'register'] as const;
      
      const randomIndex = Math.floor(Math.random() * names.length);
      const newAct: RecentActivity = {
        id: 'act-' + Math.random().toString(),
        user: names[randomIndex],
        action: actions[randomIndex],
        time: 'Vừa xong',
        type: types[Math.floor(Math.random() * types.length)]
      };

      setActivities(prev => [newAct, ...prev.slice(0, 4)]);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const barData = [
    { label: 'T2', height: '60%' },
    { label: 'T3', height: '80%' },
    { label: 'T4', height: '45%' },
    { label: 'T5', height: '100%' },
    { label: 'T6', height: '70%' },
    { label: 'T7', height: '30%' },
    { label: 'CN', height: '40%' }
  ];

  return (
    <div className="w-full flex-grow p-6 space-y-6 max-w-4xl mx-auto pb-28">
      {/* Welcome metadata summary block */}
      <section className="space-y-1">
        <h2 className="font-sans font-black text-2.5xl text-[#0b1c30]">Dashboard Analytics</h2>
        <p className="text-xs text-[#737686] font-medium">Chào mừng trở lại, Alex. Đây là tổng quan hoạt động hệ thống hôm nay.</p>
      </section>

      {/* Stats Bento Grid block */}
      <section className="grid grid-cols-2 gap-4">
        {/* Total Users */}
        <div className="bg-white border border-[#c3c6d7]/35 p-4 rounded-xl flex flex-col justify-between shadow-sm">
          <div className="flex items-center gap-1.5 text-[#004ac6] font-bold">
            <Users className="w-4.5 h-4.5" />
            <span className="text-[10px] font-sans tracking-wide uppercase">Người dùng</span>
          </div>
          <div className="mt-3">
            <span className="block text-xl font-sans font-extrabold text-[#0b1c30]">12.4k</span>
            <span className="text-green-600 text-[10px] font-bold block mt-0.5">+12%</span>
          </div>
        </div>

        {/* Total Documents */}
        <div className="bg-white border border-[#c3c6d7]/35 p-4 rounded-xl flex flex-col justify-between shadow-sm">
          <div className="flex items-center gap-1.5 text-indigo-600 font-bold">
            <FileText className="w-4.5 h-4.5" />
            <span className="text-[10px] font-sans tracking-wide uppercase">Tài liệu</span>
          </div>
          <div className="mt-3">
            <span className="block text-xl font-sans font-extrabold text-[#0b1c30]">3.8k</span>
            <span className="text-green-600 text-[10px] font-bold block mt-0.5">+5.4%</span>
          </div>
        </div>

        {/* Questions Asked */}
        <div className="bg-white border border-[#c3c6d7]/35 p-4 rounded-xl flex flex-col justify-between shadow-sm">
          <div className="flex items-center gap-1.5 text-[#004ac6] font-bold">
            <HelpCircle className="w-4.5 h-4.5" />
            <span className="text-[10px] font-sans tracking-wide uppercase">Câu hỏi</span>
          </div>
          <div className="mt-3">
            <span className="block text-xl font-sans font-extrabold text-[#0b1c30]">45.2k</span>
            <span className="text-blue-500 text-[10px] font-bold block mt-0.5">Tháng này</span>
          </div>
        </div>

        {/* Simulated Live sessions count */}
        <div className="bg-white border border-[#c3c6d7]/35 p-4 rounded-xl flex flex-col justify-between shadow-sm">
          <div className="flex items-center gap-1.5 text-indigo-600 font-bold">
            <MessageSquare className="w-4.5 h-4.5" />
            <span className="text-[10px] font-sans tracking-wide uppercase">Hội thoại</span>
          </div>
          <div className="mt-3">
            <span className="block text-xl font-sans font-extrabold text-[#0b1c30]">8.1k</span>
            <span className="text-green-600 text-[10px] font-bold block mt-0.5">Đang hoạt động</span>
          </div>
        </div>
      </section>

      {/* Usage Bar Chart block */}
      <section className="bg-white border border-[#c3c6d7]/30 p-5 rounded-2xl shadow-sm">
        <div className="flex justify-between items-end mb-6">
          <div className="space-y-0.5">
            <h3 className="font-sans font-bold text-[#0b1c30] text-sm">Lượng hỏi theo ngày</h3>
            <p className="text-[10px] font-bold text-[#737686] uppercase tracking-wider">7 ngày học tập gần đây</p>
          </div>
          <span className="text-xl font-sans font-black text-[#004ac6]">642 câu hỏi</span>
        </div>

        {/* Core Vertical Bar Charts columns */}
        <div className="flex items-end justify-between h-40 gap-3 px-2">
          {barData.map((bar, index) => (
            <div key={index} className="flex flex-col items-center flex-1 group cursor-pointer">
              <div className="w-full bg-[#eff4ff] rounded-t-lg relative h-32 overflow-hidden">
                <div 
                  className="absolute bottom-0 left-0 w-full bg-[#004ac6] hover:bg-[#2563eb] rounded-t-lg transition-all"
                  style={{ 
                    height: animateBars ? bar.height : '0%',
                    transitionDuration: '0.9s',
                    transitionDelay: `${index * 80}ms`
                  }}
                />
              </div>
              <span className="mt-2 text-[10px] text-[#737686] font-bold uppercase tracking-wider">{bar.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Queries list block */}
      <section className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-sans font-bold text-[#0b1c30] text-base">Top 10 Câu hỏi phổ biến</h3>
          <button className="text-[#004ac6] hover:text-[#2563eb] text-xs font-bold hover:underline cursor-pointer">Xem tất cả</button>
        </div>

        <div className="bg-white border border-[#c3c6d7]/40 rounded-2xl shadow-sm divide-y divide-[#c3c6d7]/15 overflow-hidden">
          {/* Question 1 */}
          <div className="p-4 flex items-center gap-4 hover:bg-neutral-50/50 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center font-bold text-sm text-[#004ac6] shrink-0">1</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm text-[#0b1c30] font-bold truncate">Giải phương trình vi phân bậc hai có hệ số hằng số?</p>
              <p className="text-[10px] text-[#737686] font-bold mt-0.5">Toán Cao Cấp • 1.2k lượt hỏi</p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="p-4 flex items-center gap-4 hover:bg-neutral-50/50 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center font-bold text-sm text-[#004ac6] shrink-0">2</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm text-[#0b1c30] font-bold truncate">Cơ chế truyền tin của xung thần kinh qua synapse hóa học?</p>
              <p className="text-[10px] text-[#737686] font-bold mt-0.5">Sinh học Đại cương • 942 lượt hỏi</p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="p-4 flex items-center gap-4 hover:bg-neutral-50/50 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center font-bold text-sm text-[#004ac6] shrink-0">3</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm text-[#0b1c30] font-bold truncate">So sánh hiệu năng thuật toán QuickSort và MergeSort thực tế?</p>
              <p className="text-[10px] text-[#737686] font-bold mt-0.5">Cấu trúc dữ liệu • 856 lượt hỏi</p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="p-4 flex items-center gap-4 hover:bg-neutral-50/50 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center font-bold text-sm text-[#004ac6] shrink-0">4</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm text-[#0b1c30] font-bold truncate">Phân tích nghệ thuật và hình tượng trong tác phẩm Vợ Nhặt của Kim Lân?</p>
              <p className="text-[10px] text-[#737686] font-bold mt-0.5">Ngữ Văn • 721 lượt hỏi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engage activities logs timeline element */}
      <section className="space-y-4">
        <h3 className="font-sans font-bold text-[#0b1c30] text-base">Hoạt động gần đây</h3>
        
        <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-[#c3c6d7]/35">
          {activities.map((act) => (
            <div key={act.id} className="relative animate-fade-in-down">
              {/* Timeline bubble icon depending on code events logic */}
              <div className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#f8f9ff] shrink-0 ${
                act.type === 'upload' ? 'bg-[#004ac6] text-white' : act.type === 'chat' ? 'bg-indigo-600 text-white' : 'bg-[#e5eeff] text-[#004ac6]'
              }`}>
                {act.type === 'upload' ? (
                  <Upload className="w-2.5 h-2.5" />
                ) : act.type === 'chat' ? (
                  <MessageCircle className="w-2.5 h-2.5" />
                ) : (
                  <UserPlus className="w-2.5 h-2.5" />
                )}
              </div>
              
              <div className="pl-3.5 space-y-1">
                <p className="text-xs md:text-sm text-[#434655] leading-relaxed">
                  <span className="font-extrabold text-[#004ac6]">{act.user}</span>{' '}
                  <span className="font-medium text-[#0b1c30]">{act.action}</span>
                </p>
                <p className="text-[10px] font-bold text-[#737686] uppercase tracking-wide">{act.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
