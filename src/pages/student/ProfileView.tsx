import {
  ArrowLeft,
  GraduationCap,
  Building2,
  BookOpen,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Shield,
  LogOut,
  Pencil,
  Lock,
  Settings,
} from 'lucide-react';
import AILayout from '../../components/AILayout';

interface ProfileViewProps {
  onBack?: () => void;
  onLogout?: () => void;
}

export default function ProfileView({
  onBack,
  onLogout,
}: ProfileViewProps) {
  return (
    <AILayout>
      <div className="min-h-screen bg-gradient-to-b from-[#04152E] via-[#071B3D] to-[#021024] text-white pb-28">

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">

        <div className="flex items-center gap-3">
          <button onClick={onBack}>
            <ArrowLeft size={22} />
          </button>

          <h1 className="text-xl font-semibold">
            Hồ sơ sinh viên
          </h1>
        </div>

        <img
          src="https://i.pravatar.cc/150?img=32"
          alt=""
          className="w-11 h-11 rounded-full border-2 border-blue-500"
        />
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center mt-8">

        <div className="relative">
          <img
            src="https://i.pravatar.cc/300?img=32"
            alt=""
            className="w-32 h-32 rounded-3xl border-4 border-blue-500"
          />

          <button className="absolute -bottom-2 -right-2 bg-blue-600 p-3 rounded-xl">
            <Settings size={18} />
          </button>
        </div>

        <h2 className="text-5xl font-bold mt-5">
          Nguyễn Thùy Linh
        </h2>

        <p className="text-gray-400 mt-2">
          MSSV: 212480201001
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 px-5 mt-8">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">
          <h3 className="text-3xl font-bold">
            3.45 / 4.0
          </h3>
          <p className="text-gray-400 mt-2">
            GPA
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">
          <h3 className="text-3xl font-bold">
            102
          </h3>
          <p className="text-gray-400 mt-2">
            TÍN CHỈ
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">
          <h3 className="text-3xl font-bold">
            35
          </h3>
          <p className="text-gray-400 mt-2">
            HỌC PHẦN
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">
          <h3 className="text-3xl font-bold text-green-400">
            Đang học
          </h3>
          <p className="text-gray-400 mt-2">
            TRẠNG THÁI
          </p>
        </div>

      </div>

      {/* Personal Info */}
      <div className="px-5 mt-10">

        <h2 className="text-2xl font-bold mb-5">
          Thông tin cá nhân
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

          <ProfileItem
            icon={<GraduationCap size={20} />}
            label="Lớp"
            value="CNTT K15A"
          />

          <ProfileItem
            icon={<Building2 size={20} />}
            label="Khoa"
            value="Công nghệ thông tin"
          />

          <ProfileItem
            icon={<BookOpen size={20} />}
            label="Ngành"
            value="Công nghệ thông tin"
          />

          <ProfileItem
            icon={<Mail size={20} />}
            label="Email"
            value="linh@student.eaut.edu.vn"
          />

          <ProfileItem
            icon={<Phone size={20} />}
            label="Điện thoại"
            value="0987654321"
          />

          <ProfileItem
            icon={<Calendar size={20} />}
            label="Ngày sinh"
            value="15/08/2003"
          />

          <ProfileItem
            icon={<MapPin size={20} />}
            label="Địa chỉ"
            value="Bắc Giang, Việt Nam"
            last
          />

        </div>
      </div>

      {/* Security */}
      <div className="px-5 mt-10">

        <h2 className="text-2xl font-bold mb-5">
          Bảo mật
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

          <div className="flex justify-between">
            <div>
              <p className="text-gray-400">
                Đăng nhập gần nhất
              </p>

              <p className="mt-2">
                Hôm nay, 08:45
              </p>

              <p className="text-gray-400">
                iPhone 15 Pro
              </p>
            </div>

            <div>
              <p className="text-gray-400">
                Trạng thái xác thực
              </p>

              <p className="mt-2 text-green-400">
                ✓ Đã xác minh email
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Actions */}
      <div className="px-5 mt-8 space-y-4">

        <button className="w-full bg-blue-600 py-5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3">
          <Pencil size={20} />
          Cập nhật thông tin
        </button>

        <button className="w-full bg-white/5 border border-white/10 py-5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3">
          <Lock size={20} />
          Đổi mật khẩu
        </button>

        <button
          onClick={onLogout}
          className="w-full border border-red-500/40 text-red-400 py-5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3"
        >
          <LogOut size={20} />
          Đăng xuất
        </button>

      </div>
      </div>
    </AILayout>
  );
}

interface ItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
}

function ProfileItem({
  icon,
  label,
  value,
  last,
}: ItemProps) {
  return (
    <div
      className={`flex items-center gap-4 p-5 ${
        !last ? 'border-b border-white/10' : ''
      }`}
    >
      <div className="text-blue-400">
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-400">
          {label}
        </p>

        <p className="mt-1 text-lg">
          {value}
        </p>
      </div>
    </div>
  );
}
