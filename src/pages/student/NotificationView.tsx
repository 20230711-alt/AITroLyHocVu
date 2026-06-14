import React from 'react';
import {
  Bell,
  Bookmark,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Mail,
  Search,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import AILayout from '../../components/AILayout';
import { UserSession } from '../../types';

interface NotificationViewProps {
  onBack?: () => void;
  user?: UserSession | null;
}

type Tone = 'blue' | 'amber' | 'red' | 'green';

const notifications = [
  {
    title: 'Khoa CNTT - Lịch thi học phần',
    desc: 'Kế hoạch tổ chức thi kết thúc học phần học kỳ 2 năm học 2025-2026.',
    time: '1 giờ trước',
    icon: Bookmark,
    color: 'bg-blue-600',
  },
  {
    title: 'Xét học bổng học kỳ',
    desc: 'Cập nhật danh sách sinh viên đủ điều kiện xét học bổng học kỳ này.',
    time: 'Hôm qua',
    icon: CheckCircle2,
    color: 'bg-emerald-600',
  },
  {
    title: 'Nghỉ lễ theo quy định',
    desc: 'Thông báo kế hoạch nghỉ lễ và lịch học bù cho sinh viên toàn trường.',
    time: '2 ngày trước',
    icon: Bell,
    color: 'bg-violet-600',
  },
];

export default function NotificationView({ user }: NotificationViewProps) {
  const avatar = user?.avatar || '/assets/images/default-avatar.svg';

  return (
    <AILayout>
      <div className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(37,99,235,.22),transparent_28%),radial-gradient(circle_at_45%_0%,rgba(14,165,233,.12),transparent_34%)]" />

        <main className="relative mx-auto w-full max-w-[1600px] px-5 py-7 lg:px-8">
          <header className="mb-7 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-white">Thông báo</h1>
              <p className="mt-3 text-base text-slate-300">Cập nhật thông tin mới nhất từ hệ thống.</p>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <label className="relative block w-full min-w-[260px] max-w-md sm:w-[430px]">
                <Search size={22} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-200" />
                <input
                  type="search"
                  placeholder="Tìm kiếm thông báo..."
                  className="h-14 w-full rounded-full border border-slate-600/50 bg-[#041534]/75 pl-6 pr-14 text-white outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </label>

              <button type="button" className="flex items-center gap-3 rounded-2xl px-2 py-1 transition hover:bg-white/10">
                <img src={avatar} alt="Người dùng" className="h-12 w-12 rounded-full border border-cyan-300/40 object-cover" />
                <span className="font-semibold">Thùy Linh</span>
                <ChevronDown size={18} />
              </button>
            </div>
          </header>

          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 mb-6">
            {/* small stat placeholders */}
            <div className="rounded-2xl border bg-[#06183b]/80 p-5">Tổng thông báo</div>
            <div className="rounded-2xl border bg-[#06183b]/80 p-5">Chưa đọc</div>
            <div className="rounded-2xl border bg-[#06183b]/80 p-5">Quan trọng</div>
            <div className="rounded-2xl border bg-[#06183b]/80 p-5">Đã đọc</div>
          </section>

          <section className="mt-4 pb-8">
            <h2 className="mb-4 text-xl font-black">Tất cả thông báo</h2>
            <div className="space-y-3">
              {notifications.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-700/70 bg-[#06183b]/80 p-4">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.color} text-white`}>{/* icon */}</div>
                    <div className="min-w-0">
                      <h3 className="font-bold truncate">{item.title}</h3>
                      <p className="text-sm text-slate-300 truncate mt-1">{item.desc}</p>
                    </div>
                    <span className="whitespace-nowrap text-sm text-slate-400">{item.time}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </AILayout>
  );
}
