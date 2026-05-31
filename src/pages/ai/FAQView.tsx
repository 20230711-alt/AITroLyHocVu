/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, TrendingUp, Plus, Filter, Brain, BookOpen, Zap, Edit2, Trash2, X, Check, Search } from 'lucide-react';
import { FAQItem } from '../../types';

export default function FAQView() {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: 'fa-1',
      question: 'Làm thế nào để tóm tắt tài liệu PDF nhanh nhất?',
      answer: 'Bạn có thể tải tài liệu lên phần "Tài liệu" dọn sạch và chọn câu lệnh gợi ý "Tóm tắt bài giảng". Academia AI sẽ xử lý sơ bộ và cung cấp bản tóm tắt theo các ý chính, định lý quan trọng, công thức cốt lõi và tóm lược bài học ngắn gọn chỉ trong vòng 30 giây.',
      category: 'Tính năng',
      views: 842,
      likes: 156
    },
    {
      id: 'fa-2',
      question: 'Hướng dẫn trích dẫn tài liệu học thuật theo chuẩn APA 7?',
      answer: 'Sử dụng tính năng phân tích tài liệu của Academia AI. Khi bạn đặt các câu hỏi liên quan đến tài liệu, hệ thống tự động nhận diện tài liệu đính kèm và trích xuất nguồn dẫn chuẩn APA 7 dựa trên Metadata chính xác của tài liệu học vụ.',
      category: 'Học thuật',
      views: 1200,
      likes: 324
    },
    {
      id: 'fa-3',
      question: 'Gói trả phí Academia Pro có những ưu đãi nâng cấp gì?',
      answer: 'Gói Pro bao gồm số lượt truy cập tóm tắt file dung lượng lớn không giới hạn, kết nối tốc độ cao hơn đến model Gemini Pro cao cấp nhất, nâng dung lượng lưu trữ kho đám mây bài học lên 10GB và hỗ trợ biên soạn đề mẫu riêng.',
      category: 'Thanh toán',
      views: 450,
      likes: 89
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('fa-1');
  const [selectedTag, setSelectedTag] = useState<string>('Tất cả');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [newCategory, setNewCategory] = useState('Tính năng');
  const [editingFaqId, setEditingFaqId] = useState<string | null>(null);

  const handleToggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleOpenAddModal = () => {
    setEditingFaqId(null);
    setNewQuestion('');
    setNewAnswer('');
    setNewCategory('Tính năng');
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (event: React.MouseEvent, faq: FAQItem) => {
    event.stopPropagation();
    setEditingFaqId(faq.id);
    setNewQuestion(faq.question);
    setNewAnswer(faq.answer);
    setNewCategory(faq.category);
    setIsModalOpen(true);
  };

  const handleDeleteFaq = (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    setFaqs(prev => prev.filter(item => item.id !== id));
    if (expandedId === id) setExpandedId(null);
  };

  const handleSaveFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim() || !newAnswer.trim()) return;

    if (editingFaqId) {
      // Edit mode
      setFaqs(prev => prev.map(item => {
        if (item.id === editingFaqId) {
          return {
            ...item,
            question: newQuestion,
            answer: newAnswer,
            category: newCategory
          };
        }
        return item;
      }));
    } else {
      // Create mode
      const newItem: FAQItem = {
        id: 'fa-' + Math.random().toString(36).substring(2, 9),
        question: newQuestion,
        answer: newAnswer,
        category: newCategory,
        views: 1,
        likes: 0
      };
      setFaqs(prev => [newItem, ...prev]);
      setExpandedId(newItem.id);
    }

    setIsModalOpen(false);
  };

  const handleLikeFaq = (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    setFaqs(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, likes: item.likes + 1 };
      }
      return item;
    }));
  };

  // Filter logic
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'Tất cả' || faq.category === selectedTag;
    return matchesSearch && matchesTag;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Tính năng':
        return <Brain className="w-5 h-5 text-[#004ac6]" />;
      case 'Học thuật':
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
      case 'Thanh toán':
        return <Zap className="w-5 h-5 text-amber-500" />;
      default:
        return <HelpCircle className="w-5 h-5 text-slate-500" />;
    }
  };

  // Stats summaries
  const totalQueries = faqs.length;
  const totalViews = faqs.reduce((sum, item) => sum + item.views, 0);

  return (
    <div className="w-full flex-grow p-6 space-y-6 max-w-4xl mx-auto pb-28">
      {/* Description header */}
      <div className="space-y-1">
        <h2 className="font-sans font-black text-2.5xl text-[#0b1c30]">Quản lý FAQ</h2>
        <p className="text-xs text-[#737686] font-medium">Cập nhật và tối ưu hóa thư viện câu hỏi học thuật.</p>
      </div>

      {/* Stats Bento Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#eff4ff]/60 border border-[#c3c6d7]/30 p-4 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-[#004ac6]/10 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-[#004ac6]" />
            </div>
            <span className="text-[10px] font-bold text-[#004ac6] bg-[#004ac6]/10 py-0.5 px-1.5 rounded-full">+4%</span>
          </div>
          <div className="mt-4">
            <span className="block text-2xl font-black text-[#0b1c30]">{totalQueries}</span>
            <span className="text-[10px] text-[#737686] font-bold uppercase tracking-wide">Tổng câu hỏi</span>
          </div>
        </div>

        <div className="bg-[#eff4ff]/60 border border-[#c3c6d7]/30 p-4 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
            </div>
            <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 py-0.5 px-1.5 rounded-full">Hôm nay</span>
          </div>
          <div className="mt-4">
            <span className="block text-2xl font-black text-[#0b1c30]">{(totalViews / 1000).toFixed(1)}k</span>
            <span className="text-[10px] text-[#737686] font-bold uppercase tracking-wide">Lượt xem</span>
          </div>
        </div>
      </div>

      {/* Controls: Search and Add trigger buttons row */}
      <div className="space-y-3">
        <div className="relative flex items-center">
          <Search className="absolute left-4 text-[#737686] w-5 h-5" />
          <input 
            type="text"
            className="w-full pl-12 pr-4 py-3 bg-white border border-[#c3c6d7]/40 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-[#004ac6] focus:border-transparent outline-none transition-all placeholder:text-[#737686]"
            placeholder="Tìm kiếm câu hỏi học vụ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <button 
            type="button"
            onClick={handleOpenAddModal}
            className="flex-1 bg-[#004ac6] text-white text-xs font-bold font-sans tracking-wide uppercase py-3 border border-[#004ac6] rounded-xl hover:bg-[#2563eb] cursor-pointer flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/10 active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4" />
            Thêm câu hỏi
          </button>
          
          <button 
            type="button"
            className="px-4 bg-white text-[#434655] text-xs font-bold border border-[#c3c6d7]/40 rounded-xl flex items-center justify-center gap-1.5"
          >
            <Filter className="w-4.5 h-4.5" />
            Lọc
          </button>
        </div>
      </div>

      {/* Switch selectors */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 mx-0.5 whitespace-nowrap scrollbar-none">
        {['Tất cả', 'Tính năng', 'Học thuật', 'Thanh toán'].map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
              selectedTag === tag 
                ? 'bg-[#004ac6] border border-[#004ac6] text-white shadow-sm' 
                : 'bg-[#eff4ff] text-[#737686] border border-[#c3c6d7]/20 hover:bg-[#e5eeff]'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Main Accordion loop list block */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                  isExpanded ? 'border-blue-400 ring-2 ring-blue-500/5 shadow-md' : 'border-[#c3c6d7]/30 hover:border-blue-200'
                }`}
              >
                {/* Header title */}
                <div 
                  className="p-4 flex items-start gap-3.5 cursor-pointer select-none"
                  onClick={() => handleToggleAccordion(faq.id)}
                >
                  <div className={`rounded-xl p-2.5 flex items-center justify-center shrink-0 ${
                    faq.category === 'Tính năng' ? 'bg-[#004ac6]/10' : faq.category === 'Học thuật' ? 'bg-indigo-50' : 'bg-amber-50'
                  }`}>
                    {getCategoryIcon(faq.category)}
                  </div>
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className="font-sans font-bold text-[#0b1c30] text-sm leading-snug md:text-sm hover:text-[#004ac6] transition-colors">{faq.question}</h3>
                    <div className="flex items-center gap-4 mt-1.5 text-[10px] text-[#737686] font-bold">
                      <span className="px-2 py-0.5 rounded-md bg-[#eff4ff] text-[#004ac6]">{faq.category}</span>
                      <span>Lượt xem: {faq.views}</span>
                      <button 
                        onClick={(e) => handleLikeFaq(e, faq.id)}
                        className="hover:text-red-500 flex items-center gap-1 transition-colors"
                      >
                        ❤️ {faq.likes}
                      </button>
                    </div>
                  </div>
                  <span className={`text-[#737686] transition-transform duration-300 ml-auto shrink-0 pt-1 text-xs font-bold leading-none`}>
                    {isExpanded ? '▲' : '▼'}
                  </span>
                </div>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-4 pb-4 bg-[#f8f9ff]/50 border-t border-[#c3c6d7]/10 animate-fade-in-down">
                    <p className="text-xs md:text-sm text-[#434655] font-medium leading-relaxed pt-4 pb-3">
                      {faq.answer}
                    </p>
                    <div className="flex justify-end gap-2 pt-2 border-t border-[#c3c6d7]/10 mt-3">
                      <button 
                        onClick={(e) => handleOpenEditModal(e, faq)}
                        className="text-[11px] font-bold text-[#434655] px-3.5 py-1.5 border border-[#c3c6d7]/60 rounded-xl flex items-center gap-1 hover:bg-neutral-100 transition-colors cursor-pointer"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        Sửa
                      </button>
                      <button 
                        onClick={(e) => handleDeleteFaq(e, faq.id)}
                        className="text-[11px] font-bold text-red-500 px-3.5 py-1.5 border border-red-200 rounded-xl flex items-center gap-1 hover:bg-red-50 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Xóa
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center text-[#737686] font-semibold bg-white border border-dashed border-[#c3c6d7]/40 rounded-2xl">
            Không tìm thấy câu hỏi học vụ phù hợp.
          </div>
        )}
      </div>

      {/* Modal dialog: Add/Edit bottom sheet (Vietnamese labeled) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6">
          <div 
            className="absolute inset-0 bg-[#0b1c30]/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsModalOpen(false)}
          />
          
          <div className="relative bg-white w-full md:max-w-md rounded-t-[28px] md:rounded-[24px] p-6 shadow-2xl transition-all max-h-[90vh] overflow-y-auto">
            <div className="md:hidden w-12 h-1 bg-[#c3c6d7]/60 rounded-full mx-auto mb-4" />
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-sans font-black text-lg text-[#0b1c30]">
                {editingFaqId ? 'Chỉnh sửa câu hỏi FAQ' : 'Thêm câu hỏi học vụ mới'}
              </h3>
              <button 
                type="button"
                className="p-1 rounded-full text-[#737686] hover:bg-neutral-100"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveFaq} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#434655] tracking-wide uppercase px-0.5">Câu hỏi học vụ</label>
                <input 
                  type="text"
                  className="w-full bg-[#f8f9ff] border border-[#c3c6d7] rounded-xl px-4 py-2.5 text-xs font-semibold focus:border-[#2563eb] outline-none transition-all placeholder:text-[#cbd4e1]"
                  placeholder="Nhập tiêu đề câu hỏi học vụ..."
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#434655] tracking-wide uppercase px-0.5">Câu trả lời (Nội dung giải đáp)</label>
                <textarea 
                  className="w-full bg-[#f8f9ff] border border-[#c3c6d7] rounded-xl px-4 py-2.5 text-xs font-medium focus:border-[#2563eb] outline-none transition-all placeholder:text-[#cbd4e1] resize-none"
                  placeholder="Nhập nội dung trả lời chi tiết..."
                  rows={4}
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#434655] tracking-wide uppercase px-0.5">Chủ đề phân mục</label>
                <div className="flex flex-wrap gap-2">
                  {['Tính năng', 'Học thuật', 'Thanh toán'].map((catName) => (
                    <button
                      key={catName}
                      type="button"
                      onClick={() => setNewCategory(catName)}
                      className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold border transition-colors cursor-pointer ${
                        newCategory === catName 
                          ? 'bg-[#004ac6] border-[#004ac6] text-white shadow-sm' 
                          : 'bg-[#f8f9ff] border-[#c3c6d7]/50 text-[#737686] hover:bg-neutral-50'
                      }`}
                    >
                      {catName}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  type="button" 
                  className="flex-1 py-3 border border-[#c3c6d7]/60 text-[#434655] text-xs font-bold font-sans tracking-wide uppercase rounded-xl hover:bg-neutral-100 cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                >
                  Hủy
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-[#004ac6] border border-[#004ac6] text-white text-xs font-bold font-sans tracking-wide uppercase py-3 rounded-xl hover:bg-[#2563eb] shadow-md cursor-pointer"
                >
                  Lưu câu hỏi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
