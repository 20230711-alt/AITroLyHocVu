import {
  ArrowLeft,
  Search,
  Filter,
  GraduationCap,
  Trophy,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import AILayout from '../../components/AILayout';

interface GradesViewProps {
  onBack?: () => void;
}

export default function GradesView({
  onBack,
}: GradesViewProps) {
  const subjects = [
    {
      name: 'Cơ sở dữ liệu',
      credits: 3,
      qt: 8.5,
      thi: 8.3,
      total: 8.4,
    },
    {
      name: 'Lập trình Java',
      credits: 4,
      qt: 9.5,
      thi: 8.8,
      total: 9.0,
    },
    {
      name: 'Lập trình Web',
      credits: 3,
      qt: 8.0,
      thi: 8.8,
      total: 8.5,
    },
    {
      name: 'Trí tuệ nhân tạo',
      credits: 3,
      qt: 7.5,
      thi: 8.2,
      total: 8.0,
    },
    {
      name: 'Mạng máy tính',
      credits: 3,
      qt: 9.0,
      thi: 8.5,
      total: 8.7,
    },
    {
      name: 'Hệ điều hành',
      credits: 3,
      qt: 8.1,
      thi: 8.4,
      total: 8.3,
    },
  ];

  return (
    <AILayout>
      <div className="min-h-screen bg-gradient-to-b from-[#04152E] via-[#071B3D] to-[#021024] text-white pb-28">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">

        <div className="flex items-center gap-3">
          <button onClick={onBack}>
            <ArrowLeft size={22} />
          </button>

          <h1 className="text-xl font-semibold">
            Kết quả học tập
          </h1>
        </div>

        <img
          src="https://i.pravatar.cc/150?img=32"
          className="w-11 h-11 rounded-full border border-blue-500"
        />
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-4 px-4 mt-5">

        <StatCard
          icon={<GraduationCap />}
          title="GPA Hiện tại"
          value="3.45 / 4.0"
        />

        <StatCard
          icon={<BarChart3 />}
          title="CPA Tích lũy"
          value="3.40 / 4.0"
        />

        <StatCard
          icon={<Trophy />}
          title="Xếp loại"
          value="Giỏi"
          green
        />

      </div>

      {/* Trend */}
      <div className="mx-4 mt-5 bg-white/5 border border-white/10 rounded-3xl p-5">

        <div className="flex justify-between mb-4">
          <h2 className="font-bold">
            Xu hướng điểm số
          </h2>

          <span className="text-sm text-gray-400">
            4 học kỳ gần nhất
          </span>
        </div>

        <div className="h-52 flex items-end justify-between gap-3">

          {[70, 80, 75, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-blue-500 rounded-t-xl"
              style={{
                height: `${h}%`,
              }}
            />
          ))}
        </div>

        <div className="flex justify-between text-sm text-gray-400 mt-3">
          <span>HK1</span>
          <span>HK2</span>
          <span>HK3</span>
          <span>HK4</span>
        </div>

      </div>

      {/* Detail */}
      <div className="mx-4 mt-5 bg-white/5 border border-white/10 rounded-3xl p-5">

        <h2 className="font-bold text-lg mb-4">
          Thống kê chi tiết
        </h2>

        <div className="space-y-3">

          <Row
            label="Tổng tín chỉ"
            value="102"
          />

          <Row
            label="Tổng số môn"
            value="35"
          />

          <Row
            label="Môn cao nhất"
            value="Lập trình Java (9.0)"
          />

          <Row
            label="Môn thấp nhất"
            value="Trí tuệ nhân tạo (8.0)"
          />

        </div>

      </div>

      {/* Search */}
      <div className="mx-4 mt-5 flex gap-3">

        <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-2">

          <Search size={18} />

          <input
            placeholder="Tìm kiếm học phần..."
            className="bg-transparent outline-none flex-1"
          />
        </div>

        <button className="bg-white/5 border border-white/10 rounded-2xl px-4">
          <Filter />
        </button>

      </div>

      {/* Semester */}
      <div className="mx-4 mt-4">
        <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
          <option>
            Học kỳ 2 - 2023-2024
          </option>
        </select>
      </div>

      {/* Table */}
      <div className="mx-4 mt-5 bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-white/10">
            <tr>
              <th className="p-3 text-left">
                Tên học phần
              </th>

              <th>Tín chỉ</th>

              <th>QT</th>

              <th>Thi</th>

              <th>Tổng</th>
            </tr>
          </thead>

          <tbody>

            {subjects.map((subject, index) => (
              <tr
                key={index}
                className="border-t border-white/10"
              >
                <td className="p-3">
                  {subject.name}
                </td>

                <td>{subject.credits}</td>

                <td>{subject.qt}</td>

                <td>{subject.thi}</td>

                <td
                  className={`font-bold ${
                    subject.total >= 8.5
                      ? 'text-blue-400'
                      : subject.total < 8.1
                      ? 'text-red-400'
                      : 'text-white'
                  }`}
                >
                  {subject.total}
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>

      {/* GPA Scale */}
      <div className="mx-4 mt-5 bg-white/5 border border-white/10 rounded-3xl p-5">

        <h2 className="font-bold mb-4">
          Thang phân loại học thuật
        </h2>

        <div className="h-4 bg-gray-700 rounded-full overflow-hidden flex">

          <div className="bg-red-500 w-1/4" />

          <div className="bg-yellow-500 w-1/4" />

          <div className="bg-blue-500 w-1/4" />

          <div className="bg-green-500 w-1/4" />

        </div>

        <p className="text-center mt-3 text-blue-400 font-bold">
          GPA: 3.45
        </p>

      </div>

      {/* AI Box */}
      <div className="mx-4 mt-5 bg-blue-900/50 border border-blue-500/30 rounded-3xl p-5">

        <div className="flex items-center gap-2 mb-4">
          <Sparkles />
          <h2 className="font-bold">
            Hãy hỏi AI về kết quả học tập
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">

          {[
            'GPA tính thế nào?',
            'Số tín chỉ tốt nghiệp?',
            'Môn cần cải thiện?',
            'Dự đoán GPA kỳ tới',
          ].map((item) => (
            <button
              key={item}
              className="bg-white/10 px-4 py-2 rounded-xl text-sm"
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
  icon,
  title,
  value,
  green,
}: any) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-5 flex items-center gap-4">

      <div className="bg-blue-600/20 p-3 rounded-xl">
        {icon}
      </div>

      <div>
        <p className="text-gray-400 text-sm">
          {title}
        </p>

        <h3
          className={`text-xl font-bold ${
            green ? 'text-green-400' : ''
          }`}
        >
          {value}
        </h3>
      </div>

    </div>
  );
}

function Row({
  label,
  value,
}: any) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-400">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>
    </div>
  );
}
