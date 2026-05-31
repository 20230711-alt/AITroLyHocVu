import {
  ArrowLeft,
  Settings,
  FileText,
  MapPin,
  BookOpen,
  Copy,
  Sparkles,
  Send,
  Paperclip,
} from 'lucide-react';

interface DocumentChatViewProps {
  onBack?: () => void;
}

export default function DocumentChatView({
  onBack,
}: DocumentChatViewProps) {
  return (
    <div className="min-h-screen bg-[#020B1F] text-white pb-32">

      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt=""
            className="w-12 h-12 rounded-full"
          />

          <h1 className="text-4xl font-bold text-blue-100">
            StudyAI
          </h1>

        </div>

        <Settings
          className="text-gray-300"
          size={22}
        />

      </div>

      {/* Document Info */}
      <div className="bg-white/5 border-y border-white/10 p-4">

        <div className="flex gap-4">

          <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <FileText className="text-blue-400" />
          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Giải tích 1.pdf
            </h2>

            <p className="text-gray-400 mt-1">
              120 trang • Đã lập chỉ mục •
              <span className="text-green-400 ml-2">
                Sẵn sàng trả lời
              </span>
            </p>

          </div>

        </div>

      </div>

      {/* User Question */}
      <div className="flex justify-end px-4 mt-8">

        <div className="bg-blue-600 px-8 py-5 rounded-3xl max-w-[80%] text-xl shadow-lg">
          Định nghĩa đạo hàm là gì?
        </div>

      </div>

      {/* AI Answer */}
      <div className="px-4 mt-8">

        <div className="bg-white/5 border-l-4 border-blue-500 rounded-3xl p-5">

          <p className="text-2xl leading-10">

            Theo tài liệu

            <span className="text-blue-400 font-semibold">
              {' '}Giải tích 1:
            </span>

            {' '}
            "Đạo hàm của hàm số tại một điểm đặc
            trưng cho tốc độ biến thiên của hàm số
            tại điểm đó."

          </p>

          <hr className="border-white/10 my-5" />

          <div className="flex items-center gap-2 text-gray-400 mb-5">

            <MapPin size={18} />

            Nguồn: Trang 24

          </div>

          <div className="grid grid-cols-2 gap-3">

            <button className="bg-white/5 border border-white/10 py-3 rounded-xl flex items-center justify-center gap-2">
              <BookOpen size={18} />
              Mở trang nguồn
            </button>

            <button className="bg-white/5 border border-white/10 py-3 rounded-xl flex items-center justify-center gap-2">
              <Copy size={18} />
              Sao chép
            </button>

          </div>

          <button className="mt-4 bg-blue-600 px-5 py-3 rounded-xl flex items-center gap-2">

            <Sparkles size={18} />

            Giải thích dễ hiểu

          </button>

        </div>

      </div>

      {/* User Question 2 */}
      <div className="flex justify-end px-4 mt-8">

        <div className="bg-blue-600 px-8 py-5 rounded-3xl max-w-[75%] text-xl">
          Tóm tắt chương 3
        </div>

      </div>

      {/* Summary */}
      <div className="px-4 mt-8">

        <div className="bg-white/5 border-l-4 border-blue-500 rounded-3xl p-5">

          <div className="flex items-center gap-3 mb-5">

            <FileText className="text-blue-400" />

            <h2 className="text-3xl font-bold">
              Tóm tắt Chương 3:
              Ứng dụng đạo hàm
            </h2>

          </div>

          <ul className="space-y-5 text-xl text-gray-300 leading-9">

            <li>
              🔹 <b>Tính đơn điệu của hàm số:</b>
              {' '}Sử dụng dấu đạo hàm bậc nhất để
              xác định khoảng đồng biến và nghịch biến.
            </li>

            <li>
              🔹 <b>Cực trị hàm số:</b>
              {' '}Quy tắc tìm điểm cực đại,
              cực tiểu thông qua đạo hàm.
            </li>

            <li>
              🔹 <b>Giá trị lớn nhất và nhỏ nhất:</b>
              {' '}Phương pháp tìm GTLN/GTNN.
            </li>

            <li>
              🔹 <b>Tiệm cận:</b>
              {' '}Xác định tiệm cận đứng,
              ngang và xiên.
            </li>

          </ul>

          <div className="grid grid-cols-2 gap-3 mt-6">

            <button className="bg-white/5 border border-white/10 py-3 rounded-xl">
              Tóm tắt tài liệu
            </button>

            <button className="bg-white/5 border border-white/10 py-3 rounded-xl">
              Tạo câu hỏi ôn tập
            </button>

          </div>

        </div>

      </div>

      {/* Chat Input */}
      <div className="fixed bottom-20 left-0 right-0 px-4">

        <div className="bg-[#071B3D] border border-white/10 rounded-3xl flex items-center p-3">

          <button className="p-2">
            <Paperclip />
          </button>

          <input
            type="text"
            placeholder="Hỏi về tài liệu này..."
            className="flex-1 bg-transparent outline-none px-3"
          />

          <button className="bg-blue-600 p-4 rounded-2xl">
            <Send />
          </button>

        </div>

      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white text-gray-700 py-3">

        <div className="grid grid-cols-5 text-center">

          <div>
            <p className="text-xs">Dashboard</p>
          </div>

          <div>
            <p className="text-xs">Documents</p>
          </div>

          <div className="flex flex-col items-center">

            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white -mt-8">
              🤖
            </div>

            <p className="text-xs text-blue-600 font-bold mt-1">
              AI Chat
            </p>

          </div>

          <div>
            <p className="text-xs">Results</p>
          </div>

          <div>
            <p className="text-xs">Profile</p>
          </div>

        </div>

      </div>

    </div>
  );
}