import {
  ArrowLeft,
  Bell,
  Calendar,
  User,
  MapPin,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import AILayout from '../../components/AILayout';

interface ScheduleViewProps {
  onBack?: () => void;
}

export default function ScheduleView({
  onBack,
}: ScheduleViewProps) {
  const classes = [
    {
      status: 'Sắp diễn ra',
      subject: 'Cơ sở dữ liệu',
      teacher: 'Prof. Nguyễn Văn A',
      room: 'Room A305',
      time: '08:00 - 10:30',
    },
    {
      status: '',
      subject: 'Lập trình Web',
      teacher: 'Prof. Trần Thị B',
      room: 'Room B202',
      time: '13:00 - 15:30',
    },
    {
      status: 'Tối nay',
      subject: 'Trí tuệ nhân tạo',
      teacher: 'Prof. Lê Văn C',
      room: 'Room Lab AI',
      time: '17:00 - 19:00',
    },
  ];

  const exams = [
    {
      name: 'Thi Cơ sở dữ liệu',
      date: '15/06/2026',
    },
    {
      name: 'Thi Lập trình Web',
      date: '20/06/2026',
    },
  ];

  return (
    <AILayout>
      <div className="min-h-screen bg-[#020B1F] text-white pb-28">

      {/* Header */}
      <div className="bg-[#071B3D] px-5 py-4 flex justify-between items-center border-b border-white/10">

        <div className="flex items-center gap-3">
          <button onClick={onBack}>
            <ArrowLeft size={22} />
          </button>

          <h1 className="font-bold text-lg">
            Thời khóa biểu
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Bell size={18} />

          <img
            src="https://i.pravatar.cc/100?img=12"
            className="w-10 h-10 rounded-full border border-blue-500"
          />
        </div>

      </div>

      {/* Tabs */}
      <div className="px-4 mt-5">
        <div className="bg-white/5 rounded-2xl p-1 flex">

          <button className="flex-1 bg-blue-600 py-3 rounded-xl font-medium">
            Day View
          </button>

          <button className="flex-1 text-gray-400">
            Week View
          </button>

        </div>
      </div>

      {/* Date */}
      <div className="px-5 mt-5 flex items-center gap-3">

        <Calendar size={20} className="text-blue-400" />

        <span>
          Hôm nay - Thứ Hai, 01/06/2026
        </span>

      </div>

      {/* Timeline */}
      <div className="px-5 mt-6">

        {classes.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 mb-5"
          >

            <div className="flex flex-col items-center">

              <div className="w-4 h-4 rounded-full bg-blue-500"></div>

              {index !== classes.length - 1 && (
                <div className="w-[2px] h-44 bg-gray-600"></div>
              )}

            </div>

            <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-5">

              <div className="flex justify-between">

                <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full">
                  {item.status}
                </span>

                <span className="text-gray-400">
                  {item.time}
                </span>

              </div>

              <h3 className="text-2xl font-semibold mt-4">
                {item.subject}
              </h3>

              <div className="mt-4 space-y-2 text-gray-400">

                <div className="flex items-center gap-2">
                  <User size={16} />
                  {item.teacher}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {item.room}
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 px-4">

        <StatCard
          title="Tổng môn tuần này"
          value="12"
        />

        <StatCard
          title="Tổng số tiết"
          value="28"
        />

        <StatCard
          title="Buổi học hôm nay"
          value="2"
        />

        <StatCard
          title="Phòng tiếp theo"
          value="B202"
        />

      </div>

      {/* Next Class */}
      <div className="mx-4 mt-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-5">

        <div className="flex items-center gap-2 text-sm uppercase font-semibold">

          <BookOpen size={18} />

          Lớp học tiếp theo

        </div>

        <h2 className="text-3xl font-bold mt-4">
          Lập trình Web
        </h2>

        <p className="mt-2 text-white/90">
          13:00 - 15:30 • Room B202
        </p>

        <div className="bg-white/20 rounded-xl p-3 w-fit mt-5">

          <p className="text-sm">
            Còn lại
          </p>

          <p className="font-bold text-xl">
            2 giờ 15 phút
          </p>

        </div>

        <button className="w-full bg-white text-blue-600 font-bold py-4 rounded-2xl mt-5">
          Xem chi tiết
        </button>

      </div>

      {/* Exams */}
      <div className="mx-4 mt-6 bg-white/5 border border-white/10 rounded-3xl p-5">

        <h2 className="text-xl font-bold mb-4">
          Lịch thi sắp tới
        </h2>

        <div className="space-y-3">

          {exams.map((exam, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-4 flex justify-between"
            >

              <span>{exam.name}</span>

              <span className="text-gray-400">
                {exam.date}
              </span>

            </div>
          ))}

        </div>

        <button className="w-full mt-5 text-blue-400">
          Xem toàn bộ lịch thi
        </button>

      </div>

      {/* AI */}
      <div className="mx-4 mt-6 bg-white/5 border border-white/10 rounded-3xl p-5">

        <div className="flex items-center gap-2 mb-4">

          <Sparkles />

          <h2 className="font-bold text-xl">
            Hỏi AI về lịch trình
          </h2>

        </div>

        <div className="flex flex-wrap gap-2">

          {[
            'Hôm nay tôi học những môn nào?',
            'Tuần này có bao nhiêu buổi học?',
            'Khi nào tôi có tiết học tiếp theo?',
          ].map((item) => (
            <button
              key={item}
              className="bg-white/10 px-4 py-2 rounded-full text-sm"
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      </div>
    </AILayout>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-3 text-blue-400">
        {value}
      </h3>

    </div>
  );
}
