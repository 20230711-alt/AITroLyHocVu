import {
  Bell,
  GraduationCap,
  CreditCard,
  BookOpen,
  Calendar,
  TrendingUp,
  Sparkles,
  Send,
  FileText,
  ClipboardCheck,
  Clock,
  UserCircle,
} from 'lucide-react';
import AILayout from '../../components/AILayout';

export default function StudentDashboardView() {
  const notifications = [
    {
      title: 'Nhắc nhở đóng học phí kỳ 2',
      time: 'Hạn chót: 15/10/2026',
      icon: CreditCard,
      color: 'text-red-400',
    },
    {
      title: 'Mở đăng ký môn học bổ sung',
      time: '05/10 - 10/10',
      icon: BookOpen,
      color: 'text-blue-400',
    },
    {
      title: 'Kết quả phúc khảo học phần AI',
      time: 'Vừa xong',
      icon: ClipboardCheck,
      color: 'text-green-400',
    },
    {
      title: 'Lịch thi học kỳ chính thức',
      time: '1 ngày trước',
      icon: Calendar,
      color: 'text-yellow-400',
    },
  ];

  return (
    <AILayout>
      <div className="min-h-screen bg-gradient-to-b from-[#07132A] via-[#081935] to-[#050D20] text-white pb-28">

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-6">
        <div>
          <h1 className="text-4xl font-bold">
            Xin chào, Thùy Linh 👋
          </h1>

          <p className="text-gray-400 mt-2">
            Chúc bạn có một ngày học tập hiệu quả
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Bell size={22} />
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt=""
            className="w-12 h-12 rounded-full border-2 border-blue-500"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 px-5 mt-6">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-4">
          <GraduationCap className="text-blue-400 mb-3" />
          <p className="text-gray-400 text-sm">GPA HIỆN TẠI</p>
          <h3 className="text-3xl font-bold">
            3.45
            <span className="text-lg text-gray-400"> /4.0</span>
          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-4">
          <CreditCard className="text-red-400 mb-3" />
          <p className="text-gray-400 text-sm">HỌC PHÍ NỢ</p>
          <h3 className="text-3xl font-bold text-red-400">
            2.000.000đ
          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-4">
          <BookOpen className="text-indigo-400 mb-3" />
          <p className="text-gray-400 text-sm">TÍN CHỈ</p>
          <h3 className="text-3xl font-bold">102</h3>
          <p className="text-gray-400 text-sm">tích lũy</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-4">
          <Calendar className="text-white mb-3" />
          <p className="text-gray-400 text-sm">
            LỊCH HÔM NAY
          </p>
          <h3 className="text-3xl font-bold">2</h3>
          <p className="text-gray-400 text-sm">môn học</p>
        </div>
      </div>

      {/* Schedule */}
      <div className="mx-5 mt-6 bg-white/5 border border-white/10 rounded-3xl p-5">

        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">
            Lịch học hôm nay
          </h2>

          <button className="text-blue-400 text-sm">
            Xem đầy đủ
          </button>
        </div>

        <div className="space-y-3">

          <div className="bg-[#101F3F] rounded-2xl p-4 flex justify-between">
            <div>
              <p className="text-2xl font-bold">
                08:00
              </p>
              <p className="text-gray-400">10:00</p>
            </div>

            <div className="flex-1 px-5">
              <h3 className="font-semibold">
                Lập trình Web
              </h3>

              <p className="text-gray-400 text-sm">
                A305
              </p>
            </div>

            <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full h-fit">
              LAB
            </span>
          </div>

          <div className="bg-[#101F3F] rounded-2xl p-4 flex justify-between">
            <div>
              <p className="text-2xl font-bold">
                13:00
              </p>
              <p className="text-gray-400">15:00</p>
            </div>

            <div className="flex-1 px-5">
              <h3 className="font-semibold">
                Trí tuệ nhân tạo
              </h3>

              <p className="text-gray-400 text-sm">
                B202
              </p>
            </div>

            <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full h-fit">
              Lý thuyết
            </span>
          </div>

        </div>
      </div>

      {/* Progress */}
      <div className="mx-5 mt-6 bg-white/5 border border-white/10 rounded-3xl p-5">

        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={20} />
          <h2 className="font-bold">
            Tiến độ học tập
          </h2>
        </div>

        <p className="mb-3 text-blue-400 font-semibold">
          73% hoàn thành
        </p>

        <div className="w-full h-3 bg-white/10 rounded-full">
          <div className="w-[73%] h-3 bg-blue-500 rounded-full"></div>
        </div>

        <div className="flex justify-between mt-3 text-sm text-gray-400">
          <span>102 tín chỉ</span>
          <span>140 tín chỉ</span>
        </div>
      </div>

      {/* AI Assistant */}
      <div className="mx-5 mt-6 bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-5">

        <div className="flex items-center gap-2 mb-4">
          <Sparkles />
          <h2 className="font-bold">
            Hỏi AI học vụ
          </h2>
        </div>

        <div className="bg-white rounded-2xl flex items-center px-4 py-3">
          <input
            placeholder="Bạn muốn hỏi điều gì?"
            className="flex-1 outline-none text-black"
          />

          <button>
            <Send className="text-blue-600" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">

          {[
            'Tra cứu điểm',
            'Xem lịch học',
            'Học phí còn nợ',
            'Điều kiện tốt nghiệp',
          ].map((item) => (
            <button
              key={item}
              className="bg-white/10 px-3 py-2 rounded-xl text-sm"
            >
              {item}
            </button>
          ))}

        </div>
      </div>

      {/* Notifications */}
      <div className="mx-5 mt-6 bg-white/5 border border-white/10 rounded-3xl p-5">

        <h2 className="font-bold text-xl mb-5">
          Thông báo mới
        </h2>

        <div className="space-y-4">

          {notifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex gap-4"
              >
                <Icon
                  className={item.color}
                  size={22}
                />

                <div>
                  <h4 className="font-medium">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {item.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#07132A] border-t border-white/10">

        <div className="grid grid-cols-5 py-3">

          <button className="flex flex-col items-center text-blue-400">
            <GraduationCap size={20} />
            <span className="text-xs mt-1">
              Dashboard
            </span>
          </button>

          <button className="flex flex-col items-center">
            <BookOpen size={20} />
            <span className="text-xs mt-1">
              Học tập
            </span>
          </button>

          <button className="flex flex-col items-center">
            <Calendar size={20} />
            <span className="text-xs mt-1">
              Lịch học
            </span>
          </button>

          <button className="flex flex-col items-center">
            <FileText size={20} />
            <span className="text-xs mt-1">
              Chat AI
            </span>
          </button>

          <button className="flex flex-col items-center">
            <UserCircle size={20} />
            <span className="text-xs mt-1">
              Hồ sơ
            </span>
          </button>

        </div>
      </div>
      </div>
    </AILayout>
  );
}
