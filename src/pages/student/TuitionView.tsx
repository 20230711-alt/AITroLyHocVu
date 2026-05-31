import {
  ArrowLeft,
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Sparkles,
  Download,
  Printer,
  Wallet,
} from 'lucide-react';
import AILayout from '../../components/AILayout';

interface TuitionViewProps {
  onBack?: () => void;
}

export default function TuitionView({
  onBack,
}: TuitionViewProps) {
  const transactions = [
    {
      title: 'Thanh toán HK2',
      date: '15/03/2026',
      id: 'TXN89234',
      amount: '-5.000.000 VNĐ',
    },
    {
      title: 'Thanh toán HK2',
      date: '10/01/2026',
      id: 'TXN77102',
      amount: '-5.000.000 VNĐ',
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

          <h1 className="text-2xl font-bold">
            Financials
          </h1>
        </div>

        <img
          src="https://i.pravatar.cc/150?img=32"
          alt=""
          className="w-11 h-11 rounded-full border-2 border-blue-500"
        />
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-4 px-4 mt-5">

        <Card
          icon={<Wallet />}
          title="Tổng học phí"
          value="12M VNĐ"
        />

        <Card
          icon={<CheckCircle2 />}
          title="Đã đóng"
          value="10M VNĐ"
          blue
        />

        <Card
          icon={<AlertTriangle />}
          title="Còn nợ"
          value="2M VNĐ"
          red
        />

        <Card
          icon={<Calendar />}
          title="Hạn đóng"
          value="30/06"
        />

      </div>

      {/* Progress */}
      <div className="mx-4 mt-5 bg-white/5 border border-white/10 rounded-3xl p-5">

        <div className="flex items-center gap-5">

          <div className="relative w-28 h-28">

            <div className="absolute inset-0 rounded-full border-[10px] border-gray-700"></div>

            <div className="absolute inset-0 rounded-full border-[10px] border-blue-500 border-r-transparent border-b-transparent rotate-45"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">
                83%
              </span>
            </div>

          </div>

          <div className="flex-1 bg-red-500/10 border border-red-500/20 rounded-2xl p-4">

            <h3 className="font-semibold mb-2">
              Tiến độ thanh toán
            </h3>

            <p className="text-gray-300 text-sm">
              Học phí của bạn chưa được thanh toán đầy đủ.
              Vui lòng hoàn thành trước ngày
              30/06/2026.
            </p>

          </div>

        </div>

      </div>

      {/* AI Tuition */}
      <div className="mx-4 mt-5 bg-blue-900/40 border border-blue-500/20 rounded-3xl p-5">

        <div className="flex items-center gap-2 mb-4">
          <Sparkles />
          <h2 className="text-xl font-bold">
            Hỏi AI về học phí
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">

          {[
            'Tôi còn nợ bao nhiêu?',
            'Hạn đóng khi nào?',
            'Lịch sử đóng tiền',
            'Hướng dẫn thanh toán',
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

      {/* Tuition Detail */}
      <div className="mx-4 mt-5 bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

        <div className="flex justify-between items-center p-5 border-b border-white/10">

          <h2 className="text-2xl font-bold">
            Chi tiết học phí
          </h2>

          <div className="flex gap-2">

            <button className="bg-white/10 p-3 rounded-full">
              <Download size={18} />
            </button>

            <button className="bg-white/10 p-3 rounded-full">
              <Printer size={18} />
            </button>

          </div>

        </div>

        <div className="p-5 space-y-4">

          <FeeRow
            label="Học phí học kỳ"
            value="10.000.000 VNĐ"
          />

          <FeeRow
            label="Phí cơ sở vật chất"
            value="1.000.000 VNĐ"
          />

          <FeeRow
            label="Phí dịch vụ sinh viên"
            value="500.000 VNĐ"
          />

          <FeeRow
            label="Phí thư viện"
            value="500.000 VNĐ"
          />

          <div className="border-t border-white/10 pt-4 flex justify-between text-2xl font-bold">

            <span>Tổng cộng</span>

            <span className="text-blue-400">
              12.000.000 VNĐ
            </span>

          </div>

        </div>

      </div>

      {/* Payment Button */}
      <div className="px-4 mt-5">

        <button className="w-full bg-blue-600 hover:bg-blue-700 py-5 rounded-2xl text-2xl font-bold shadow-lg shadow-blue-500/30">

          Thanh toán ngay

        </button>

      </div>

      {/* History */}
      <div className="px-4 mt-6">

        <h2 className="text-2xl font-bold mb-4">
          Lịch sử giao dịch
        </h2>

        <div className="space-y-4">

          {transactions.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center"
            >

              <div className="flex gap-3">

                <div className="bg-blue-500/20 p-3 rounded-xl">
                  <CreditCard />
                </div>

                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {item.date}
                  </p>

                  <p className="text-sm text-gray-500">
                    ID: {item.id}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="font-bold">
                  {item.amount}
                </p>

                <span className="text-green-400 text-sm">
                  Thành công
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

      </div>
    </AILayout>
  );
}

function Card({
  icon,
  title,
  value,
  blue,
  red,
}: any) {
  return (
    <div
      className={`bg-white/5 border rounded-3xl p-5 ${
        blue
          ? 'border-blue-500'
          : red
          ? 'border-red-500'
          : 'border-white/10'
      }`}
    >
      <div className="mb-3">
        {icon}
      </div>

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h3
        className={`text-3xl font-bold mt-2 ${
          red ? 'text-red-400' : ''
        }`}
      >
        {value}
      </h3>
    </div>
  );
}

function FeeRow({
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
