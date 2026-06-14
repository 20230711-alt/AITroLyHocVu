import React from 'react';
import { UserSession } from '../../types';

interface AdminDashboardViewProps {
  user?: UserSession | null;
}

export default function AdminDashboardView({ user }: AdminDashboardViewProps) {
  const avatar = user?.avatar || '/assets/images/default-avatar.svg';

  return (
    <div className="min-h-screen bg-[#03142E] text-white p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-blue-400">Admin Overview</h1>
        </div>

        <div className="flex items-center gap-4">
          <img src={avatar} className="w-12 h-12 rounded-full border-2 border-blue-500" />
        </div>
      </div>

      <div className="rounded-2xl bg-[#0b2240] p-6">Dashboard content</div>
    </div>
  );
}
