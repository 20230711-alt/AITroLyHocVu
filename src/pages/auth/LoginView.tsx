import React, { useEffect, useState } from 'react';
import {
  BarChart3,
  Eye,
  EyeOff,
  FolderOpen,
  Lock,
  Mail,
  Settings,
  ShieldCheck,
} from 'lucide-react';

import AILayout from '../../components/AILayout';
import { loginWithGoogle } from '../../services/authService';
import {
  getEmailSuggestions,
  getRememberEmail,
  removeRememberEmail,
  saveEmailSuggestion,
  saveGoogleUser,
  saveRememberEmail,
} from '../../services/localStorageService';
import { UserSession } from '../../types';

interface LoginViewProps {
  onLoginSuccess: (session: UserSession) => void;
  onGoBack: () => void;
  onGoRegister?: () => void;
}

export default function LoginView({
  onLoginSuccess,
  onGoBack,
  onGoRegister,
}: LoginViewProps) {
  const logoImage = new URL(
    '../../assets/images/logo.png',
    import.meta.url
  ).href;
  const robotImage = new URL(
    '../../assets/images/ai-robot.png',
    import.meta.url
  ).href;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [emailSuggestions, setEmailSuggestions] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedEmail = getRememberEmail();

    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }

    setEmailSuggestions(getEmailSuggestions());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      const isAdmin = email.toLowerCase().includes('admin');
      const updatedSuggestions = saveEmailSuggestion(email);

      setEmailSuggestions(updatedSuggestions);

      if (rememberMe) {
        saveRememberEmail(email);
      } else {
        removeRememberEmail();
      }

      onLoginSuccess({
        email,
        name: isAdmin ? 'Admin Manager' : 'Sinh viên',
        role: isAdmin ? 'admin' : 'student',
        avatar: '',
        major: isAdmin ? 'Phòng Đào tạo' : 'Công nghệ thông tin',
      });
    }, 1200);
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();

      saveGoogleUser(user);

      console.log(user);

      alert(`Xin chào ${user.name}`);
      onLoginSuccess({
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
          <button
            type="button"
            className="flex flex-col items-center text-center"
            onClick={onGoBack}
          >
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
          </button>

          <p className="mt-7 max-w-xl text-center text-lg font-medium leading-8 text-white/90">
            Học tập thông minh hơn. Quản lý dễ dàng hơn.
            <br />
            AI đồng hành cùng sinh viên trên mọi hành trình.
          </p>

          <section className="ai-card mt-7 w-full max-w-[585px] rounded-3xl px-9 py-8">
            <div className="text-center">
              <h2 className="text-3xl font-black text-white">
                Đăng nhập
              </h2>
              <p className="mt-2 text-base text-cyan-50/85">
                Chào mừng bạn trở lại!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="mb-6">
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-100/65"
                    size={20}
                  />

                  <input
                    type="email"
                    list="email-history"
                    required
                    placeholder="Nhập email của bạn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 w-full rounded-xl border border-cyan-400/40 bg-[#031533]/70 pl-12 pr-4 text-white outline-none placeholder:text-cyan-100/45 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/20"
                  />

                  <datalist id="email-history">
                    {emailSuggestions.map((item) => (
                      <option key={item} value={item} />
                    ))}
                  </datalist>
                </div>
              </div>

              <div>
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-100/65"
                    size={20}
                  />

                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu"
                    className="h-14 w-full rounded-xl border border-cyan-400/40 bg-[#031533]/70 pl-12 pr-12 text-white outline-none placeholder:text-cyan-100/45 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/20"
                  />

                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-100/65"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff size={22} />
                    ) : (
                      <Eye size={22} />
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-5 w-5 rounded-md accent-[#008cff]"
                  />

                  <span className="text-base text-cyan-50/80">
                    Ghi nhớ
                  </span>
                </label>

                <button
                  type="button"
                  className="font-medium text-[#00d4ff] hover:text-white"
                >
                  Quên mật khẩu?
                </button>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="mt-8 flex h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#008cff] to-[#1f6fff] text-lg font-bold text-white shadow-[0_0_24px_rgba(0,140,255,.45)] transition-all hover:brightness-110 disabled:opacity-70"
              >
                {isSubmitting ? 'Đang xử lý...' : 'Đăng nhập'}
              </button>

              <div className="my-7 flex items-center">
                <div className="flex-1 border-t border-cyan-100/10" />
                <span className="px-4 text-sm font-medium text-cyan-100/45">
                  HOẶC
                </span>
                <div className="flex-1 border-t border-cyan-100/10" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="flex h-14 items-center justify-center gap-3 rounded-xl border border-cyan-400/30 bg-[#031533]/50 font-semibold text-white hover:border-cyan-300/70"
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    className="h-6 w-6"
                  />
                  Google
                </button>

                <button
                  type="button"
                  className="flex h-14 items-center justify-center gap-3 rounded-xl border border-cyan-400/30 bg-[#031533]/50 font-semibold text-white hover:border-cyan-300/70"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft"
                    className="h-6 w-6"
                  />
                  Microsoft
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-base text-cyan-50/65">
              Chưa có tài khoản?
              <button
                onClick={onGoRegister}
                type="button"
                className="ml-2 font-bold text-[#00d4ff] hover:text-white"
              >
                Đăng ký ngay
              </button>
            </p>
          </section>

          <div className="mt-auto grid w-full max-w-4xl grid-cols-2 gap-4 pt-8 lg:grid-cols-4">
            <Feature
              icon={<Settings size={22} />}
              title="AI Thông minh"
              text="Trợ lý AI 24/7"
            />
            <Feature
              icon={<ShieldCheck size={22} />}
              title="Bảo mật cao"
              text="Dữ liệu được bảo vệ"
            />
            <Feature
              icon={<BarChart3 size={22} />}
              title="Học tập hiệu quả"
              text="Cá nhân hóa lộ trình"
            />
            <Feature
              icon={<FolderOpen size={22} />}
              title="Quản lý dễ dàng"
              text="Tất cả trong một nền tảng"
            />
          </div>

          <p className="mt-8 text-sm text-cyan-50/55">
            © 2025 Academia AI. Tất cả quyền được bảo lưu.
          </p>
        </main>
      </div>
    </AILayout>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-[#031533]/45 px-4 py-3 backdrop-blur-md">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/35 bg-cyan-400/10 text-cyan-300 shadow-[0_0_18px_rgba(0,212,255,.25)]">
        {icon}
      </div>

      <div>
        <div className="text-sm font-bold text-white">
          {title}
        </div>
        <div className="mt-0.5 text-xs text-cyan-50/55">
          {text}
        </div>
      </div>
    </div>
  );
}
