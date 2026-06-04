import {
  BarChart3,
  Bell,
  BookOpen,
  Bot,
  Calendar,
  ChevronDown,
  Clock,
  CreditCard,
  FileText,
  GraduationCap,
  Lightbulb,
  NotebookPen,
  Search,
  ShieldCheck,
  Wallet,
} from 'lucide-react';

import { ScreenType } from '../../types';

interface StudentDashboardViewProps {
  onNavigate?: (screen: ScreenType) => void;
}

export default function StudentDashboardView({
  onNavigate,
}: StudentDashboardViewProps) {
  const robotImage = new URL(
    '../../assets/images/ai-robot.png',
    import.meta.url
  ).href;

  return (
    <div className="relative min-h-screen flex-1 overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(0,140,255,.18),transparent_34%),radial-gradient(circle_at_92%_12%,rgba(0,212,255,.12),transparent_26%)]" />

      <main className="relative mx-auto w-full max-w-[1600px] px-5 py-7 lg:px-8">
        <header className="mb-7 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              Xin chào, Thùy Linh! <span aria-hidden="true">👋</span>
            </h1>
            <p className="mt-3 text-base text-slate-300">
              Chúc bạn một ngày học tập hiệu quả và đầy năng lượng!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <label className="relative block w-full min-w-[280px] max-w-md sm:w-[430px]">
              <Search
                size={22}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-200"
              />
              <input
                type="search"
                placeholder="Tìm kiếm..."
                className="h-14 w-full rounded-2xl border border-cyan-500/30 bg-[#041534]/75 pl-6 pr-14 text-white outline-none placeholder:text-slate-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/20"
              />
            </label>

            <button
              type="button"
              className="relative flex h-12 w-12 items-center justify-center rounded-full text-white hover:bg-white/10"
              aria-label="Thông báo"
            >
              <Bell size={24} />
              <span className="absolute right-1 top-0 flex h-6 min-w-6 items-center justify-center rounded-full bg-rose-500 px-1 text-xs font-bold">
                3
              </span>
            </button>

            <button
              type="button"
              className="flex items-center gap-3 rounded-2xl px-2 py-1 hover:bg-white/10"
            >
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Thùy Linh"
                className="h-12 w-12 rounded-full border border-cyan-300/40 object-cover"
              />
              <span className="font-semibold">Thùy Linh</span>
              <ChevronDown size={18} />
            </button>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            icon={<GraduationCap size={36} />}
            title="GPA HIỆN TẠI"
            value="3.45"
            suffix="/ 4.0"
            accent="cyan"
            sparkline
          />
          <StatCard
            icon={<BookOpen size={36} />}
            title="TỔNG TÍN CHỈ"
            value="102"
            subtitle="tín chỉ lũy kế"
            accent="violet"
          />
          <StatCard
            icon={<Calendar size={36} />}
            title="LỊCH HỌC HÔM NAY"
            value="2"
            subtitle="môn học"
            accent="cyan"
          />
          <StatCard
            icon={<Wallet size={36} />}
            title="HỌC PHÍ NỢ"
            value="2.000.000đ"
            subtitle="Hạn cuối: 15/06/2026"
            accent="rose"
          />
        </section>

        <section className="mt-5 grid gap-5 xl:grid-cols-[1fr_1.12fr]">
          <Panel>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="flex items-center gap-3 text-xl font-bold">
                <Calendar size={24} />
                Lịch học hôm nay
              </h2>
              <button
                type="button"
                onClick={() => onNavigate?.('SCHEDULE')}
                className="text-sm font-semibold text-cyan-300 hover:text-white"
              >
                Xem toàn bộ
              </button>
            </div>

            <div className="space-y-4">
              <ScheduleItem
                start="08:00"
                end="10:00"
                subject="Lập trình Web"
                room="A305 - Phòng máy 2"
                tag="LAB"
                tagClass="bg-blue-500/25 text-cyan-200"
              />
              <ScheduleItem
                start="13:00"
                end="15:00"
                subject="Trí tuệ nhân tạo"
                room="B202 - Phòng học 3"
                tag="Lý thuyết"
                tagClass="bg-violet-500/35 text-violet-100"
              />
            </div>
          </Panel>

          <Panel className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_52%,rgba(0,212,255,.2),transparent_30%)]" />
            <div className="relative z-10 mb-5 flex items-center justify-between">
              <h2 className="flex items-center gap-3 text-xl font-bold">
                <Bot size={24} className="text-cyan-300" />
                AI Trợ lý
              </h2>
              <button
                type="button"
                onClick={() => onNavigate?.('CHAT')}
                className="text-sm font-semibold text-cyan-300 hover:text-white"
              >
                Trò chuyện ngay
              </button>
            </div>

            <div className="relative z-10 grid min-h-[220px] gap-5 md:grid-cols-[1fr_260px] md:items-center">
              <div className="rounded-2xl border border-cyan-500/30 bg-blue-950/70 p-5 text-base leading-8 shadow-[0_0_24px_rgba(0,140,255,.18)]">
                <p>Xin chào! Tôi là Academia AI.</p>
                <p>Tôi có thể giúp gì cho bạn hôm nay?</p>
              </div>

              <img
                src={robotImage}
                alt="Academia AI robot"
                className="mx-auto w-52 max-w-full drop-shadow-[0_0_35px_rgba(0,212,255,.65)]"
              />
            </div>

            <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <QuickAction icon={<FileText size={18} />} label="Tóm tắt tài liệu" />
              <QuickAction icon={<ShieldCheck size={18} />} label="Giải bài tập" />
              <QuickAction icon={<Clock size={18} />} label="Lập kế hoạch học tập" />
              <QuickAction icon={<Lightbulb size={18} />} label="Gợi ý tài liệu" />
            </div>
          </Panel>
        </section>

        <section className="mt-5 grid gap-5 xl:grid-cols-[1fr_1.12fr]">
          <Panel>
            <h2 className="mb-6 flex items-center gap-3 text-xl font-bold">
              <BarChart3 size={24} className="text-cyan-300" />
              Tiến độ học tập
            </h2>

            <div className="grid gap-6 md:grid-cols-[180px_1fr] md:items-center">
              <div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-[conic-gradient(#00d4ff_0deg,#008cff_263deg,rgba(0,140,255,.18)_263deg)]">
                <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#061534]">
                  <span className="text-4xl font-black">73%</span>
                  <span className="mt-1 text-sm text-slate-300">Hoàn thành</span>
                </div>
              </div>

              <div className="space-y-4">
                <ProgressRow label="Lập trình Web" value={85} />
                <ProgressRow label="Cơ sở dữ liệu" value={70} />
                <ProgressRow label="Trí tuệ nhân tạo" value={60} />
                <ProgressRow label="Cấu trúc dữ liệu" value={80} />
              </div>
            </div>
          </Panel>

          <Panel>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="flex items-center gap-3 text-xl font-bold">
                <Bell size={24} className="text-amber-300" />
                Thông báo mới
              </h2>
              <button
                type="button"
                onClick={() => onNavigate?.('NOTIFICATION')}
                className="text-sm font-semibold text-cyan-300 hover:text-white"
              >
                Xem tất cả
              </button>
            </div>

            <div className="-mx-6 border-t border-cyan-500/20">
              <NotificationItem
                icon={<Calendar size={22} />}
                color="bg-blue-500"
                title="Thông báo lịch thi học kỳ"
                text="Lịch thi học kỳ 2 năm học 2024-2025 đã được công bố."
                time="2 giờ trước"
              />
              <NotificationItem
                icon={<CreditCard size={22} />}
                color="bg-emerald-500"
                title="Nhắc nhở đóng học phí"
                text="Hạn cuối đóng học phí học kì 2: 15/06/2026"
                time="1 ngày trước"
              />
              <NotificationItem
                icon={<NotebookPen size={22} />}
                color="bg-violet-500"
                title="Cập nhật tài liệu mới"
                text="Giáo trình “Trí tuệ nhân tạo” đã được cập nhật."
                time="2 ngày trước"
              />
            </div>
          </Panel>
        </section>
      </main>
    </div>
  );
}

function Panel({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-cyan-500/25 bg-[#051638]/80 p-6 shadow-[0_0_28px_rgba(0,140,255,.12)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
  suffix,
  subtitle,
  accent,
  sparkline = false,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  suffix?: string;
  subtitle?: string;
  accent: 'cyan' | 'violet' | 'rose';
  sparkline?: boolean;
}) {
  const styles = {
    cyan: 'border-cyan-500/50 text-cyan-300 shadow-cyan-500/10',
    violet: 'border-violet-500/50 text-violet-300 shadow-violet-500/10',
    rose: 'border-rose-500/55 text-rose-400 shadow-rose-500/10',
  };

  return (
    <div
      className={`relative min-h-36 overflow-hidden rounded-2xl border bg-[#06183b]/80 p-6 shadow-2xl ${styles[accent]}`}
    >
      <div className="flex items-start gap-5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-current/10">
          {icon}
        </div>

        <div>
          <p className="text-sm font-bold text-slate-200">{title}</p>
          <div className="mt-3 flex items-end gap-2">
            <span
              className={`text-4xl font-black ${
                accent === 'rose' ? 'text-rose-400' : 'text-white'
              }`}
            >
              {value}
            </span>
            {suffix && (
              <span className="pb-1 text-lg font-medium text-slate-300">
                {suffix}
              </span>
            )}
          </div>
          {subtitle && <p className="mt-2 text-base text-slate-300">{subtitle}</p>}
        </div>
      </div>

      {sparkline && (
        <div className="absolute bottom-4 left-7 right-7 h-8">
          <div className="h-full bg-[linear-gradient(135deg,transparent_0_8%,#00d4ff_8%_10%,transparent_10%_18%,#00d4ff_18%_20%,transparent_20%_30%,#00d4ff_30%_32%,transparent_32%_44%,#00d4ff_44%_46%,transparent_46%_58%,#00d4ff_58%_60%,transparent_60%_76%,#00d4ff_76%_78%,transparent_78%_100%)] opacity-80" />
        </div>
      )}
    </div>
  );
}

function ScheduleItem({
  start,
  end,
  subject,
  room,
  tag,
  tagClass,
}: {
  start: string;
  end: string;
  subject: string;
  room: string;
  tag: string;
  tagClass: string;
}) {
  return (
    <div className="flex items-center gap-6 rounded-2xl border border-cyan-500/20 bg-[#061534]/75 p-5">
      <div className="w-20 shrink-0">
        <p className="text-3xl font-black">{start}</p>
        <p className="mt-2 text-base text-slate-300">{end}</p>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-lg font-bold">{subject}</h3>
        <p className="mt-2 text-base text-slate-300">{room}</p>
      </div>

      <span className={`rounded-xl px-4 py-2 text-sm font-bold ${tagClass}`}>
        {tag}
      </span>
    </div>
  );
}

function QuickAction({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      className="flex h-12 items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-[#061534]/75 px-3 text-sm font-semibold text-white transition-all hover:border-cyan-300 hover:bg-cyan-500/10"
    >
      <span className="text-cyan-300">{icon}</span>
      {label}
    </button>
  );
}

function ProgressRow({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm text-slate-300">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-cyan-500/15">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function NotificationItem({
  icon,
  color,
  title,
  text,
  time,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
  text: string;
  time: string;
}) {
  return (
    <div className="grid grid-cols-[16px_56px_1fr_auto] items-center gap-4 border-b border-cyan-500/15 px-6 py-4 last:border-b-0">
      <span className="h-3 w-3 rounded-full bg-cyan-400" />
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full ${color} text-white shadow-[0_0_22px_rgba(0,140,255,.3)]`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="truncate font-bold">{title}</h3>
        <p className="mt-1 truncate text-sm text-slate-300">{text}</p>
      </div>
      <span className="whitespace-nowrap text-sm text-slate-400">{time}</span>
    </div>
  );
}
