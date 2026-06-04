import {
  BarChart3,
  Bell,
  Bot,
  Calendar,
  CircleHelp,
  CreditCard,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  type LucideIcon,
} from 'lucide-react';

import { ScreenType, UserSession } from '../types';

interface SidebarProps {
  currentScreen: ScreenType;
  setScreen: (screen: ScreenType) => void;
  user: UserSession | null;
  onLogout: () => void;
}

type MenuItem =
  | {
      title: string;
      icon: LucideIcon;
      screen: ScreenType;
      badge?: string;
    }
  | {
      section: string;
    };

const menu: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    screen: 'STUDENT_DASHBOARD',
  },
  {
    section: 'AI SERVICES',
  },
  {
    title: 'Trợ lý AI',
    icon: Bot,
    screen: 'CHAT',
  },
  {
    title: 'FAQ',
    icon: CircleHelp,
    screen: 'FAQ',
  },
  {
    title: 'Tài liệu',
    icon: FileText,
    screen: 'DOCUMENTS',
  },
  {
    section: 'HỌC TẬP',
  },
  {
    title: 'Lịch học',
    icon: Calendar,
    screen: 'SCHEDULE',
  },
  {
    title: 'Điểm số',
    icon: BarChart3,
    screen: 'GRADES',
  },
  {
    title: 'Học phí',
    icon: CreditCard,
    screen: 'TUITION',
  },
  {
    section: 'TÀI KHOẢN',
  },
  {
    title: 'Thông báo',
    icon: Bell,
    screen: 'NOTIFICATION',
    badge: '3',
  },
  {
    title: 'Hồ sơ',
    icon: User,
    screen: 'PROFILE',
  },
  {
    title: 'Cài đặt',
    icon: Settings,
    screen: 'SETTINGS',
  },
];

export default function Sidebar({
  currentScreen,
  setScreen,
  user,
  onLogout,
}: SidebarProps) {
  const logoImage = new URL('../assets/images/logo.png', import.meta.url).href;

  return (
    <aside className="sticky top-0 hidden h-screen w-[292px] shrink-0 border-r border-cyan-500/35 bg-[#020b2d]/95 px-5 py-7 shadow-[0_0_35px_rgba(0,212,255,.18)] backdrop-blur-xl lg:flex lg:flex-col">
      <button
        type="button"
        onClick={() => setScreen('STUDENT_DASHBOARD')}
        className="mb-10 flex items-center gap-3 px-2 text-left"
      >
        <img
          src={logoImage}
          alt="Academia AI"
          className="h-12 w-12 rounded-xl object-cover shadow-[0_0_18px_rgba(0,212,255,.45)]"
        />
        <span className="text-2xl font-black tracking-wide text-white">
          ACADEMIA AI
        </span>
      </button>

      <nav className="flex-1 overflow-y-auto pr-1">
        {menu.map((item, index) => {
          if ('section' in item) {
            return (
              <h3
                key={`${item.section}-${index}`}
                className="mb-3 mt-8 px-2 text-sm font-bold text-cyan-300"
              >
                {item.section}
              </h3>
            );
          }

          const Icon = item.icon;
          const isActive = currentScreen === item.screen;

          return (
            <button
              key={item.screen}
              type="button"
              onClick={() => setScreen(item.screen)}
              className={`mb-2 flex h-16 w-full items-center gap-4 rounded-xl px-4 text-left text-base transition-all ${
                isActive
                  ? 'border border-cyan-400/55 bg-cyan-500/15 text-white shadow-[inset_0_0_26px_rgba(0,140,255,.25),0_0_18px_rgba(0,140,255,.22)]'
                  : 'text-slate-200 hover:bg-cyan-500/10 hover:text-white'
              }`}
            >
              <Icon
                size={24}
                className={isActive ? 'text-cyan-300' : 'text-white'}
              />
              <span className="flex-1">{item.title}</span>
              {item.badge && (
                <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-blue-600 px-2 text-sm font-bold text-white">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={onLogout}
        className="mt-8 flex h-16 w-full items-center gap-4 rounded-xl border border-cyan-500/25 px-5 text-left text-base text-white transition-all hover:border-red-400/50 hover:bg-red-500/10 hover:text-red-200"
      >
        <LogOut size={24} />
        Đăng xuất
      </button>

      {user && (
        <p className="mt-4 truncate px-2 text-xs text-cyan-100/55">
          {user.email}
        </p>
      )}
    </aside>
  );
}
