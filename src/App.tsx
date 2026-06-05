import React, { useState } from 'react';
import {
  MessageSquare,
  GraduationCap,
  FileText,
  User,
} from 'lucide-react';

import { ScreenType, UserSession } from './types';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import LandingView from './components/LandingView';
import SettingsView from './components/SettingsView';

import LoginView from './pages/auth/LoginView';
import RegisterView from './pages/auth/RegisterView';

import ChatView from './pages/ai/ChatView';
import FAQView from './pages/ai/FAQView';
import DocumentsView from './pages/ai/DocumentsView';
import DocumentDetailView from './pages/ai/DocumentDetailView';
import DocumentChatView from './pages/ai/DocumentChatView';

import StudentDashboardView from './pages/student/StudentDashboardView';
import ProfileView from './pages/student/ProfileView';
import AcademicResults from './pages/student/AcademicResults';
import TuitionPage from './pages/student/TuitionPage';
import ScheduleView from './pages/student/ScheduleView';
import NotificationView from './pages/student/NotificationView';

import AdminDashboardView from './pages/admin/AdminDashboardView';
import AnalyticsView from './pages/admin/AnalyticsView';
export default function App() {
  const [screen, setScreen] = useState<ScreenType>('STUDENT_DASHBOARD');
  const [user, setUser] = useState<UserSession | null>(null);

  const handleStartPrompt = () => {
    if (user) {
      setScreen('CHAT');
    } else {
      setScreen('LOGIN');
    }
  };

  const handleLoginSuccess = (session: UserSession) => {
    setUser(session);
    setScreen('STUDENT_DASHBOARD');
  };

  const handleLogout = () => {
    setUser(null);
    setScreen('LANDING');
  };

  const renderActiveScreen = () => {
    switch (screen) {
      case 'LANDING':
        return (
          <LandingView
            onStart={handleStartPrompt}
            setScreen={setScreen}
          />
        );

      case 'LOGIN':
        return (
          <LogInOrRegister
            type="login"
            onAuthSuccess={handleLoginSuccess}
            onGoBack={() => setScreen('LANDING')}
            onGoRegister={() => setScreen('REGISTER')}
          />
        );

      case 'REGISTER':
  return (
    <RegisterView
      onRegisterSuccess={handleLoginSuccess}
      onGoLogin={() => setScreen('LOGIN')}
    />
  );

      case 'CHAT':
        return (
          <ChatView
            user={user}
            onNavigateToFiles={() =>
              setScreen('DOCUMENTS')
            }
          />
        );
      case 'PROFILE':
  return (
    <ProfileView
      onBack={() => setScreen('STUDENT_DASHBOARD')}
      onLogout={handleLogout}
    />
  );
      case 'GRADES':
        return <AcademicResults user={user} />;
      case 'TUITION':
        return <TuitionPage user={user} />;
      case 'SCHEDULE':
        return (
          <ScheduleView
            setScreen={setScreen}
            user={user}
            onLogout={handleLogout}
          />
        );
  case 'NOTIFICATION':
  return (
    <NotificationView
      onBack={() =>
        setScreen('STUDENT_DASHBOARD')
      }
    />
  );
  case 'DOCUMENT_DETAIL':
  return (
    <DocumentDetailView
      onBack={() => setScreen('DOCUMENTS')}
    />
  );
  case 'DOCUMENT_CHAT':
  return (
    <DocumentChatView
      onBack={() =>
        setScreen('DOCUMENT_DETAIL')
      }
    />
  );
  case 'SETTINGS':
  return (
    <SettingsView
      onBack={() =>
        setScreen('PROFILE')
      }
    />
  );
  case 'ADMIN_DASHBOARD':
  return <AdminDashboardView />;
      case 'FAQ':
        return <FAQView user={user} />;

      case 'DOCUMENTS':
        return <DocumentsView user={user} />;

      case 'ANALYTICS':
        return <AnalyticsView />;
      case 'STUDENT_DASHBOARD':
        return <StudentDashboardView onNavigate={setScreen} />;
      default:
        return (
          <LandingView
            onStart={handleStartPrompt}
            setScreen={setScreen}
          />
        );
    }
  };

  const isAuthScreen =
    screen === 'LOGIN' ||
    screen === 'REGISTER';
  const isSidebarScreen = [
    'STUDENT_DASHBOARD',
    'CHAT',
    'FAQ',
    'DOCUMENTS',
    'SCHEDULE',
    'GRADES',
    'TUITION',
    'NOTIFICATION',
    'PROFILE',
    'SETTINGS',
    'DOCUMENT_DETAIL',
    'DOCUMENT_CHAT',
  ].includes(screen);

  const showBottomNav =
    !isAuthScreen &&
    ['LANDING', 'ANALYTICS'].includes(
      screen
    );

  return (
    <div
      className={
        isAuthScreen
          ? 'min-h-screen'
          : isSidebarScreen
            ? 'min-h-screen bg-[#020B24] font-sans text-white'
            : 'min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col justify-between font-sans pb-[76px]'
      }
    >
      {!isAuthScreen && !isSidebarScreen && (
        <Header
          currentScreen={screen}
          setScreen={setScreen}
          user={user}
          onLogout={handleLogout}
        />
      )}

      <div className="flex-grow flex flex-col">
        {isSidebarScreen ? (
          <div className="flex min-h-screen bg-[#020B24]">
            <Sidebar
              currentScreen={screen}
              setScreen={setScreen}
              user={user}
              onLogout={handleLogout}
            />
            <main className="ml-[280px] flex-grow min-h-screen bg-[#020B24] text-white flex flex-col">
              {renderActiveScreen()}
            </main>
          </div>
        ) : (
          renderActiveScreen()
        )}
      </div>

      {showBottomNav && (
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-xl border-t border-[#c3c6d7]/30 shadow-lg px-4 py-2.5 flex justify-around items-center max-w-md mx-auto rounded-t-2xl sm:border-x">

          <button
            type="button"
            onClick={() => setScreen('CHAT')}
            className={`flex flex-col items-center justify-center gap-1 p-2.5 rounded-2xl transition-all cursor-pointer ${
              screen === 'CHAT' || screen === 'LANDING'
                ? 'bg-[#eff4ff] text-[#004ac6] font-extrabold px-5 shadow-sm'
                : 'text-[#737686] hover:text-[#004ac6]'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-[10px] font-bold tracking-wide">
              Chat
            </span>
          </button>

          <button
            type="button"
            onClick={() => setScreen('STUDENT_DASHBOARD')}
            className={`flex flex-col items-center justify-center gap-1 p-2.5 rounded-2xl transition-all cursor-pointer ${
              screen === 'STUDENT_DASHBOARD'
                ? 'bg-[#eff4ff] text-[#004ac6] font-extrabold px-5 shadow-sm'
                : 'text-[#737686] hover:text-[#004ac6]'
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            <span className="text-[10px] font-bold tracking-wide">
              Study
            </span>
          </button>

          <button
            type="button"
            onClick={() => setScreen('DOCUMENTS')}
            className={`flex flex-col items-center justify-center gap-1 p-2.5 rounded-2xl transition-all cursor-pointer ${
              screen === 'DOCUMENTS'
                ? 'bg-[#eff4ff] text-[#004ac6] font-extrabold px-5 shadow-sm'
                : 'text-[#737686] hover:text-[#004ac6]'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span className="text-[10px] font-bold tracking-wide">
              Files
            </span>
          </button>

          <button
            type="button"
            onClick={() => setScreen('FAQ')}
            className={`flex flex-col items-center justify-center gap-1 p-2.5 rounded-2xl transition-all cursor-pointer ${
              screen === 'FAQ'
                ? 'bg-[#eff4ff] text-[#004ac6] font-extrabold px-5 shadow-sm'
                : 'text-[#737686] hover:text-[#004ac6]'
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-[10px] font-bold tracking-wide">
              Me
            </span>
          </button>

        </nav>
      )}
    </div>
  );
}

interface LogInOrRegisterProps {
  type: 'login' | 'register';
  onAuthSuccess: (session: UserSession) => void;
  onGoBack: () => void;
  onGoRegister?: () => void;
}

function LogInOrRegister({
  type,
  onAuthSuccess,
  onGoBack,
  onGoRegister,
}: LogInOrRegisterProps) {
  return (
  <>
    <LoginView
      onLoginSuccess={onAuthSuccess}
      onGoBack={onGoBack}
      onGoRegister={onGoRegister}
    />
  </>
);
}
