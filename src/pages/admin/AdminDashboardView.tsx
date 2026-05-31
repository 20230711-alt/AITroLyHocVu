import {
  Bell,
  User,
  Plus,
  Search,
  Send,
  FileText,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

export default function AdminDashboardView() {
  return (
    <div className="min-h-screen bg-[#03142E] text-white p-4 pb-24">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-3xl font-bold text-blue-500">
            System
          </h1>

          <h1 className="text-3xl font-bold text-blue-500">
            Overview
          </h1>
        </div>

        <div className="flex gap-3 items-center">

          <Bell size={20} />

          <img
            src="https://i.pravatar.cc/100"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />

        </div>

      </div>

      {/* STATS */}

      <div className="space-y-4">

        <StatCard
          title="TỔNG SINH VIÊN"
          value="5.240"
          growth="+12%"
        />

        <StatCard
          title="TÀI LIỆU"
          value="1.250"
          growth="+5%"
        />

        <StatCard
          title="LƯỢT HỎI AI"
          value="125k"
          growth="+28%"
        />

        <StatCard
          title="NGƯỜI DÙNG HOẠT ĐỘNG"
          value="3.850"
          growth="+8%"
        />

      </div>

      {/* STUDENT MANAGEMENT */}

      <SectionCard title="Quản lý hồ sơ và trạng thái học tập">

        <div className="flex gap-2 mb-3">

          <div className="flex-1 flex items-center gap-2 bg-[#0D2348] rounded-xl px-3 py-2">

            <Search size={16} />

            <input
              placeholder="Tìm sinh viên..."
              className="bg-transparent outline-none w-full"
            />

          </div>

          <button className="bg-blue-600 px-4 rounded-xl">
            <Plus size={18} />
          </button>

        </div>

        <table className="w-full text-sm">

          <thead>
            <tr className="text-gray-400">
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Trạng thái</th>
            </tr>
          </thead>

          <tbody>

            <StudentRow
              id="SV001"
              name="Nguyễn Văn A"
              status="ĐANG HỌC"
              color="green"
            />

            <StudentRow
              id="SV002"
              name="Trần Thị B"
              status="BẢO LƯU"
              color="yellow"
            />

            <StudentRow
              id="SV003"
              name="Lê Hoàng Nam"
              status="ĐANG HỌC"
              color="green"
            />

          </tbody>

        </table>

      </SectionCard>

      {/* AI ANALYTICS */}

      <SectionCard title="AI Phân tích hệ thống">

        <div className="space-y-3">

          <InfoBox
            icon={<BookOpen size={18} />}
            text="80% sinh viên nộp học phí. Cần nhắc các phần FA còn nợ."
          />

          <InfoBox
            icon={<FileText size={18} />}
            text='Tài liệu "Giải tích 1.pdf" được truy cập nhiều nhất.'
          />

          <InfoBox
            icon={<AlertTriangle size={18} />}
            text="120 sinh viên chưa hoàn thành học phí học kỳ."
          />

        </div>

        <div className="mt-5">

          <h4 className="text-sm mb-2 text-gray-400">
            Xu hướng câu hỏi AI
          </h4>

          <div className="flex items-end gap-2 h-32">

            {[50,80,110,90,120,100,60].map((h,i)=>(
              <div
                key={i}
                className="flex-1 bg-blue-600 rounded-t-lg"
                style={{height:`${h}px`}}
              />
            ))}

          </div>

        </div>

      </SectionCard>

      {/* DOCUMENTS */}

      <SectionCard title="Tài liệu">

        <DocumentItem
          name="Giải tích 1.pdf"
          desc="Đại cương • 12 MB"
        />

        <DocumentItem
          name="Java Core.pdf"
          desc="CNTT • 3.5 MB"
        />

        <DocumentItem
          name="AI Fundamentals.pdf"
          desc="AI • 12 MB"
        />

      </SectionCard>

      {/* FAQ */}

      <SectionCard title="FAQ">

        <FaqItem text="Học phí thường được đóng vào đầu mỗi học kỳ." />

        <FaqItem text="Hoàn thành ít nhất 135 tín chỉ và có chứng chỉ." />

        <FaqItem text="Sinh viên truy cập cổng thông tin để đăng ký." />

      </SectionCard>

      {/* SEND NOTIFICATION */}

      <SectionCard title="Gửi thông báo">

        <input
          placeholder="Tiêu đề"
          className="w-full bg-[#0D2348] rounded-xl p-3 mb-3"
        />

        <select className="w-full bg-[#0D2348] rounded-xl p-3 mb-3">
          <option>Tất cả sinh viên</option>
          <option>Khoa CNTT</option>
          <option>Khoa Kinh tế</option>
        </select>

        <textarea
          rows={4}
          placeholder="Nội dung"
          className="w-full bg-[#0D2348] rounded-xl p-3 mb-3"
        />

        <button className="w-full bg-blue-600 py-3 rounded-xl flex justify-center gap-2">

          <Send size={18} />

          Gửi thông báo

        </button>

      </SectionCard>

      {/* FOOTER */}

      <div className="mt-8 bg-[#0D2348] rounded-3xl p-5">

        <h2 className="text-3xl font-bold">
          Bảo mật hệ thống
          <br />
          đang ở mức tối ưu
        </h2>

        <p className="text-gray-400 mt-3">
          Toàn bộ dữ liệu sinh viên được mã hóa
          đầu cuối và giám sát bởi AI 24/7.
        </p>

      </div>

    </div>
  );
}

function StatCard({
  title,
  value,
  growth,
}: any) {
  return (
    <div className="bg-[#0D2348] rounded-2xl p-4">

      <p className="text-xs text-gray-400">
        {title}
      </p>

      <div className="flex justify-between items-center mt-2">

        <h2 className="text-5xl font-bold text-blue-500">
          {value}
        </h2>

        <span className="text-green-400">
          {growth}
        </span>

      </div>

      <div className="h-1 bg-blue-600 mt-4 rounded-full" />

    </div>
  );
}

function SectionCard({
  title,
  children,
}: any) {
  return (
    <div className="bg-[#0D2348] rounded-3xl p-4 mt-5">

      <h3 className="font-bold text-lg mb-4">
        {title}
      </h3>

      {children}

    </div>
  );
}

function StudentRow({
  id,
  name,
  status,
  color,
}: any) {
  return (
    <tr className="border-t border-white/10">

      <td className="py-3">{id}</td>

      <td>{name}</td>

      <td>

        <span
          className={`px-2 py-1 rounded-lg text-xs ${
            color === "green"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {status}
        </span>

      </td>

    </tr>
  );
}

function InfoBox({
  icon,
  text,
}: any) {
  return (
    <div className="bg-[#142B57] rounded-xl p-3 flex gap-3">

      {icon}

      <span>{text}</span>

    </div>
  );
}

function DocumentItem({
  name,
  desc,
}: any) {
  return (
    <div className="bg-[#142B57] rounded-xl p-3 mb-2">

      <div className="font-medium">
        {name}
      </div>

      <div className="text-sm text-gray-400">
        {desc}
      </div>

    </div>
  );
}

function FaqItem({
  text,
}: any) {
  return (
    <div className="bg-[#142B57] rounded-xl p-3 mb-2">
      {text}
    </div>
  );
}