import React, { useState } from 'react';
import {
  User,
  Mail,
  BadgeCheck,
  Lock,
  Eye,
  EyeOff,
} from 'lucide-react';

import AILayout from '../../components/AILayout';
import { loginWithGoogle } from '../../services/authService';
import { saveGoogleUser } from '../../services/localStorageService';
import { UserSession } from '../../types';

interface RegisterViewProps {
  onRegisterSuccess: (session: UserSession) => void;
  onGoLogin: () => void;
}

export default function RegisterView({
  onRegisterSuccess,
  onGoLogin,
}: RegisterViewProps) {
  const logoImage = new URL(
    '../../assets/images/logo.png',
    import.meta.url
  ).href;
  const robotImage = new URL(
    '../../assets/images/ai-robot.png',
    import.meta.url
  ).href;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    onRegisterSuccess({
      email: 'student@university.edu.vn',
      name: 'Nguyễn Văn A',
      role: 'student',
      avatar: '',
      major: 'Công nghệ thông tin',
    });
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();

      saveGoogleUser(user);

      onRegisterSuccess({
        email: user.email || '',
        name: user.name || 'Sinh viên',
        role: 'student',
        avatar: user.avatar || '',
        major: 'Công nghệ thông tin',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AILayout>
      <div className="relative min-h-screen overflow-hidden px-4 py-8 text-white sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(0,140,255,.24),transparent_34%),radial-gradient(circle_at_84%_55%,rgba(0,212,255,.18),transparent_34%),linear-gradient(180deg,rgba(2,11,31,.05),rgba(2,11,31,.8))]" />

        <div className="pointer-events-none absolute -right-10 top-28 hidden w-[30vw] max-w-[430px] lg:block xl:right-8">
          <img
            src={robotImage}
            alt=""
            className="ml-auto mt-28 w-[320px] max-w-full animate-float drop-shadow-[0_0_45px_rgba(0,140,255,.55)] xl:w-[360px]"
          />

          <div className="absolute bottom-8 left-16 h-12 w-60 rounded-[50%] border border-cyan-300/60 shadow-[0_0_24px_rgba(0,212,255,.6),inset_0_0_24px_rgba(0,212,255,.35)] xl:w-72" />
        </div>

        <main className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-5">
              <img
                src={logoImage}
                alt="Academia AI"
                className="h-16 w-16 rounded-2xl object-cover object-[50%_34%] shadow-[0_0_26px_rgba(0,212,255,.55)]"
              />

              <div className="text-left">
                <h1 className="text-4xl font-black uppercase tracking-wide text-white drop-shadow-[0_0_18px_rgba(0,140,255,.45)] md:text-5xl">
                  Academia AI
                </h1>
                <p className="mt-1 text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-100/80">
                  — Trợ lý AI học vụ —
                </p>
              </div>
            </div>
          </div>

          <p className="mt-7 max-w-xl text-center text-lg font-medium leading-8 text-white/90">
            Học tập thông minh hơn. Quản lý dễ dàng hơn.
            <br />
            AI đồng hành cùng sinh viên trên mọi hành trình.
          </p>

          <section className="ai-card mt-7 w-full max-w-xl rounded-3xl border border-cyan-500/30 bg-[#02163f]/90 p-8 shadow-[0_0_40px_rgba(0,140,255,0.5)] backdrop-blur-lg">
            <div className="text-center">
              <h2 className="text-3xl font-black text-white">
                Tạo tài khoản mới
              </h2>
              <p className="mt-2 text-base text-cyan-50/85">
                Tham gia cộng đồng học thuật thông minh ngay hôm nay.
              </p>
            </div>

            <form onSubmit={handleRegister} className="mt-8 space-y-5">
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

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  label="KHOA"
                  icon={<BadgeCheck size={20} />}
                  placeholder="CNTT"
                />

                <Input
                  label="NGÀNH"
                  icon={<BadgeCheck size={20} />}
                  placeholder="Công nghệ thông tin"
                />
              </div>

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
                className="flex h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#008cff] to-[#1f6fff] text-lg font-bold text-white shadow-[0_0_24px_rgba(0,140,255,.45)] transition-all hover:brightness-110"
              >
                Đăng ký
              </button>

              {/* Divider */}
              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-cyan-500/20" />

                <span className="text-sm font-medium text-slate-400">
                  HOẶC
                </span>

                <div className="h-px flex-1 bg-cyan-500/20" />
              </div>

              {/* Google Login */}
              <div className="mb-6 text-center">
                <p className="mb-4 text-sm text-slate-400">
                  Đã có tài khoản Google?
                </p>

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-cyan-500/40 bg-slate-900/40 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
                >
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="h-6 w-6"
                  />

                  Đăng nhập bằng Google
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <span className="text-slate-400">
                  Đã có tài khoản?
                </span>

                <button
                  type="button"
                  onClick={onGoLogin}
                  className="ml-2 font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Đăng nhập ngay
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </AILayout>
  );
}

function Input({
  label,
  icon,
  placeholder,
}: {
  label: string;
  icon: React.ReactNode;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-3 block text-sm tracking-widest text-white/80">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-100/65">
          {icon}
        </div>

        <input
          className="h-14 w-full rounded-xl border border-cyan-400/40 bg-[#031533]/70 pl-12 pr-4 text-white outline-none placeholder:text-cyan-100/45 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/20"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

function PasswordInput({
  label,
  show,
  setShow,
}: {
  label: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <label className="mb-3 block text-sm tracking-widest text-white/80">
        {label}
      </label>

      <div className="relative">
        <Lock
          className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-100/65"
          size={20}
        />

        <input
          type={show ? 'text' : 'password'}
          className="h-14 w-full rounded-xl border border-cyan-400/40 bg-[#031533]/70 pl-12 pr-12 text-white outline-none placeholder:text-cyan-100/45 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/20"
          placeholder="••••••••"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-100/65"
        >
          {show ? <EyeOff size={22} /> : <Eye size={22} />}
        </button>
      </div>
    </div>
  );
}
