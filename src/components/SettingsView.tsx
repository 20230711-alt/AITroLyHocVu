import {
  ArrowLeft,
  MoreVertical,
  Globe,
  Palette,
  Mail,
  Bell,
  GraduationCap,
  Shield,
  Lock,
  Laptop,
  Smartphone,
  LogOut,
  Trash2,
  ChevronRight,
} from 'lucide-react';

import { UserSession } from '../types';

interface SettingsViewProps {
  onBack?: () => void;
  user?: UserSession | null;
}

export default function SettingsView({ onBack, user }: SettingsViewProps) {
  return (
    <div className="min-h-screen bg-[#04152E] text-white pb-20">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">

        <button onClick={onBack}>
          <ArrowLeft size={24} />
        </button>

        <h1 className="text-3xl font-bold">
          Cài đặt
        </h1>

        <MoreVertical size={22} />

      </div>

      {/* Language */}
      <SectionTitle title="NGÔN NGỮ" />

      <Card>
        <SettingRow
          icon={<Globe />}
          title="Ngôn ngữ"
          value="Tiếng Việt"
        />
      </Card>

      {/* Theme */}
      <SectionTitle title="GIAO DIỆN" />

      <Card>
        <ToggleRow
          icon={<Palette />}
          title="Giao diện tối"
          enabled={true}
        />
      </Card>

      {/* Notifications */}
      <SectionTitle title="THÔNG BÁO" />

      <Card>
        <ToggleRow
          icon={<Mail />}
          title="Thông báo Email"
          enabled={true}
        />

        <Divider />

        <ToggleRow
          icon={<Bell />}
          title="Thông báo Push"
          enabled={true}
        />

        <Divider />

        <ToggleRow
          icon={<GraduationCap />}
          title="Thông báo học vụ"
          enabled={true}
        />
      </Card>

      {/* Security */}
      <SectionTitle title="BẢO MẬT" />

      <Card>

        <div className="flex items-center gap-4 mb-5">

          <IconBox icon={<Shield />} />

          <div>
            <h3 className="font-medium">
              Mật khẩu
            </h3>
          </div>

        </div>

        <button className="w-full bg-blue-600 py-4 rounded-2xl text-lg font-semibold">
          Cập nhật mật khẩu
        </button>

        <Divider />

        <ToggleRow
          icon={<Lock />}
          title="Xác thực 2 bước"
          enabled={false}
        />

      </Card>

      {/* Devices */}
      <SectionTitle title="THIẾT BỊ ĐANG ĐĂNG NHẬP" />

      <Card>

        <DeviceItem
          icon={<Laptop />}
          name="Windows PC"
          info="Đang hoạt động • Hà Nội, VN"
        />

        <DeviceItem
          icon={<Smartphone />}
          name="Android Phone"
          info="2 giờ trước • Hà Nội, VN"
        />

        <button className="w-full mt-5 text-center text-lg">
          Đăng xuất khỏi tất cả thiết bị
        </button>

      </Card>

      {/* Account */}
      <SectionTitle title="TÀI KHOẢN" />

      <Card>

        <DangerRow
          icon={<LogOut />}
          title="Đăng xuất"
        />

        <Divider />

        <DangerRow
          icon={<Trash2 />}
          title="Xóa tài khoản"
        />

      </Card>

    </div>
  );
}

function SectionTitle({
  title,
}: {
  title: string;
}) {
  return (
    <h2 className="px-6 mt-8 mb-3 text-gray-400 font-semibold tracking-wider">
      {title}
    </h2>
  );
}

function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-4 bg-white/5 border border-white/10 rounded-3xl p-4">
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="border-b border-white/10 my-4"></div>
  );
}

function IconBox({
  icon,
}: {
  icon: React.ReactNode;
}) {
  return (
    <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
      {icon}
    </div>
  );
}

function SettingRow({
  icon,
  title,
  value,
}: any) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-4">

        <IconBox icon={icon} />

        <span className="text-xl">
          {title}
        </span>

      </div>

      <div className="flex items-center gap-2 text-gray-300">

        <span>{value}</span>

        <ChevronRight size={18} />

      </div>

    </div>
  );
}

function ToggleRow({
  icon,
  title,
  enabled,
}: any) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-4">

        <IconBox icon={icon} />

        <span className="text-xl">
          {title}
        </span>

      </div>

      <div
        className={`w-14 h-8 rounded-full relative ${
          enabled
            ? 'bg-blue-600'
            : 'bg-gray-600'
        }`}
      >
        <div
          className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${
            enabled ? 'right-1' : 'left-1'
          }`}
        />
      </div>

    </div>
  );
}

function DeviceItem({
  icon,
  name,
  info,
}: any) {
  return (
    <div className="flex items-center gap-4 mb-5">

      <div className="text-gray-300">
        {icon}
      </div>

      <div>

        <h3 className="text-lg">
          {name}
        </h3>

        <p className="text-sm text-gray-400">
          {info}
        </p>

      </div>

    </div>
  );
}

function DangerRow({
  icon,
  title,
}: any) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-4 text-red-500">

        <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center">
          {icon}
        </div>

        <span className="text-xl font-medium">
          {title}
        </span>

      </div>

      <ChevronRight size={18} />

    </div>
  );
}