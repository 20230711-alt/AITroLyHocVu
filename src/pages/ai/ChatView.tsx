/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Send, FileText, Calendar, GraduationCap, Sparkles, Loader2, Paperclip, HelpCircle, ArrowRight, Percent } from 'lucide-react';
import { ChatMessage, UserSession } from '../../types';
import AILayout from '../../components/AILayout';

interface ChatViewProps {
  user: UserSession | null;
  onNavigateToFiles: () => void;
}

export default function ChatView({ user, onNavigateToFiles }: ChatViewProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'Chào Alex! Mình là Academia AI. Hôm nay mình có thể hỗ trợ gì cho việc học của bạn nào?',
      time: '09:00 AM'
    },
    {
      id: '2',
      sender: 'user',
      text: 'Cho mình hỏi về thời hạn đóng học phí học kỳ này và lịch học môn Cơ sở dữ liệu nhé.',
      time: '09:01 AM'
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
          details: ['Hạn chót: 25/12/2024']
        },
        {
          type: 'schedule',
          title: 'LỊCH HỌC: CƠ SỞ DỮ LIỆU',
          details: [
            'Thứ 3 & Thứ 5 | 08:00 - 10:30',
            'Phòng: B.402 (Tòa nhà Trung tâm)'
          ]
        }
      ]
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const formatTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    if (!textToSend) {
      setInputText('');
    }

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: 'user',
      text: text,
      time: formatTime()
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] })
      });

      const data = await response.json();
      setIsTyping(false);

      if (data.reply) {
        setMessages(prev => [
          ...prev, 
          {
            id: Math.random().toString(),
            sender: 'ai',
            text: data.reply,
            time: formatTime()
          }
        ]);
      } else {
        throw new Error("Invalid reply format");
      }
    } catch (err) {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: 'ai',
          text: 'Rất tiếc, đường truyền kết nối máy chủ AI đang bận. Bạn vui lòng gửi lại câu hỏi trong giây lát nhé!',
          time: formatTime()
        }
      ]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    // Auto grow height
    const tx = e.target;
    tx.style.height = 'auto';
    tx.style.height = Math.min(tx.scrollHeight, 120) + 'px';
  };

  const handleSuggestion = (prompt: string) => {
    handleSend(prompt);
  };

  return (
    <AILayout>
      <div className="w-full flex-grow flex flex-col justify-between max-w-4xl mx-auto h-[calc(100vh-72px)] overflow-hidden bg-transparent">
      {/* Messages Canvas Scroll Area */}
      <div className="flex-grow overflow-y-auto px-6 py-6 space-y-6 scrollbar-none pb-40">
        {messages.map((msg, index) => {
          const isAI = msg.sender === 'ai';
          return (
            <div 
              key={msg.id} 
              className={`flex flex-col gap-1.5 w-full max-w-[85%] ${isAI ? 'self-start animate-fade-in-left' : 'self-end items-end ml-auto animate-fade-in-right'}`}
            >
              {/* Message box */}
              <div 
                className={`p-4 rounded-2xl shadow-sm ${
                  isAI 
                    ? 'bg-white border-l-4 border-[#004ac6] text-[#0b1c30] rounded-tl-none' 
                    : 'bg-[#2563eb] text-white rounded-tr-none'
                }`}
              >
                <div className="text-sm font-sans leading-relaxed whitespace-pre-wrap">{msg.text}</div>
                
                {/* Academic Context Widgets block */}
                {isAI && msg.widgets && msg.widgets.length > 0 && (
                  <div className="mt-4 space-y-3">
                    {msg.widgets.map((widget, widx) => (
                      <div 
                        key={widx} 
                        className="bg-[#eff4ff]/50 border border-[#c3c6d7]/30 p-3.5 rounded-xl flex flex-col gap-1 hover:border-[#2563eb]/25 transition-all"
                      >
                        <div className="flex items-center gap-2 mb-1.5 text-[#004ac6] font-bold">
                          {widget.type === 'tuition' ? (
                            <Calendar className="w-4 h-4" />
                          ) : (
                            <GraduationCap className="w-4.5 h-4.5" />
                          )}
                          <span className="text-[11px] font-sans tracking-wide uppercase font-black">{widget.title}</span>
                        </div>
                        {widget.details.map((detail, didx) => (
                          <p key={didx} className="text-xs text-[#434655] font-semibold">{detail}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <span className="text-[10px] font-sans font-bold text-[#737686] px-1">{msg.time}</span>
            </div>
          );
        })}

        {/* AI Typing Indicator block */}
        {isTyping && (
          <div className="flex flex-col gap-1.5 self-start max-w-[85%]">
            <div className="bg-white border-l-4 border-[#004ac6] p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
              <Loader2 className="w-4.5 h-4.5 text-[#004ac6] animate-spin" />
              <span className="text-xs font-sans text-[#737686] font-bold">Academia AI đang phản hồi...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Floating Bottom Suggestion Chips and Input box bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 max-w-4xl mx-auto px-6 pb-6 pt-2 bg-gradient-to-t from-[#f8f9ff] via-[#f8f9ff]/90 to-transparent">
        {/* Suggestion Prompt Chips */}
        <div className="flex gap-2.5 overflow-x-auto pb-3 mx-1 no-scrollbar mask-gradient-overlay flex-nowrap shrink-0">
          <button 
            type="button"
            onClick={() => handleSuggestion("Tóm tắt bài giảng file tài liệu PDF")}
            className="flex-shrink-0 bg-white hover:bg-[#eff4ff] border border-[#c3c6d7]/40 px-4 py-2 rounded-full text-[#434655] hover:text-[#004ac6] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            Tóm tắt bài giảng
          </button>
          <button 
            type="button"
            onClick={() => handleSuggestion("Tạo bộ câu hỏi ôn tập thi cuối kỳ")}
            className="flex-shrink-0 bg-white hover:bg-[#eff4ff] border border-[#c3c6d7]/40 px-4 py-2 rounded-full text-[#434655] hover:text-[#004ac6] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Tạo câu hỏi ôn tập
          </button>
          <button 
            type="button"
            onClick={() => handleSuggestion("Tính chỉ số GPA dự kiến kỳ học")}
            className="flex-shrink-0 bg-white hover:bg-[#eff4ff] border border-[#c3c6d7]/40 px-4 py-2 rounded-full text-[#434655] hover:text-[#004ac6] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <Percent className="w-3.5 h-3.5" />
            Tính điểm GPA dự kiến
          </button>
        </div>

        {/* Input Bar panel */}
        <div className="relative flex items-center bg-white border border-[#c3c6d7]/50 rounded-[24px] p-2.5 shadow-xl ring-2 ring-blue-500/5">
          <button 
            onClick={onNavigateToFiles}
            className="w-10 h-10 flex items-center justify-center text-[#737686] hover:text-[#004ac6] transition-colors rounded-full hover:bg-[#eff4ff] cursor-pointer" 
            title="Đến kho tài liệu tải lên"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <textarea 
            ref={textareaRef}
            rows={1}
            value={inputText}
            onChange={handleInput}
            onKeyDown={handleKeyPress}
            className="flex-1 bg-transparent border-none focus:ring-0 text-[#0b1c30] text-sm py-2 px-1 focus:outline-none resize-none max-h-[120px] font-medium placeholder:text-[#cbd4e1]"
            placeholder="Hãy hỏi mình về thời hạn học phí, lịch học, hỗ trợ bài tập..."
          />
          <button 
            onClick={() => handleSend()}
            disabled={!inputText.trim()}
            className="w-10 h-10 bg-[#004ac6] disabled:bg-blue-300 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#2563eb] transition-all cursor-pointer shadow-blue-500/10 shrink-0" 
            title="Gửi câu hỏi"
          >
            <Send className="w-4 h-4 -mr-0.5" />
          </button>
        </div>
      </div>
      </div>
    </AILayout>
  );
}
