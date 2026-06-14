import React, { useEffect, useRef, useState } from 'react';
import {
  Bell,
  Bot,
  Calculator,
  Calendar,
  ChevronDown,
  FileText,
  GraduationCap,
  HelpCircle,
  Paperclip,
  Search,
  Send,
  Sparkles,
} from 'lucide-react';

import { ChatMessage, UserSession } from '../../types';

interface ChatViewProps {
  user: UserSession | null;
  onNavigateToFiles: () => void;
}

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    sender: 'ai',
    text: 'Chào Alex! Mình là Academia AI. Hôm nay mình có thể hỗ trợ gì cho việc học của bạn nào?',
    time: '09:00 AM',
  },
  {
    id: '2',
    sender: 'user',
    text: 'Cho mình hỏi về thời hạn đóng học phí học kỳ này và lịch học môn Cơ sở dữ liệu nhé.',
    time: '09:01 AM',
  },
  {
    id: '3',
    sender: 'ai',
    text: 'Được chứ! Dưới đây là thông tin mình tìm thấy trong hồ sơ của bạn:',
    time: '09:01 AM',
    widgets: [
      {
        type: 'tuition',
        title: 'THỜI HẠN HỌC PHÍ',
        details: ['Hạn chót: 25/12/2024'],
      },
      {
        type: 'schedule',
        title: 'LỊCH HỌC: CƠ SỞ DỮ LIỆU',
        details: [
          'Thứ 3 & Thứ 5 | 08:00 - 10:30',
          'Phòng: B.402 (Tòa nhà Trung tâm)',
        ],
      },
    ],
  },
];

export default function ChatView({ user, onNavigateToFiles }: ChatViewProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const displayName = user?.name || 'Thùy Linh';
  const avatar = user?.avatar || '/assets/images/default-avatar.svg';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const formatTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours %= 12;
    hours = hours || 12;

    return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  };

  const handleSend = async (prompt?: string) => {
    const text = (prompt || inputText).trim();

    if (!text) {
      return;
    }

    if (!prompt) {
      setInputText('');
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      sender: 'user',
      text,
      time: formatTime(),
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      const data = await response.json();

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: crypto.randomUUID(),
          sender: 'ai',
          text:
            data.reply ||
            'Mình đã ghi nhận câu hỏi của bạn. Bạn có thể hỏi thêm về lịch học, học phí hoặc tài liệu.',
          time: formatTime(),
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: crypto.randomUUID(),
          sender: 'ai',
          text: 'Rất tiếc, kết nối máy chủ AI đang bận. Bạn vui lòng gửi lại câu hỏi trong giây lát nhé!',
          time: formatTime(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative min-h-screen flex-1 overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(0,140,255,.16),transparent_30%),radial-gradient(circle_at_82%_70%,rgba(0,212,255,.1),transparent_28%)]" />

      <main className="relative mx-auto flex h-screen w-full max-w-[1500px] flex-col px-5 py-8 lg:px-8">
        <header className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h1 className="text-3xl font-black md:text-4xl">Trợ lý AI</h1>
            <p className="mt-4 text-base text-slate-400">
              Hỏi gì cũng có câu trả lời
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <label className="relative block w-full min-w-[280px] max-w-md sm:w-[430px]">
              <Search
                size={24}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-200"
              />
              <input
                type="search"
                placeholder="Tìm kiếm..."
                className="h-14 w-full rounded-2xl border border-cyan-500/30 bg-[#041534]/75 pl-6 pr-14 text-white outline-none placeholder:text-slate-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/20"
              />
            </label>

            {/* Notification icon removed from header */}

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

        <section className="flex-1 overflow-y-auto px-1 pb-5">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-5">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}

            {isTyping && (
              <div className="max-w-3xl rounded-2xl border border-cyan-500/25 bg-[#061638]/80 p-5 text-slate-300">
                Academia AI đang phản hồi...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </section>

        <footer className="mx-auto w-full max-w-5xl shrink-0 pt-5">
          <div className="mb-5 flex flex-wrap justify-center gap-4">
            <QuickAction
              icon={<FileText size={18} />}
              label="Tóm tắt bài giảng"
              onClick={() => handleSend('Tóm tắt bài giảng file tài liệu PDF')}
            />
            <QuickAction
              icon={<HelpCircle size={18} />}
              label="Tạo câu hỏi ôn tập"
              onClick={() => handleSend('Tạo bộ câu hỏi ôn tập thi cuối kỳ')}
            />
            <QuickAction
              icon={<Calculator size={18} />}
              label="Tính điểm GPA dự kiến"
              onClick={() => handleSend('Tính điểm GPA dự kiến kỳ học')}
            />
            <QuickAction
              icon={<Sparkles size={18} />}
              label="Gợi ý tài liệu"
              onClick={onNavigateToFiles}
            />
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/25 bg-[#061638]/85 p-3 shadow-[0_0_28px_rgba(0,140,255,.12)]">
            <button
              type="button"
              onClick={onNavigateToFiles}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300"
              aria-label="Đính kèm tài liệu"
            >
              <Paperclip size={24} />
            </button>

            <input
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Hãy hỏi mình về thời hạn, lịch học, bài tập, tài liệu..."
              className="h-12 min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-slate-500"
            />

            <button
              type="button"
              onClick={() => handleSend()}
              disabled={!inputText.trim() || isTyping}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-[0_0_18px_rgba(0,140,255,.35)] transition-all hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Gửi câu hỏi"
            >
              <Send size={22} />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isAI = message.sender === 'ai';

  if (!isAI) {
    return (
      <div className="ml-auto flex w-full max-w-4xl flex-col items-end gap-2">
        <div className="rounded-2xl bg-blue-600 px-6 py-5 text-base leading-8 text-white shadow-[0_0_24px_rgba(0,90,255,.25)]">
          {message.text}
        </div>
        <span className="text-sm text-slate-400">{message.time}</span>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-4xl flex-col gap-2">
      <div className="rounded-2xl border border-cyan-500/25 bg-[#061638]/80 p-5 shadow-[0_0_24px_rgba(0,140,255,.12)]">
        <div className="mb-3 flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-blue-600/25 text-cyan-300">
            <Bot size={22} />
          </div>
          <p className="text-base leading-8 text-slate-100">{message.text}</p>
        </div>

        {message.widgets && (
          <div className="mt-5 space-y-4">
            {message.widgets.map((widget) => (
              <div
                key={widget.title}
                className="rounded-2xl border border-cyan-500/20 bg-[#031434]/80 p-5"
              >
                <h3 className="mb-4 flex items-center gap-3 text-base font-black text-cyan-400">
                  {widget.type === 'tuition' ? (
                    <Calendar size={20} />
                  ) : (
                    <GraduationCap size={20} />
                  )}
                  {widget.title}
                </h3>
                <div className="space-y-2 text-base text-slate-100">
                  {widget.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <span className="text-sm text-slate-400">{message.time}</span>
    </div>
  );
}

function QuickAction({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-14 items-center gap-3 rounded-xl border border-cyan-500/25 bg-[#061638]/80 px-5 text-sm font-semibold text-white transition-all hover:border-cyan-300 hover:bg-blue-600/35"
    >
      <span className="text-cyan-300">{icon}</span>
      {label}
    </button>
  );
}
