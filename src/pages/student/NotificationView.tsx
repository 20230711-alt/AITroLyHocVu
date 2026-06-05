import {
  Bell,
  Bookmark,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Mail,
  Search,
  SlidersHorizontal,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import AILayout from '../../components/AILayout';

interface NotificationViewProps {
  onBack?: () => void;
}

type Tone = 'blue' | 'amber' | 'red' | 'green';

const stats: Array<{
  title: string;
  value: string;
  note: string;
  icon: LucideIcon;
  tone: Tone;
}> = [
  {
    title: 'Tổng thông báo',
    value: '12',
    note: 'Thông báo mới',
    icon: Bell,
    tone: 'blue',
  },
  {
    title: 'Chưa đọc',
    value: '7',
    note: 'Cần xem ngay',
    icon: Mail,
    tone: 'amber',
  },
  {
    title: 'Quan trọng',
    value: '3',
    note: 'Cần xử lý',
    icon: Sparkles,
    tone: 'red',
  },
  {
    title: 'Đã đọc',
    value: '5',
    note: 'Đã xem',
    icon: CheckCircle2,
    tone: 'green',
  },
];

const importantSummary = [
  { label: 'Còn nợ 2.000.000 VNĐ học phí', color: 'bg-rose-500' },
  { label: 'Hạn đóng học phí còn 5 ngày', color: 'bg-blue-500' },
  { label: 'Đăng ký học phần bắt đầu từ tuần sau', color: 'bg-violet-400' },
  { label: 'Có 2 lịch thi mới', color: 'bg-blue-500' },
];

const todoItems = [
  {
    title: 'Đóng học phí trước ngày 30/06',
    desc: 'Hạn đóng học phí học kỳ 2 năm học 2025-2026 là ngày 30/06/2026.',
    tag: 'Quan trọng',
    time: '1 giờ trước',
    color: 'bg-amber-400',
    tagClass: 'text-rose-400',
  },
  {
    title: 'Đăng ký môn học mới',
    desc: 'Đăng ký môn học mở sẽ kết thúc vào ngày 15/06/2026.',
    tag: 'Cần xử lý',
    time: '3 giờ trước',
    color: 'bg-cyan-400',
    tagClass: 'text-amber-300',
  },
  {
    title: 'Xem lịch thi học kỳ',
    desc: 'Lịch thi học kỳ 2 năm học 2025-2026 đã được cập nhật.',
    tag: 'Thông tin',
    time: '5 giờ trước',
    color: 'bg-emerald-400',
    tagClass: 'text-blue-400',
  },
];

const notifications = [
  {
    title: 'Khoa CNTT - Lịch thi học phần',
    desc: 'Kế hoạch tổ chức thi kết thúc học phần học kỳ 2 năm học 2025-2026.',
    time: '1 giờ trước',
    status: 'Chưa đọc',
    icon: Bookmark,
    color: 'bg-blue-600',
  },
  {
    title: 'Xét học bổng học kỳ',
    desc: 'Cập nhật danh sách sinh viên đủ điều kiện xét học bổng học kỳ này.',
    time: 'Hôm qua',
    status: 'Đã đọc',
    icon: CheckCircle2,
    color: 'bg-emerald-600',
  },
  {
    title: 'Nghỉ lễ theo quy định',
    desc: 'Thông báo kế hoạch nghỉ lễ và lịch học bù cho sinh viên toàn trường.',
    time: '2 ngày trước',
    status: 'Đã đọc',
    icon: Bell,
    color: 'bg-violet-600',
  },
];

export default function NotificationView(_props: NotificationViewProps) {
  return (
    <AILayout>
      <div className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(37,99,235,.22),transparent_28%),radial-gradient(circle_at_45%_0%,rgba(14,165,233,.12),transparent_34%)]" />

        <main className="relative mx-auto w-full max-w-[1600px] px-5 py-7 lg:px-8">
          <header className="mb-7 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-white">
                Thông báo
              </h1>
              <p className="mt-3 text-base text-slate-300">
                Cập nhật thông tin mới nhất từ hệ thống.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <label className="relative block w-full min-w-[260px] max-w-md sm:w-[430px]">
                <Search
                  size={22}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-200"
                />
                <input
                  type="search"
                  placeholder="Tìm kiếm thông báo..."
                  className="h-14 w-full rounded-full border border-slate-600/50 bg-[#041534]/75 pl-6 pr-14 text-white outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </label>

              <button
                type="button"
                className="relative flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                aria-label="Thông báo"
              >
                <Bell size={24} />
                <span className="absolute right-1 top-0 flex h-6 min-w-6 items-center justify-center rounded-full bg-rose-500 px-1 text-xs font-bold">
                  12
                </span>
              </button>

              <button
                type="button"
                className="flex items-center gap-3 rounded-2xl px-2 py-1 transition hover:bg-white/10"
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
            {stats.map((item) => (
              <StatCard key={item.title} {...item} />
            ))}
          </section>

          <section className="mt-5 grid min-h-[220px] gap-6 rounded-2xl border border-slate-700/70 bg-[#06183b]/80 p-6 shadow-[0_0_30px_rgba(37,99,235,.12)] backdrop-blur xl:grid-cols-[1fr_320px] xl:items-center">
            <div>
              <h2 className="mb-5 flex items-center gap-3 text-xl font-bold">
                <Bookmark size={24} className="text-blue-400" />
                Tóm tắt các thông báo quan trọng
              </h2>

              <div className="space-y-4">
                {importantSummary.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className={`h-3 w-3 rounded-full ${item.color}`} />
                    <span className="text-base text-slate-100">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative flex h-28 w-40 items-center justify-center">
                <div className="absolute h-24 w-24 rounded-full bg-blue-500/25 blur-2xl" />
                <Bell
                  size={82}
                  className="relative z-10 fill-blue-500/40 text-blue-300 drop-shadow-[0_0_22px_rgba(96,165,250,.55)]"
                />
                <span className="absolute right-8 top-7 flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-sm font-black shadow-lg">
                  ...
                </span>
              </div>
              <button
                type="button"
                className="h-12 w-full rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-[0_12px_30px_rgba(37,99,235,.3)] transition hover:bg-blue-500"
              >
                Xem phân tích chi tiết
              </button>
            </div>
          </section>

          <section className="mt-5 grid gap-4 xl:grid-cols-[1fr_1fr]">
            <SearchBox />
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-700/70 bg-[#06183b]/80 p-2">
              <div className="flex flex-wrap gap-2">
                <FilterButton active>Tất cả</FilterButton>
                <FilterButton>Chưa đọc</FilterButton>
                <FilterButton>Quan trọng</FilterButton>
              </div>
              <button
                type="button"
                className="flex h-10 items-center gap-3 rounded-xl border border-slate-700/80 bg-[#071534] px-4 text-sm text-white transition hover:border-blue-400/70"
              >
                Mới nhất
                <SlidersHorizontal size={16} />
              </button>
            </div>
          </section>

          <section className="mt-3">
            <SectionTitle color="bg-rose-500">Thông báo khẩn cấp</SectionTitle>
            <article className="grid min-h-[86px] grid-cols-[auto_1fr_auto_auto] items-center gap-4 rounded-2xl border border-slate-700/70 border-l-4 border-l-rose-500 bg-[#06183b]/80 px-5 py-4 shadow-[0_0_26px_rgba(244,63,94,.08)]">
              <span className="rounded-full bg-rose-500 px-3 py-1 text-xs font-black uppercase text-white">
                Khẩn cấp
              </span>
              <div className="min-w-0">
                <h3 className="truncate font-bold">
                  Mở đăng ký học phần học kỳ 1 năm học 2026-2027
                </h3>
                <p className="mt-2 truncate text-sm text-slate-300">
                  Hệ thống vừa mở đăng ký học phần cho học kỳ 1 năm học
                  2026-2027. Sinh viên vui lòng đăng ký trước thời hạn.
                </p>
              </div>
              <span className="hidden whitespace-nowrap text-sm text-slate-400 sm:block">
                2 giờ trước
              </span>
              <ChevronRight className="text-slate-200" size={24} />
            </article>
          </section>

          <section className="mt-4">
            <SectionTitle color="bg-amber-400">Việc cần làm hôm nay</SectionTitle>
            <div className="overflow-hidden rounded-2xl border border-slate-700/70 border-l-4 border-l-amber-400 bg-[#06183b]/80">
              {todoItems.map((item) => (
                <TodoRow key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section className="mt-4 pb-8">
            <SectionTitle color="bg-blue-500">Tất cả thông báo</SectionTitle>
            <div className="space-y-3">
              {notifications.map((item) => (
                <NotificationRow key={item.title} {...item} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </AILayout>
  );
}

function StatCard({
  title,
  value,
  note,
  icon: Icon,
  tone,
}: {
  title: string;
  value: string;
  note: string;
  icon: LucideIcon;
  tone: Tone;
}) {
  const styles = {
    blue: {
      shell: 'border-blue-500/45 bg-blue-950/35',
      icon: 'bg-blue-600/55 text-blue-100 shadow-blue-500/25',
      note: 'text-blue-400',
    },
    amber: {
      shell: 'border-amber-500/25 bg-amber-950/10',
      icon: 'bg-amber-500/75 text-white shadow-amber-500/25',
      note: 'text-amber-300',
    },
    red: {
      shell: 'border-rose-500/25 bg-rose-950/10',
      icon: 'bg-rose-600/65 text-rose-50 shadow-rose-500/25',
      note: 'text-rose-400',
    },
    green: {
      shell: 'border-emerald-500/25 bg-emerald-950/10',
      icon: 'bg-emerald-600/55 text-emerald-50 shadow-emerald-500/25',
      note: 'text-emerald-400',
    },
  }[tone];

  return (
    <article
      className={`flex min-h-[122px] items-center gap-5 rounded-2xl border p-5 shadow-[0_0_28px_rgba(37,99,235,.08)] ${styles.shell}`}
    >
      <div
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-2xl ${styles.icon}`}
      >
        <Icon size={32} />
      </div>
      <div>
        <p className="text-sm text-slate-300">{title}</p>
        <p className="mt-1 text-3xl font-black leading-none text-white">
          {value}
        </p>
        <p className={`mt-2 text-sm font-bold ${styles.note}`}>{note}</p>
      </div>
    </article>
  );
}

function SearchBox() {
  return (
    <label className="relative block">
      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
      />
      <input
        type="search"
        placeholder="Tìm kiếm thông báo..."
        className="h-12 w-full rounded-2xl border border-slate-700/70 bg-[#06183b]/80 pl-12 pr-5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
      />
    </label>
  );
}

function FilterButton({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`h-10 rounded-full px-7 text-sm font-semibold transition ${
        active
          ? 'bg-blue-600 text-white shadow-[0_10px_24px_rgba(37,99,235,.35)]'
          : 'bg-slate-700/50 text-white hover:bg-slate-600/60'
      }`}
    >
      {children}
    </button>
  );
}

function SectionTitle({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <h2 className="mb-2 flex items-center gap-3 text-xl font-black">
      <span className={`h-7 w-1 rounded-full ${color}`} />
      {children}
    </h2>
  );
}

function TodoRow({
  title,
  desc,
  tag,
  time,
  color,
  tagClass,
}: {
  title: string;
  desc: string;
  tag: string;
  time: string;
  color: string;
  tagClass: string;
}) {
  return (
    <article className="grid min-h-[78px] grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-slate-700/70 px-6 py-4 last:border-b-0">
      <div className="min-w-0">
        <h3 className="flex items-center gap-4 truncate font-bold">
          <span className={`h-3 w-3 shrink-0 rounded-full ${color}`} />
          <span className="truncate">{title}</span>
        </h3>
        <p className="mt-2 truncate pl-7 text-sm text-slate-300">{desc}</p>
      </div>
      <span className={`hidden whitespace-nowrap text-sm font-bold md:block ${tagClass}`}>
        {tag}
      </span>
      <div className="flex items-center gap-5">
        <span className="hidden whitespace-nowrap text-sm text-slate-400 sm:block">
          {time}
        </span>
        <ChevronRight className="text-slate-200" size={23} />
      </div>
    </article>
  );
}

function NotificationRow({
  title,
  desc,
  time,
  status,
  icon: Icon,
  color,
}: {
  title: string;
  desc: string;
  time: string;
  status: string;
  icon: LucideIcon;
  color: string;
}) {
  return (
    <article className="grid min-h-[78px] grid-cols-[48px_1fr_auto_auto] items-center gap-4 rounded-2xl border border-slate-700/70 bg-[#06183b]/80 px-5 py-4">
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${color}`}>
        <Icon size={22} />
      </div>
      <div className="min-w-0">
        <h3 className="truncate font-bold">{title}</h3>
        <p className="mt-1 truncate text-sm text-slate-300">{desc}</p>
      </div>
      <div className="hidden items-center gap-4 text-sm sm:flex">
        <span className="whitespace-nowrap text-slate-400">{time}</span>
        <span
          className={`whitespace-nowrap font-semibold ${
            status === 'Chưa đọc' ? 'text-blue-400' : 'text-slate-400'
          }`}
        >
          {status}
        </span>
      </div>
      <ChevronRight className="text-slate-200" size={23} />
    </article>
  );
}
