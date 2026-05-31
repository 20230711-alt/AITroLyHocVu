import {
  ArrowLeft,
  Bell,
  Search,
  AlertTriangle,
  Calendar,
  Award,
  BookOpen,
  MessageSquare,
  Send,
} from 'lucide-react';
import AILayout from '../../components/AILayout';

interface NotificationViewProps {
  onBack?: () => void;
}

export default function NotificationView({
  onBack,
}: NotificationViewProps) {
  const notifications = [
    {
      title: 'Khoa CNTT - Lịch thi học phần',
      desc: 'Kế hoạch tổ chức thi kết thúc học phần...',
      time: '1 giờ trước',
      icon: <BookOpen size={18} />,
      color: 'bg-blue-500',
    },
    {
      title: 'Xét học bổng học kỳ',
      desc: 'Cập nhật danh sách sinh viên đủ điều kiện...',
      time: 'Hôm qua',
      icon: <Award size={18} />,
      color: 'bg-yellow-500',
    },
    {
      title: 'Nghỉ lễ theo quy định',
      desc: 'Thông báo kế hoạch nghỉ lễ 2/9...',
      time: '2 ngày trước',
      icon: <Calendar size={18} />,
      color: 'bg-green-500',
    },
    {
      title: 'Điều chỉnh kế hoạch học tập',
      desc: 'Một số thay đổi về lộ trình đào tạo...',
      time: '3 ngày trước',
      icon: <BookOpen size={18} />,
      color: 'bg-indigo-500',
    },
  ];

  return (
    <AILayout>
      <div className="min-h-screen bg-[#04152E] text-white pb-28">

      {/* Header */}
      <div className="flex justify-between items-center px-5 py-5 border-b border-white/10">

        <div className="flex items-center gap-3">

          <button onClick={onBack}>
            <ArrowLeft size={22} />
          </button>

          <h1 className="text-2xl font-bold">
            Notifications
          </h1>

        </div>

        <div className="relative">

          <Bell size={22} />

          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-[10px] flex items-center justify-center">
            12
          </div>

        </div>

      </div>

      {/* Count */}
      <div className="px-5 mt-5">

        <h2 className="text-3xl font-bold text-blue-400">
          12 thông báo mới
        </h2>

        <p className="text-gray-400 mt-1">
          Cập nhật lúc 09:41, hôm nay
        </p>

      </div>

      {/* AI Summary */}
      <div className="mx-4 mt-5 bg-white/5 border border-white/10 rounded-3xl p-5">

        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="text-blue-400" />
          <h3 className="font-bold text-lg">
            Tóm tắt các thông báo quan trọng
          </h3>
        </div>

        <ul className="space-y-3 text-gray-300">
          <li>🔴 Còn nợ 2.000.000 VNĐ học phí</li>
          <li>🔵 Hạn đóng học phí còn 5 ngày</li>
          <li>⚪ Đăng ký học phần bắt đầu từ tuần sau</li>
          <li>🔵 Có 2 lịch thi mới</li>
        </ul>

        <button className="w-full mt-5 bg-blue-600 py-3 rounded-xl font-semibold">
          Xem phân tích chi tiết
        </button>

      </div>

      {/* Emergency */}
      <div className="px-4 mt-6">

        <h2 className="text-xl font-bold mb-4">
          Thông báo khẩn cấp
        </h2>

        <div className="bg-white/5 border border-blue-500 rounded-3xl p-5">

          <div className="flex justify-between mb-4">

            <span className="bg-red-500 px-3 py-1 rounded-full text-xs font-bold">
              KHẨN CẤP
            </span>

            <span className="text-gray-400">
              01/07
            </span>

          </div>

          <h3 className="text-xl font-semibold">
            Mở đăng ký học phần học kỳ 1
            năm học 2026-2027
          </h3>

          <button className="w-full mt-5 bg-blue-600 py-3 rounded-xl">
            Xem chi tiết
          </button>

        </div>

      </div>

      {/* Search */}
      <div className="px-4 mt-6">

        <div className="bg-white/5 rounded-2xl flex items-center px-4 py-4">

          <Search className="text-gray-400" size={20} />

          <input
            placeholder="Tìm kiếm thông báo..."
            className="bg-transparent outline-none flex-1 ml-3"
          />

        </div>

      </div>

      {/* Filter */}
      <div className="flex gap-3 px-4 mt-5 overflow-x-auto">

        <button className="bg-blue-600 px-6 py-3 rounded-full whitespace-nowrap">
          Tất cả
        </button>

        <button className="bg-white/10 px-6 py-3 rounded-full whitespace-nowrap">
          Chưa đọc
        </button>

        <button className="bg-white/10 px-6 py-3 rounded-full whitespace-nowrap">
          Quan trọng
        </button>

      </div>

      {/* Today Tasks */}
      <div className="mx-4 mt-6 bg-white/5 border border-white/10 rounded-3xl p-5">

        <h2 className="font-bold text-xl mb-4">
          Việc cần làm hôm nay
        </h2>

        <div className="space-y-3">

          <Task color="bg-red-500">
            Đóng học phí trước ngày 30/06
          </Task>

          <Task color="bg-yellow-500">
            Đăng ký môn học mới
          </Task>

          <Task color="bg-green-500">
            Xem lịch thi học kỳ
          </Task>

        </div>

      </div>

      {/* All Notifications */}
      <div className="px-4 mt-6">

        <h2 className="text-xl font-bold mb-4">
          Tất cả thông báo
        </h2>

        <div className="space-y-4">

          {notifications.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-4"
            >

              <div className="flex justify-between">

                <div className="flex gap-4">

                  <div
                    className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}
                  >
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      {item.desc}
                    </p>

                  </div>

                </div>

                <span className="text-xs text-gray-500">
                  {item.time}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* AI Ask */}
      <div className="mx-4 mt-6 bg-blue-900/30 border border-blue-500/20 rounded-3xl p-5">

        <div className="flex items-center gap-2 mb-4">

          <MessageSquare />

          <h2 className="text-xl font-bold">
            Hỏi AI về thông báo
          </h2>

        </div>

        <div className="flex gap-2 flex-wrap mb-4">

          <button className="bg-white/10 px-3 py-2 rounded-full">
            Hạn đóng học phí?
          </button>

          <button className="bg-white/10 px-3 py-2 rounded-full">
            Đăng ký học phần?
          </button>

        </div>

        <div className="bg-[#071B3D] rounded-2xl p-3 flex items-center">

          <input
            placeholder="Tôi cần làm gì trong tuần này?"
            className="bg-transparent outline-none flex-1"
          />

          <button className="bg-blue-600 p-3 rounded-xl">
            <Send size={18} />
          </button>

        </div>

      </div>

      </div>
    </AILayout>
  );
}

function Task({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">

      <div className={`w-3 h-3 rounded-full ${color}`}></div>

      <span>{children}</span>

    </div>
  );
}
