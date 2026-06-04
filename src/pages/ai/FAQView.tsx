import React, { useState } from 'react';
import {
  Bell,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Filter,
  HelpCircle,
  Pencil,
  Plus,
  Search,
  Trash2,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react';

import { FAQItem, UserSession } from '../../types';

interface FAQViewProps {
  user?: UserSession | null;
}

const categories = ['Tất cả', 'Tính năng', 'Học thuật', 'Thanh toán'];

export default function FAQView({ user }: FAQViewProps) {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: 'fa-1',
      question: 'Làm thế nào để tóm tắt tài liệu PDF nhanh nhất?',
      answer:
        'Bạn có thể tải tài liệu lên phần "Tài liệu" dọn sạch và chọn câu lệnh gợi ý "Tóm tắt bài giảng". Academia AI sẽ xử lý sơ bộ và cung cấp bản tóm tắt theo các ý chính, định lý quan trọng, công thức cốt lõi và tóm lược bài học ngắn gọn chỉ trong vòng 30 giây.',
      category: 'Tính năng',
      views: 842,
      likes: 156,
    },
    {
      id: 'fa-2',
      question: 'Hướng dẫn trích dẫn tài liệu học thuật theo chuẩn APA 7?',
      answer:
        'Sử dụng tính năng phân tích tài liệu của Academia AI. Khi bạn đặt các câu hỏi liên quan đến tài liệu, hệ thống tự động nhận diện tài liệu đính kèm và trích xuất nguồn dẫn chuẩn APA 7 dựa trên metadata chính xác của tài liệu học vụ.',
      category: 'Học thuật',
      views: 1200,
      likes: 324,
    },
    {
      id: 'fa-3',
      question: 'Gói trả phí Academia Pro có những ưu đãi nâng cấp gì?',
      answer:
        'Gói Pro bao gồm số lượt truy cập tóm tắt file dung lượng lớn không giới hạn, kết nối tốc độ cao hơn đến model Gemini Pro cao cấp nhất, nâng dung lượng lưu trữ kho đám mây bài học lên 10GB và hỗ trợ biên soạn đề mẫu riêng.',
      category: 'Thanh toán',
      views: 450,
      likes: 89,
    },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [expandedId, setExpandedId] = useState<string | null>('fa-1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaqId, setEditingFaqId] = useState<string | null>(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('Tính năng');

  const displayName = user?.name || 'Thùy Linh';
  const avatar = user?.avatar || 'https://i.pravatar.cc/150?img=32';
  const totalViews = faqs.reduce((sum, item) => sum + item.views, 0);

  const filteredFaqs = faqs.filter((faq) => {
    const normalizedSearch = searchQuery.toLowerCase();
    const matchesSearch =
      faq.question.toLowerCase().includes(normalizedSearch) ||
      faq.answer.toLowerCase().includes(normalizedSearch);
    const matchesCategory =
      selectedCategory === 'Tất cả' || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const openAddModal = () => {
    setEditingFaqId(null);
    setQuestion('');
    setAnswer('');
    setCategory('Tính năng');
    setIsModalOpen(true);
  };

  const openEditModal = (event: React.MouseEvent, faq: FAQItem) => {
    event.stopPropagation();
    setEditingFaqId(faq.id);
    setQuestion(faq.question);
    setAnswer(faq.answer);
    setCategory(faq.category);
    setIsModalOpen(true);
  };

  const deleteFaq = (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    setFaqs((currentFaqs) => currentFaqs.filter((faq) => faq.id !== id));

    if (expandedId === id) {
      setExpandedId(null);
    }
  };

  const saveFaq = (event: React.FormEvent) => {
    event.preventDefault();

    if (!question.trim() || !answer.trim()) {
      return;
    }

    if (editingFaqId) {
      setFaqs((currentFaqs) =>
        currentFaqs.map((faq) =>
          faq.id === editingFaqId
            ? {
                ...faq,
                question,
                answer,
                category,
              }
            : faq
        )
      );
    } else {
      const newFaq: FAQItem = {
        id: crypto.randomUUID(),
        question,
        answer,
        category,
        views: 1,
        likes: 0,
      };

      setFaqs((currentFaqs) => [newFaq, ...currentFaqs]);
      setExpandedId(newFaq.id);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen flex-1 overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_16%,rgba(0,140,255,.16),transparent_30%),radial-gradient(circle_at_88%_64%,rgba(129,74,255,.1),transparent_28%)]" />

      <main className="relative mx-auto w-full max-w-[1500px] px-5 py-8 lg:px-8">
        <header className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h1 className="text-3xl font-black md:text-4xl">Quản lý FAQ</h1>
            <p className="mt-4 text-base text-slate-400">
              Cập nhật và tối ưu hóa thư viện câu hỏi học thuật.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <SearchBox
              placeholder="Tìm kiếm..."
              value=""
              onChange={() => undefined}
              className="w-full min-w-[280px] max-w-md sm:w-[430px]"
              readOnly
            />

            <button
              type="button"
              className="relative flex h-12 w-12 items-center justify-center rounded-full text-white hover:bg-white/10"
              aria-label="Thông báo"
            >
              <Bell size={24} />
              <span className="absolute right-1 top-0 flex h-6 min-w-6 items-center justify-center rounded-full bg-rose-500 px-1 text-xs font-bold">
                3
              </span>
            </button>

            <button
              type="button"
              className="flex items-center gap-3 rounded-2xl px-2 py-1 hover:bg-white/10"
            >
              <img
                src={avatar}
                alt={displayName}
                className="h-12 w-12 rounded-full border border-cyan-300/40 object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="font-semibold">{displayName}</span>
              <ChevronDown size={18} />
            </button>
          </div>
        </header>

        <section className="mb-6 grid gap-6 lg:grid-cols-2">
          <StatCard
            icon={<HelpCircle size={36} />}
            value={faqs.length.toString()}
            label="TỔNG CÂU HỎI"
            badge="+4%"
            accent="cyan"
          />
          <StatCard
            icon={<TrendingUp size={36} />}
            value={`${(totalViews / 1000).toFixed(1)}k`}
            label="LƯỢT XEM"
            badge="Hôm nay"
            accent="violet"
          />
        </section>

        <section className="mb-6 space-y-4">
          <SearchBox
            placeholder="Tìm kiếm câu hỏi học vụ..."
            value={searchQuery}
            onChange={setSearchQuery}
          />

          <div className="grid gap-4 md:grid-cols-[1fr_130px]">
            <button
              type="button"
              onClick={openAddModal}
              className="flex h-14 items-center justify-center gap-3 rounded-xl bg-blue-600 text-sm font-black uppercase tracking-wide text-white shadow-[0_0_22px_rgba(0,90,255,.25)] transition-all hover:bg-blue-500"
            >
              <Plus size={20} />
              Thêm câu hỏi
            </button>

            <button
              type="button"
              className="flex h-14 items-center justify-center gap-3 rounded-xl border border-cyan-500/25 bg-[#061638]/80 px-5 text-sm font-bold text-white hover:border-cyan-300"
            >
              <Filter size={22} />
              Lọc
            </button>
          </div>
        </section>

        <div className="mb-6 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSelectedCategory(item)}
              className={`rounded-full border px-5 py-3 text-sm font-bold transition-all ${
                selectedCategory === item
                  ? 'border-blue-500 bg-blue-600 text-white'
                  : 'border-cyan-500/15 bg-[#061638]/70 text-slate-300 hover:border-cyan-300'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <section className="space-y-4">
          {filteredFaqs.map((faq) => (
            <FAQCard
              key={faq.id}
              faq={faq}
              isExpanded={expandedId === faq.id}
              onToggle={() =>
                setExpandedId(expandedId === faq.id ? null : faq.id)
              }
              onEdit={openEditModal}
              onDelete={deleteFaq}
            />
          ))}

          {filteredFaqs.length === 0 && (
            <div className="rounded-2xl border border-dashed border-cyan-500/25 bg-[#061638]/70 p-12 text-center font-semibold text-slate-400">
              Không tìm thấy câu hỏi học vụ phù hợp.
            </div>
          )}
        </section>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
          <button
            type="button"
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
            aria-label="Đóng"
          />

          <form
            onSubmit={saveFaq}
            className="relative w-full max-w-lg rounded-2xl border border-cyan-500/25 bg-[#061638] p-6 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-black">
                {editingFaqId ? 'Chỉnh sửa câu hỏi FAQ' : 'Thêm câu hỏi mới'}
              </h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full p-2 text-slate-300 hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300">
                  Câu hỏi học vụ
                </span>
                <input
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-cyan-500/25 bg-[#020817] px-4 text-white outline-none focus:border-cyan-300"
                  placeholder="Nhập tiêu đề câu hỏi..."
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300">
                  Câu trả lời
                </span>
                <textarea
                  value={answer}
                  onChange={(event) => setAnswer(event.target.value)}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-cyan-500/25 bg-[#020817] px-4 py-3 text-white outline-none focus:border-cyan-300"
                  placeholder="Nhập nội dung trả lời chi tiết..."
                />
              </label>

              <div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300">
                  Chủ đề phân mục
                </span>
                <div className="flex flex-wrap gap-2">
                  {categories.slice(1).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      className={`rounded-full border px-4 py-2 text-sm font-bold ${
                        category === item
                          ? 'border-blue-500 bg-blue-600 text-white'
                          : 'border-cyan-500/25 bg-[#020817] text-slate-300'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="h-12 flex-1 rounded-xl border border-cyan-500/25 text-sm font-bold text-slate-200 hover:bg-white/10"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="h-12 flex-1 rounded-xl bg-blue-600 text-sm font-black uppercase tracking-wide text-white hover:bg-blue-500"
              >
                Lưu câu hỏi
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

function SearchBox({
  placeholder,
  value,
  onChange,
  className = '',
  readOnly = false,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  readOnly?: boolean;
}) {
  return (
    <label className={`relative block ${className}`}>
      <Search
        size={22}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
      />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        readOnly={readOnly}
        placeholder={placeholder}
        className="h-14 w-full rounded-2xl border border-cyan-500/25 bg-[#061638]/80 pl-14 pr-5 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/20"
      />
    </label>
  );
}

function StatCard({
  icon,
  value,
  label,
  badge,
  accent,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  badge: string;
  accent: 'cyan' | 'violet';
}) {
  const color =
    accent === 'cyan'
      ? 'border-cyan-500/50 text-cyan-300'
      : 'border-violet-500/50 text-violet-300';

  return (
    <div
      className={`relative min-h-44 rounded-2xl border bg-[#061638]/75 p-7 shadow-[0_0_26px_rgba(0,140,255,.12)] ${color}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-current/10">
          {icon}
        </div>
        <span className="rounded-xl border border-current/35 bg-current/10 px-3 py-1 text-sm font-bold">
          {badge}
        </span>
      </div>

      <h2 className="mt-8 text-4xl font-black text-white">{value}</h2>
      <p className="mt-3 text-sm font-bold uppercase tracking-wide text-slate-300">
        {label}
      </p>
    </div>
  );
}

function FAQCard({
  faq,
  isExpanded,
  onToggle,
  onEdit,
  onDelete,
}: {
  faq: FAQItem;
  isExpanded: boolean;
  onToggle: () => void;
  onEdit: (event: React.MouseEvent, faq: FAQItem) => void;
  onDelete: (event: React.MouseEvent, id: string) => void;
}) {
  return (
    <article
      className={`rounded-2xl border bg-[#061638]/80 transition-all ${
        isExpanded
          ? 'border-cyan-500/50 shadow-[0_0_28px_rgba(0,140,255,.16)]'
          : 'border-cyan-500/15 hover:border-cyan-500/35'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-5 p-6 text-left"
      >
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
            faq.category === 'Tính năng'
              ? 'bg-cyan-500/15 text-cyan-300'
              : faq.category === 'Học thuật'
                ? 'bg-violet-500/20 text-violet-300'
                : 'bg-amber-500/20 text-amber-300'
          }`}
        >
          {faq.category === 'Tính năng' ? (
            <HelpCircle size={26} />
          ) : faq.category === 'Học thuật' ? (
            <BookOpen size={26} />
          ) : (
            <Zap size={26} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-white">{faq.question}</h3>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-400">
            <span className="rounded-lg bg-blue-500/15 px-3 py-1 text-cyan-300">
              {faq.category}
            </span>
            <span>Lượt xem: {faq.views}</span>
            <span className="text-rose-400">♥ {faq.likes}</span>
          </div>
        </div>

        <span className="pt-1 text-slate-300">
          {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </span>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6">
          <p className="border-t border-cyan-500/15 pt-5 text-base leading-8 text-slate-200">
            {faq.answer}
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={(event) => onEdit(event, faq)}
              className="flex h-11 items-center gap-2 rounded-xl border border-cyan-500/40 px-5 text-sm font-bold text-cyan-300 hover:bg-cyan-500/10"
            >
              <Pencil size={17} />
              Sửa
            </button>
            <button
              type="button"
              onClick={(event) => onDelete(event, faq.id)}
              className="flex h-11 items-center gap-2 rounded-xl border border-rose-500/45 px-5 text-sm font-bold text-rose-400 hover:bg-rose-500/10"
            >
              <Trash2 size={17} />
              Xóa
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
