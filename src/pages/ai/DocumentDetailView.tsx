import {
  ArrowLeft,
  Eye,
  Download,
  Share2,
  FileText,
  Database,
  BookOpen,
  MessageSquare,
  Send,
  PlusCircle,
  GraduationCap,
  Upload,
} from 'lucide-react';
import { UserSession } from '../../types';

interface DocumentDetailViewProps {
  onBack?: () => void;
  user?: UserSession | null;
}

export default function DocumentDetailView({ onBack, user }: DocumentDetailViewProps) {
  const avatar = user?.avatar || '/assets/images/default-avatar.svg';
  return (
    <div className="min-h-screen bg-[#04152E] text-white pb-28">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">

        <div className="flex items-center gap-3">
          <button onClick={onBack}>
            <ArrowLeft size={22} />
          </button>

          <h1 className="text-2xl font-bold">
            Chi tiết tài liệu
          </h1>
        </div>

        <img src={avatar} alt="" className="w-11 h-11 rounded-full border-2 border-blue-500" />

      </div>

      {/* File Info */}
      <div className="mx-4 mt-5 bg-white/5 border border-white/10 rounded-3xl p-5">

        <div className="flex gap-4">

          <div className="w-20 h-20 bg-red-500/20 rounded-2xl flex items-center justify-center">
            <FileText size={40} className="text-red-400" />
          </div>

          <div className="flex-1">

            <h2 className="text-3xl font-bold">
              Giải tích 1.pdf
            </h2>

            <div className="grid grid-cols-2 gap-y-3 mt-4 text-gray-300 text-sm">

              <div>📦 15 MB</div>
              <div>📖 120 trang</div>
              <div>📅 15/05/2026</div>
              <div>🎓 Khoa CNTT</div>

            </div>

          </div>

        </div>

        <div className="grid grid-cols-3 gap-3 mt-6">

          <button className="bg-blue-600 py-4 rounded-2xl flex items-center justify-center gap-2 font-semibold">
            <Eye size={18} />
            Xem PDF
          </button>

          <button className="bg-white/10 py-4 rounded-2xl flex items-center justify-center gap-2">
            <Download size={18} />
            Tải xuống
          </button>

          <button className="bg-white/10 py-4 rounded-2xl flex items-center justify-center">
            <Share2 size={18} />
          </button>

        </div>

      </div>

      {/* AI Summary */}
      <div className="mx-4 mt-5 border border-blue-500 rounded-3xl p-5 bg-blue-500/5">

        <div className="flex justify-between items-center mb-5">

          <div className="flex items-center gap-2">
            <Database className="text-blue-400" />
            <h2 className="text-2xl font-bold">
              Tóm tắt AI
            </h2>
          </div>

          <div className="flex gap-2">

            <button className="bg-blue-600 px-4 py-2 rounded-xl text-sm">
              NGẮN
            </button>

            <button className="bg-white/10 px-4 py-2 rounded-xl text-sm">
              CHI TIẾT
            </button>

          </div>

        </div>

        <p className="text-gray-300 leading-8">
          Tài liệu này trình bày các khái niệm cơ bản
          về giới hạn, đạo hàm, vi phân, tích phân và
          các ứng dụng trong toán học. Nội dung được
          cấu trúc dễ hiểu giúp sinh viên nắm bắt
          kiến thức nền tảng cho các học phần chuyên
          sâu hơn.
        </p>

        <div className="grid grid-cols-2 gap-3 mt-5">

          <button className="bg-white/5 border border-white/10 py-3 rounded-xl">
            Tóm tắt theo chương
          </button>

          <button className="bg-white/5 border border-white/10 py-3 rounded-xl">
            Trích xuất công thức
          </button>

        </div>

      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 px-4 mt-5">

        {[
          '#ĐạoHàm',
          '#GiớiHạn',
          '#TíchPhân',
          '#ViPhân',
          '#HàmSố',
        ].map((tag) => (
          <span
            key={tag}
            className="bg-white/5 border border-white/10 px-4 py-2 rounded-full"
          >
            {tag}
          </span>
        ))}

      </div>

      {/* Flashcards */}
      <div className="px-4 mt-8">

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2">

            <BookOpen className="text-yellow-400" />

            <h2 className="text-3xl font-bold">
              Flashcard học tập
            </h2>

          </div>

          <button className="text-blue-400">
            Tất cả →
          </button>

        </div>

        <div className="bg-blue-900/30 border border-white/10 rounded-3xl p-5 mt-4">

          <p className="text-blue-300 text-sm uppercase">
            Câu hỏi
          </p>

          <h3 className="text-2xl font-bold mt-2">
            Đạo hàm là gì?
          </h3>

          <hr className="border-white/10 my-5" />

          <p className="text-green-400 text-sm uppercase">
            Câu trả lời
          </p>

          <p className="text-gray-300 mt-3">
            Đạo hàm biểu diễn tốc độ thay đổi của
            hàm số tại một điểm.
          </p>

        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">

          <button className="bg-white/5 border border-white/10 py-5 rounded-2xl flex flex-col items-center gap-2">
            <PlusCircle />
            <span>THÊM</span>
          </button>

          <button className="bg-white/5 border border-white/10 py-5 rounded-2xl flex flex-col items-center gap-2">
            <GraduationCap />
            <span>HỌC</span>
          </button>

          <button className="bg-white/5 border border-white/10 py-5 rounded-2xl flex flex-col items-center gap-2">
            <Upload />
            <span>XUẤT</span>
          </button>

        </div>

      </div>

      {/* QA */}
      <div className="px-4 mt-8">

        <div className="flex items-center gap-2 mb-4">

          <MessageSquare className="text-blue-400" />

          <h2 className="text-3xl font-bold">
            Hỏi đáp tài liệu
          </h2>

        </div>

        <div className="flex flex-wrap gap-3 mb-5">

          <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            Đạo hàm là gì?
          </button>

          <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            Chương 2 nói gì?
          </button>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl flex items-center p-3">

          <input
            type="text"
            placeholder="Hỏi bất kỳ điều gì về tài liệu này"
            className="bg-transparent outline-none flex-1"
          />

          <button className="bg-blue-600 p-3 rounded-xl">
            <Send />
          </button>

        </div>

      </div>

    </div>
  );
}