import React, { useState } from 'react';
import {
  User,
  Mail,
  BadgeCheck,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';

import { UserSession } from '../../types';

interface RegisterViewProps {
  onRegisterSuccess: (session: UserSession) => void;
  onGoLogin: () => void;
}

export default function RegisterView({
  onRegisterSuccess,
  onGoLogin
}: RegisterViewProps) {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const handleRegister = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onRegisterSuccess({
      email: 'student@university.edu.vn',
      name: 'Nguyễn Văn A',
      role: 'student',
      avatar: '',
      major: 'Công nghệ thông tin'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041B3A] via-[#082850] to-[#041B3A] flex flex-col items-center px-6 py-10">

      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">
          Academia AI
        </h1>

        <h2 className="mt-8 text-4xl font-extrabold text-white">
          Tạo tài khoản mới
        </h2>

        <p className="mt-4 text-xl text-[#C9D4E8] max-w-md">
          Tham gia cộng đồng học thuật thông minh ngay hôm nay.
        </p>
      </div>

      <div className="ai-card w-full max-w-xl mt-10 rounded-[28px] p-8">

        <form
          onSubmit={handleRegister}
          className="space-y-6"
        >

          <Input
            label="HỌ VÀ TÊN"
            icon={<User size={20} />}
            placeholder="Nguyễn Văn A"
          />

          <Input
            label="EMAIL SINH VIÊN"
            icon={<Mail size={20} />}
            placeholder="name@university.edu.vn"
          />

          <Input
            label="MÃ SINH VIÊN"
            icon={<BadgeCheck size={20} />}
            placeholder="SV123456"
          />

          <PasswordInput
            label="MẬT KHẨU"
            show={showPassword}
            setShow={setShowPassword}
          />

          <PasswordInput
            label="XÁC NHẬN MẬT KHẨU"
            show={showConfirmPassword}
            setShow={setShowConfirmPassword}
          />

          <button
            type="submit"
            className="w-full h-16 rounded-[18px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-2xl font-bold shadow-xl"
          >
            Đăng ký
          </button>

          <div className="flex items-center py-2">
            <div className="flex-1 border-t border-white/10"></div>

            <span className="px-4 text-white/70 font-medium">
              HOẶC ĐĂNG KÝ BẰNG
            </span>

            <div className="flex-1 border-t border-white/10"></div>
          </div>

          <button
            type="button"
            className="w-full h-16 rounded-[18px] bg-white/10 border border-white/10 text-white font-semibold flex items-center justify-center gap-3"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              className="w-6 h-6"
            />

            Google
          </button>

        </form>
      </div>

      <p className="mt-10 text-xl text-white/80">
        Đã có tài khoản?

        <button
          onClick={onGoLogin}
          className="ml-2 text-[#2563EB] font-bold"
        >
          Đăng nhập ngay
        </button>
      </p>
    </div>
  );
}

function Input({
  label,
  icon,
  placeholder
}: any) {
  return (
    <div>
      <label className="block text-white/80 mb-3 tracking-widest text-sm">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
          {icon}
        </div>

        <input
          className="w-full h-16 rounded-[18px] bg-black/40 border border-white/15 pl-12 pr-4 text-white"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

function PasswordInput({
  label,
  show,
  setShow
}: any) {
  return (
    <div>
      <label className="block text-white/80 mb-3 tracking-widest text-sm">
        {label}
      </label>

      <div className="relative">
        <Lock
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60"
          size={20}
        />

        <input
          type={show ? 'text' : 'password'}
          className="w-full h-16 rounded-[18px] bg-black/40 border border-white/15 pl-12 pr-12 text-white"
          placeholder="••••••••"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          {show ? (
            <EyeOff className="text-white/60" />
          ) : (
            <Eye className="text-white/60" />
          )}
        </button>
      </div>
    </div>
  );
}
