import qrPaymentImage from "../../assets/images/qr_payment.png";
import {
  Wallet,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Bell,
  Search,
  ChevronDown,
  ChevronRight,
  ArrowDownCircle,
  Clock,
  Building2,
  CreditCard,
  User,
  MessageSquare,
} from "lucide-react";
import { UserSession } from "../../types";

interface TuitionPageProps {
  user?: UserSession | null;
}

export default function TuitionPage({ user }: TuitionPageProps) {
  const feeDetails = [
    { name: "Học phí học kỳ", amount: "10.000.000" },
    { name: "Phí cơ sở vật chất", amount: "1.000.000" },
    { name: "Phí dịch vụ sinh viên", amount: "500.000" },
    { name: "Phí thư viện", amount: "500.000" },
  ];

  const transactions = [
    {
      title: "Thanh toán học phí HK2",
      date: "15/03/2026 - 10:30",
      id: "TXN89234",
      amount: "-5.000.000 VNĐ",
      status: "Thành công",
      type: "success",
    },
    {
      title: "Thanh toán học phí HK2",
      date: "10/01/2026 - 09:15",
      id: "TXN77102",
      amount: "-5.000.000 VNĐ",
      status: "Thành công",
      type: "success",
    },
    {
      title: "Học phí học kỳ 2",
      date: "01/10/2025 - 00:00",
      id: "INV2026001",
      amount: "10.000.000 VNĐ",
      status: "Chờ thanh toán",
      type: "pending",
    },
  ];

  const paymentProgress = 83;
  // SVG circle progress: r=40, circumference = 2*pi*40 = 251.33
  const circumference = 251.33;
  const dashOffset = circumference - (paymentProgress / 100) * circumference;

  return (
    <div className="w-full flex-grow flex flex-col p-6 text-white bg-[#020B24]">

      {/* Header */}
      <header className="h-20 flex items-center justify-between mb-6 border-b border-[#0d1e3d]/60 pb-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Học phí</h1>
          <p className="text-slate-400 text-sm mt-1">
            Quản lý học phí và các khoản thanh toán của bạn.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-[300px] h-11 rounded-xl bg-[#071A3B]/60 border border-[#0d1e3d] pl-5 pr-11 text-sm outline-none placeholder-slate-500 focus:border-[#0c4ec3] focus:ring-1 focus:ring-[#0c4ec3] transition-all text-white"
            />
            <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>

          {/* Bell */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#071A3B]/60 border border-[#0d1e3d] hover:bg-[#071A3B] transition-colors outline-none">
            <Bell size={20} className="text-slate-200" />
            <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ef4444] px-1 text-[10px] font-extrabold text-white">
              3
            </span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 bg-[#071A3B]/40 border border-[#0d1e3d]/40 rounded-xl py-1.5 pl-2.5 pr-4">
            <img
              src={user?.avatar || "https://i.pravatar.cc/150?img=32"}
              alt="Avatar"
              className="w-8 h-8 rounded-full border border-cyan-400/20 object-cover"
            />
            <span className="text-sm font-semibold text-slate-200">
              {user?.name || "Thùy Linh"}
            </span>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
        </div>
      </header>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        
        {/* Tổng học phí */}
        <div className="bg-[#071A3B]/40 border border-[#0d1e3d]/80 rounded-2xl p-5 flex items-start gap-4 shadow-xl">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
            <Wallet size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold">Tổng học phí</p>
            <p className="text-lg font-extrabold text-white mt-1 leading-tight">12.000.000 VNĐ</p>
          </div>
        </div>

        {/* Đã đóng */}
        <div className="bg-[#071A3B]/40 border border-[#0d1e3d]/80 rounded-2xl p-5 flex items-start gap-4 shadow-xl">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400">
            <CheckCircle size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold">Đã đóng</p>
            <p className="text-lg font-extrabold text-white mt-1 leading-tight">10.000.000 VNĐ</p>
          </div>
        </div>

        {/* Còn nợ */}
        <div className="bg-[#071A3B]/40 border border-[#0d1e3d]/80 rounded-2xl p-5 flex items-start gap-4 shadow-xl">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600/10 border border-red-500/20 text-red-400">
            <AlertTriangle size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold">Còn nợ</p>
            <p className="text-lg font-extrabold text-red-400 mt-1 leading-tight">2.000.000 VNĐ</p>
          </div>
        </div>

        {/* Hạn đóng */}
        <div className="bg-[#071A3B]/40 border border-[#0d1e3d]/80 rounded-2xl p-5 flex items-start gap-4 shadow-xl">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400">
            <Calendar size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold">Hạn đóng</p>
            <p className="text-lg font-extrabold text-white mt-1 leading-tight">30/06/2026</p>
          </div>
        </div>

      </div>

      {/* Payment Progress */}
      <div className="bg-[#071A3B]/30 border border-[#0d1e3d]/80 rounded-2xl p-6 mb-6 shadow-2xl">
        <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wide mb-5">Tiến độ thanh toán</h3>

        <div className="flex items-center gap-8">
          
          {/* SVG circular progress */}
          <div className="relative shrink-0 flex items-center justify-center w-24 h-24">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0b1a3d" strokeWidth="9" />
              <circle
                cx="50" cy="50" r="40"
                fill="transparent"
                stroke="#3b82f6"
                strokeWidth="9"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="relative z-10 text-center">
              <span className="text-xl font-black text-white">{paymentProgress}%</span>
            </div>
          </div>

          {/* Progress text + bar */}
          <div className="flex-1">
            <p className="text-slate-300 text-sm font-semibold mb-1">Học phí của bạn chưa được thanh toán đầy đủ.</p>
            <p className="text-slate-500 text-xs mb-4">Vui lòng hoàn thành trước ngày 30/06/2026.</p>
            
            <div className="h-3 bg-[#0b1a3d] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#0c4ec3] to-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.4)] transition-all"
                style={{ width: `${paymentProgress}%` }}
              />
            </div>
            
            <div className="flex justify-between text-[11px] font-bold text-slate-500 mt-2">
              <span>Đã thanh toán: 10.000.000 VNĐ</span>
              <span>Tổng: 12.000.000 VNĐ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chi tiết học phí + Lịch sử giao dịch */}
      <div className="grid grid-cols-5 gap-6 mb-6">

        {/* Chi tiết học phí - col-span-3 */}
        <div className="col-span-3 bg-[#071A3B]/30 border border-[#0d1e3d]/80 rounded-2xl p-6 shadow-2xl flex flex-col">
          <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wide mb-5">Chi tiết học phí</h3>

          {/* Table header */}
          <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-[#0d1e3d]/60 pb-3 mb-3">
            <span>Khoản mục</span>
            <span>Số Tiền (VNĐ)</span>
          </div>

          {/* Rows */}
          <div className="space-y-4 flex-1">
            {feeDetails.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">{item.name}</span>
                <span className="text-white font-semibold">{item.amount}</span>
              </div>
            ))}
          </div>

          {/* Total row */}
          <div className="border-t border-[#0d1e3d]/60 mt-5 pt-4 flex justify-between items-center">
            <span className="text-slate-100 font-extrabold text-sm">Tổng cộng</span>
            <span className="text-blue-400 font-extrabold text-base">12.000.000 VNĐ</span>
          </div>

          {/* Pay button */}
          <button className="mt-5 w-full h-12 rounded-xl bg-[#0c4ec3] hover:bg-blue-500 text-white font-extrabold text-sm transition-all shadow-[0_0_18px_rgba(12,78,195,0.35)] active:scale-[0.98]">
            Thanh toán ngay
          </button>
        </div>

        {/* Lịch sử giao dịch - col-span-2 */}
        <div className="col-span-2 bg-[#071A3B]/30 border border-[#0d1e3d]/80 rounded-2xl p-6 shadow-2xl flex flex-col">
          <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wide mb-5">Lịch sử giao dịch</h3>

          <div className="space-y-3 flex-1">
            {transactions.map((tx, idx) => (
              <div key={idx} className="bg-[#071A3B]/50 border border-[#0d1e3d]/60 rounded-xl p-4 hover:bg-[#071A3B]/80 transition-colors">
                <div className="flex items-start gap-3">
                  {/* Status icon */}
                  <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    tx.type === "success" ? "bg-emerald-500/10 border border-emerald-500/20" :
                    "bg-amber-500/10 border border-amber-500/20"
                  }`}>
                    {tx.type === "success" ? (
                      <ArrowDownCircle size={16} className="text-emerald-400" />
                    ) : (
                      <Clock size={16} className="text-amber-400" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-white text-xs font-bold truncate">{tx.title}</span>
                      <span className={`text-xs font-extrabold shrink-0 ${tx.type === "success" ? "text-slate-300" : "text-slate-200"}`}>
                        {tx.amount}
                      </span>
                    </div>
                    <p className="text-slate-500 text-[11px] mt-0.5">{tx.date}</p>
                    <p className="text-slate-500 text-[11px]">ID: {tx.id}</p>
                    <span className={`text-[11px] font-extrabold ${
                      tx.type === "success" ? "text-emerald-400" : "text-amber-400"
                    }`}>
                      {tx.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See all link */}
          <button className="mt-4 flex items-center justify-center gap-1.5 text-blue-400 text-xs font-bold hover:text-blue-300 transition-colors outline-none">
            Xem tất cả giao dịch
            <ChevronRight size={14} />
          </button>
        </div>

      </div>

      {/* Thông tin thanh toán + QR */}
      <div className="bg-[#071A3B]/30 border border-[#0d1e3d]/80 rounded-2xl p-6 shadow-2xl">
        <div className="grid grid-cols-3 gap-8">

          {/* Payment info - col-span-2 */}
          <div className="col-span-2">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wide mb-5">Thông tin thanh toán</h3>

            <div className="space-y-4">
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 mt-0.5">
                  <Building2 size={18} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Ngân hàng</p>
                  <p className="text-white text-sm font-semibold mt-0.5">BIDV - Ngân hàng TMCP Đầu tư và Phát triển Việt Nam</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 mt-0.5">
                  <CreditCard size={18} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Số tài khoản</p>
                  <p className="text-white text-sm font-semibold mt-0.5">1234 5678 9012 3456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 mt-0.5">
                  <User size={18} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Chủ tài khoản</p>
                  <p className="text-white text-sm font-semibold mt-0.5">Trường Đại học Công nghệ Đông Á</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 mt-0.5">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Nội dung chuyển khoản</p>
                  <div className="mt-1 inline-block px-3 py-1.5 rounded-lg bg-blue-600/10 border border-blue-500/20">
                    <code className="text-blue-300 text-xs font-mono font-bold">
                      SV001 - Nguyễn Văn A - HocPhi
                    </code>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Quét mã để thanh toán</p>
            
            <div className="p-3 bg-white rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.2)]">
              <img
                src={qrPaymentImage}
                alt="QR Code thanh toán BIDV - CHU THI THUY LINH"
                className="w-[160px] h-[160px] rounded-lg object-contain"
              />
            </div>

            <p className="mt-4 text-center text-[11px] text-slate-500 leading-relaxed">
              Sử dụng ứng dụng ngân hàng<br />để quét mã và thanh toán
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
