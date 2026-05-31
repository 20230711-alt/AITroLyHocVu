/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Menu, Search, LayoutDashboard, FileText, HelpCircle, Settings, User, X, MessageSquare, GraduationCap } from 'lucide-react';
import { ScreenType, UserSession } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  setScreen: (screen: ScreenType) => void;
  user: UserSession | null;
  onLogout: () => void;
}

export default function Header({ currentScreen, setScreen, user, onLogout }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="bg-white/85 backdrop-blur-md sticky top-0 z-40 border-b border-[#c3c6d7]/30 flex justify-between items-center px-6 py-3.5 w-full h-[72px]">
        <div className="flex items-center gap-2 cursor-pointer animate-fade-in" onClick={() => setScreen('LANDING')}>
          <Sparkles className="w-6 h-6 text-[#004ac6]" />
          <h1 className="font-sans text-xl font-bold tracking-tight text-[#004ac6]">
            Academia AI
          </h1>
        </div>

        <div className="flex items-center gap-4">
          {currentScreen === 'FAQ' && (
            <button className="p-2 text-[#737686] hover:text-[#004ac6] transition-colors rounded-full hover:bg-[#eff4ff]">
              <Search className="w-5 h-5" />
            </button>
          )}

          <div className={`${currentScreen === 'LANDING' ? 'hidden md:flex' : 'flex'} items-center gap-4`}>
            {user ? (
              <div 
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#004ac6]/20 cursor-pointer hover:border-[#004ac6] transition-all"
                onClick={() => setDrawerOpen(true)}
                title="Xem hồ sơ"
              >
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <button 
                onClick={() => setScreen('LOGIN')}
                className="text-xs font-semibold uppercase tracking-wider text-[#004ac6] hover:text-[#2563eb] px-4 py-2 border border-[#004ac6]/20 rounded-xl hover:bg-[#eff4ff] transition-all"
              >
                Đăng nhập
              </button>
            )}
          </div>

          <button 
            onClick={() => setDrawerOpen(true)}
            className={`${currentScreen === 'LANDING' ? 'block md:hidden' : 'md:hidden'} p-2 text-[#737686] hover:text-[#004ac6] transition-colors rounded-full hover:bg-[#eff4ff]`}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Side Slide-out Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-[#0b1c30]/40 backdrop-blur-sm transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />
          
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="w-[280px] bg-white h-full shadow-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-[#c3c6d7]/20">
                  <span className="font-bold text-[#0b1c30]">Tài khoản</span>
                  <button className="p-1 rounded-full text-[#737686] hover:bg-neutral-100" onClick={() => setDrawerOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {user ? (
                  <div className="flex flex-col items-center text-center py-6 border-b border-[#c3c6d7]/20">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#004ac6]/30 mb-3">
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <h3 className="font-bold text-[#0b1c30] text-base">{user.name}</h3>
                    <p className="text-xs text-[#737686]">{user.major || "Computer Science Senior"}</p>
                    <span className="mt-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#eff4ff] text-[#004ac6]">
                      {user.role === 'admin' ? 'QTV Hệ thống' : 'Sinh viên'}
                    </span>
                  </div>
                ) : (
                  <div className="py-6 text-center">
                    <p className="text-sm text-[#737686] mb-3">Vui lòng đăng nhập để sử dụng đầy đủ tính năng AI trợ lý</p>
                    <button 
                      onClick={() => { setDrawerOpen(false); setScreen('LOGIN'); }}
                      className="w-full bg-[#004ac6] text-white py-2 rounded-xl text-xs font-bold font-sans hover:bg-[#2563eb]"
                    >
                      ĐĂNG NHẬP NGAY
                    </button>
                  </div>
                )}

                <nav className="flex flex-col gap-1 mt-6">
                  <button 
                    onClick={() => { setDrawerOpen(false); setScreen('CHAT'); }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${currentScreen === 'CHAT' ? 'bg-[#eff4ff] text-[#004ac6] font-bold' : 'text-[#434655] hover:bg-neutral-50'}`}
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-wider">Trợ lý AI Chat</span>
                  </button>
                  <button 
                    onClick={() => { setDrawerOpen(false); setScreen('ANALYTICS'); }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${currentScreen === 'ANALYTICS' ? 'bg-[#eff4ff] text-[#004ac6] font-bold' : 'text-[#434655] hover:bg-neutral-50'}`}
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-wider">Dashboard</span>
                  </button>
                  <button 
                    onClick={() => { setDrawerOpen(false); setScreen('DOCUMENTS'); }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${currentScreen === 'DOCUMENTS' ? 'bg-[#eff4ff] text-[#004ac6] font-bold' : 'text-[#434655] hover:bg-neutral-50'}`}
                  >
                    <FileText className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-wider">Tài liệu học tập</span>
                  </button>
                  <button 
                    onClick={() => { setDrawerOpen(false); setScreen('FAQ'); }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${currentScreen === 'FAQ' ? 'bg-[#eff4ff] text-[#004ac6] font-bold' : 'text-[#434655] hover:bg-neutral-50'}`}
                  >
                    <HelpCircle className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-wider">Quản lý FAQ</span>
                  </button>
                </nav>
              </div>

              {user && (
                <button 
                  onClick={() => { setDrawerOpen(false); onLogout(); }}
                  className="w-full border border-red-200 text-red-500 py-2.5 rounded-xl text-xs font-bold hover:bg-red-50 transition-colors"
                >
                  Đăng xuất
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
