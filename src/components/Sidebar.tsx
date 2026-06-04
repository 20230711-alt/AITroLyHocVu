import {
  BarChart3,
  Bell,
  Bot,
  Calendar,
  CircleHelp,
  CircleDollarSign,
  FileText,
  Home,
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
    icon: Home,
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
    icon: CircleDollarSign,
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
    <aside className="fixed left-0 top-0 bottom-0 w-[280px] z-40 bg-[#020b24] border-r border-[#0d1e3d] flex flex-col px-5 py-6">
      
      {/* Brand/Logo */}
      <button
        type="button"
        onClick={() => setScreen('STUDENT_DASHBOARD')}
        className="mb-8 flex items-center gap-3 px-2 text-left outline-none"
      >
        <img
          src={logoImage}
          alt="Academia AI"
          className="h-10 w-10 rounded-xl object-cover shadow-[0_0_15px_rgba(0,140,255,.3)]"
        />
        <span className="text-xl font-extrabold tracking-wide text-white">
          ACADEMIA AI
        </span>
      </button>

      {/* Navigation List */}
      <nav className="flex-grow overflow-y-auto pr-1">
        {menu.map((item, index) => {
          if ('section' in item) {
            return (
              <h3
                key={`${item.section}-${index}`}
                className="mb-3 mt-6 px-2 text-[11px] font-bold tracking-wider text-cyan-400 uppercase"
              >
                {item.section}
              </h3>
            );
          }

          const Icon = item.icon;
          // Sub-pages highlights mapping to parent menu items
          const isActive = 
            currentScreen === item.screen ||
            (item.screen === 'DOCUMENTS' && ['DOCUMENT_DETAIL', 'DOCUMENT_CHAT'].includes(currentScreen)) ||
            (item.screen === 'PROFILE' && currentScreen === 'SETTINGS');

          return (
            <button
              key={item.screen}
              type="button"
              onClick={() => setScreen(item.screen)}
              className={`mb-2 flex h-11 w-full items-center gap-3.5 rounded-xl px-4 text-left text-[14px] font-medium transition-all outline-none border ${
                isActive
                  ? 'border-blue-500/50 bg-blue-600/10 text-white font-semibold'
                  : 'border-transparent text-slate-300 hover:bg-[#071a3b]/40 hover:text-white'
              }`}
            >
              <Icon
                size={18}
                className={isActive ? 'text-white' : 'text-slate-400'}
              />
              <span className="flex-grow">{item.title}</span>
              {item.badge && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-md bg-blue-700 text-[10px] font-bold text-white px-1.5">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Logout at bottom */}
      <div className="mt-auto border-t border-[#0d1e3d] pt-4">
        <button
          type="button"
          onClick={onLogout}
          className="flex h-11 w-full items-center gap-3.5 rounded-xl px-4 border border-[#0d1e3d] text-left text-[14px] font-semibold text-slate-300 hover:bg-red-500/10 hover:text-red-300 hover:border-red-500/20 transition-all outline-none"
        >
          <LogOut size={18} className="text-slate-400 group-hover:text-red-300" />
          <span>Đăng xuất</span>
        </button>
      </div>

    </aside>
  );
}
