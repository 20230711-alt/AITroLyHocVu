import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  GraduationCap,
  Building2,
  BookOpen,
  Shield,
  Lock,
  LogOut,
  Pencil,
  Award,
  FileText,
  Activity,
} from "lucide-react";
import { getGoogleUser } from '../../services/localStorageService';

interface ProfileViewProps {
  onBack?: () => void;
  onLogout?: () => void;
}

export default function ProfileView({
  onBack,
  onLogout,
}: ProfileViewProps) {
  const googleUser = getGoogleUser();
  const profileAvatar = googleUser.avatar || 'https://i.pravatar.cc/200?img=32';
  const profileName = googleUser.name || 'Thùy Linh Chu Thị';
  const profileEmail = googleUser.email || 'chuthithuylinh2210@gmail.com';

  return (
    <div className="min-h-screen bg-[#020f2f] text-white flex">
      {/* Main */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-8">Hồ sơ sinh viên</h2>

        {/* Header */}
        <div className="bg-[#0c214f] rounded-2xl p-8 border border-blue-900">
          <div className="flex justify-between items-start gap-8">
            <div className="flex gap-6 items-start">
              <div className="relative">
                <img
                  src={profileAvatar}
                  alt={profileName}
                  className="w-32 h-32 rounded-2xl border-4 border-blue-500 object-cover"
                />
              </div>

              <div>
                <h1 className="text-4xl font-bold">
                  {profileName}
                </h1>

                <div className="mt-4 space-y-2 text-sm text-slate-300">
                  <p className="flex items-center gap-2">
                    <Mail size={16} />
                    {profileEmail}
                  </p>

                  <p className="flex items-center gap-2">
                    <User size={16} />
                    MSSV: 2124802010101
                  </p>
                </div>
              </div>
            </div>

            <button className="px-6 py-3 rounded-lg border border-blue-500 text-blue-400 text-sm flex gap-2 hover:bg-blue-500/10 transition whitespace-nowrap">
              <Pencil size={16} />
              Chỉnh sửa hồ sơ
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-5 mt-8">
            <StatCard
              icon={<Award />}
              value="3.45 / 4.0"
              label="GPA"
            />

            <StatCard
              icon={<FileText />}
              value="35"
              label="Học phần"
            />

            <StatCard
              icon={<BookOpen />}
              value="102"
              label="Tín chỉ"
            />

            <StatCard
              icon={<Activity />}
              value="Đang học"
              label="Trạng thái"
              green
            />
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Personal */}
          <div>
            <div className="bg-[#0c214f] rounded-2xl p-6 border border-blue-900">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <User size={20} />
                Thông tin cá nhân
              </h3>

              <InfoRow
                icon={<GraduationCap />}
                title="Lớp"
                value="CNTT K15A"
              />

              <InfoRow
                icon={<Building2 />}
                title="Khoa"
                value="Công nghệ thông tin"
              />

              <InfoRow
                icon={<BookOpen />}
                title="Ngành"
                value="Công nghệ thông tin"
              />

              <InfoRow
                icon={<Mail />}
                title="Email"
                value={profileEmail}
              />

              <InfoRow
                icon={<Phone />}
                title="Điện thoại"
                value="0987654321"
              />

              <InfoRow
                icon={<Calendar />}
                title="Ngày sinh"
                value="15/08/2003"
              />

              <InfoRow
                icon={<MapPin />}
                title="Địa chỉ"
                value="Bắc Giang, Việt Nam"
              />
            </div>
          </div>

          {/* Security */}
          <div>
            <div className="bg-[#0c214f] rounded-2xl p-6 border border-blue-900 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="text-blue-400" size={20} />
                <h3 className="text-lg font-bold">Bảo mật</h3>
              </div>

              <div className="bg-[#132c61] rounded-lg p-4 mb-6 text-sm flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-400 text-xs">
                      Đăng nhập gần nhất
                    </p>

                    <p className="font-semibold mt-2 text-sm">
                      Hôm nay, 08:45
                    </p>

                    <p className="text-slate-400 text-xs mt-1">
                      iPhone 15 Pro
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-slate-400 text-xs">
                      Trạng thái xác thực
                    </p>

                    <p className="font-semibold text-green-400 mt-2 text-sm">
                      ✓ Đã xác minh email
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-sm font-medium flex items-center justify-center gap-2">
                  <Pencil size={16} />
                  Cập nhật thông tin
                </button>

                <button className="w-full py-3 rounded-lg border border-slate-700 hover:bg-white/5 transition text-sm font-medium flex items-center justify-center gap-2">
                  <Lock size={16} />
                  Đổi mật khẩu
                </button>

                <button 
                  onClick={onLogout}
                  className="w-full py-3 rounded-lg border border-red-500 text-red-400 hover:bg-red-500/10 transition text-sm font-medium flex items-center justify-center gap-2">
                  <LogOut size={16} />
                  Đăng xuất
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, value, label, green }: { icon: React.ReactNode; value: string; label: string; green?: boolean }) {
  return (
    <div className="bg-[#132c61] rounded-lg p-5 flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
        {icon}
      </div>

      <div className="min-w-0">
        <h3
          className={`text-xl font-bold ${
            green ? "text-green-400" : ""
          }`}
        >
          {value}
        </h3>

        <p className="text-slate-400 text-xs mt-1">
          {label}
        </p>
      </div>
    </div>
  );
}

function InfoRow({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-slate-700 last:border-0">
      <div className="flex items-center gap-3">
        <div className="text-blue-400 flex-shrink-0">{icon}</div>

        <div className="min-w-0">
          <p className="text-slate-400 text-xs">{title}</p>
          <p className="text-sm font-medium truncate">{value}</p>
        </div>
      </div>
    </div>
  );
}
