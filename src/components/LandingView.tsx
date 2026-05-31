/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, FileText, HelpCircle } from 'lucide-react';
import { ScreenType } from '../types';

interface LandingViewProps {
  onStart: () => void;
  setScreen: (screen: ScreenType) => void;
}

export default function LandingView({ onStart, setScreen }: LandingViewProps) {
  return (
    <div className="w-full bg-[#f8f9ff] flex flex-col items-center overflow-x-hidden">
      {/* Main Hero Section */}
      <main className="w-full flex-grow flex flex-col items-center">
        {/* Banner Title */}
        <section className="relative px-6 py-12 md:py-20 overflow-hidden flex flex-col items-center text-center w-full max-w-4xl mx-auto">
          {/* Top light blue gradient shape */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[350px] bg-gradient-to-b from-[#e5eeff]/40 to-transparent -z-10 rounded-[100%]"></div>
          
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#eff4ff] border border-[#d5e3ff] rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#004ac6] animate-pulse" />
            <span className="font-sans text-[10px] text-[#004ac6] font-bold uppercase tracking-wider">
              ⚡_WORK PHIÊN BẢN 2.0 ĐÃ SẴN SÀNG
            </span>
          </div>

          {/* Title */}
          <h2 className="font-sans font-black text-3xl md:text-5xl text-[#0b1c30] mb-4 md:mb-6 max-w-2xl mx-auto leading-[1.2] md:leading-[1.15] tracking-tight px-4">
            Trợ lý học vụ <span className="text-[#004ac6] italic font-serif">AI</span> dành cho sinh viên hiện đại
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-[#434655] text-xs md:text-sm leading-relaxed mb-8 max-w-[280px] md:max-w-xl mx-auto px-4">
            Tối ưu hóa quy trình học tập, tra cứu tài liệu và giải đáp mọi thắc mắc học vụ chỉ trong tích tắc.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-md justify-center px-4">
            <button 
              onClick={onStart}
              className="w-full sm:w-auto bg-[#004ac6] text-white py-3.5 px-8 rounded-xl font-bold font-sans text-sm tracking-wide active:scale-98 transition-all hover:bg-[#003da5] shadow-md cursor-pointer"
            >
              Bắt đầu ngay
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById("features-section");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto bg-white border border-[#c3c6d7] text-[#0b1c30] py-3.5 px-8 rounded-xl font-bold font-sans text-sm tracking-wide active:bg-[#f8f9ff] transition-all hover:border-[#004ac6] cursor-pointer"
            >
              Tìm hiểu thêm
            </button>
          </div>

          {/* Chatbot Card Mockup */}
          <div className="mt-12 md:mt-16 relative w-full flex justify-center items-center">
            {/* Glow Background Orb */}
            <div className="absolute w-[240px] h-[160px] bg-blue-400/20 rounded-full blur-[40px] -z-10"></div>
            
            {/* Card itself */}
            <div className="bg-white w-[260px] h-[150px] rounded-2xl p-5 shadow-2xl border border-white/80 relative z-10 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#004ac6] flex items-center justify-center text-white shadow-sm">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="h-2 w-20 bg-[#e2e8f0] rounded-full"></div>
              </div>
              <div className="space-y-2.5 my-2">
                <div className="h-2 w-[90%] bg-[#e5eeff] rounded-full"></div>
                <div className="h-2 w-[75%] bg-[#e5eeff] rounded-full"></div>
                <div className="h-2 w-[55%] bg-[#e5eeff] rounded-full"></div>
              </div>
              <div className="flex justify-end">
                <div className="w-8 h-8 rounded-lg bg-[#d5e3ff]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features-section" className="w-full px-6 py-16 bg-[#eff4ff]/60 border-t border-[#c3c6d7]/20">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="text-center mb-10">
              <h3 className="font-sans font-black text-2xl md:text-3.5xl text-[#0b1c30] mb-2">Tính năng vượt trội</h3>
              <p className="text-xs md:text-sm text-[#737686]">Được thiết kế riêng cho hệ sinh thái Academia</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 max-w-sm md:max-w-none">
              {/* Feature 1 */}
              <div className="bg-white border border-[#c3c6d7]/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#004ac6] flex items-center justify-center text-white mb-4 shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-[16px] text-[#0b1c30] mb-2">Chatbot AI</h4>
                <p className="text-xs text-[#737686] leading-relaxed">
                  Trò chuyện trực tiếp để giải quyết bài tập, tóm tắt bài giảng hoặc lập kế hoạch ôn thi hiệu quả.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white border border-[#c3c6d7]/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#004ac6] flex items-center justify-center text-white mb-4 shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-[16px] text-[#0b1c30] mb-2">Tra cứu tài liệu</h4>
                <p className="text-xs text-[#737686] leading-relaxed">
                  Kho lưu trữ thông minh giúp bạn tìm kiếm giáo trình, tài liệu tham khảo và slide bài giảng trong vài giây.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white border border-[#c3c6d7]/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#4a5568] flex items-center justify-center text-white mb-4 shadow-sm">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-[16px] text-[#0b1c30] mb-2">Hỏi đáp học vụ</h4>
                <p className="text-xs text-[#737686] leading-relaxed">
                  Giải đáp nhanh các thắc mắc về quy chế đào tạo, tín chỉ, lịch thi và các thủ tục hành chính tại trường.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid & Testimonial */}
        <section className="w-full px-6 py-16 bg-[#004ac6] text-white relative">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 w-full text-center max-w-sm md:max-w-none px-4">
              <div>
                <div className="text-3xl md:text-5xl font-black mb-1">15K+</div>
                <div className="text-[10px] md:text-xs text-blue-200 uppercase tracking-widest font-bold">Sinh viên</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-black mb-1">500+</div>
                <div className="text-[10px] md:text-xs text-blue-200 uppercase tracking-widest font-bold">Giảng viên</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-black mb-1">2M+</div>
                <div className="text-[10px] md:text-xs text-blue-200 uppercase tracking-widest font-bold">Tài liệu</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-black mb-1">98%</div>
                <div className="text-[10px] md:text-xs text-blue-200 uppercase tracking-widest font-bold">Hài lòng</div>
              </div>
            </div>

            {/* Testimonial card */}
            <div className="mt-12 w-full p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center max-w-xs md:max-w-lg shadow-md">
              <p className="text-xs md:text-sm italic font-medium leading-relaxed">
                "Academia AI đã thay đổi hoàn toàn cách mình quản lý việc học. Mọi thứ đều nằm trong tầm tay!"
              </p>
              <p className="mt-4 text-[10px] font-bold text-blue-200 tracking-wide">
                - Minh Quân, SV Năm 2
              </p>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="w-full px-6 py-16 flex flex-col items-center text-center max-w-xs md:max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#eff4ff] flex items-center justify-center mb-6 relative shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#004ac6] flex items-center justify-center text-white font-bold text-lg shadow-sm">
              @
            </div>
          </div>
          <h3 className="font-sans font-extrabold text-xl text-[#0b1c30] mb-2">Bạn cần hỗ trợ?</h3>
          <p className="text-xs text-[#737686] mb-6 leading-relaxed max-w-[280px]">
            Đội ngũ kỹ thuật luôn sẵn sàng 24/7 để giúp đỡ bạn.
          </p>
          <a 
            href="mailto:support@academia.ai"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004ac6] hover:text-[#003da5] transition-all cursor-pointer"
          >
            support@academia.ai
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>
      </main>

      {/* Footer Element */}
      <footer className="w-full bg-[#eff4ff]/60 border-t border-[#c3c6d7]/20 py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[11px] text-[#737686] pb-10 max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <h5 className="font-bold text-sm text-[#0b1c30] mb-1">Academia AI</h5>
          <p className="text-[10px] text-[#737686]">© 2024 Academia AI Assistant, Empowering scholars worldwide.</p>
        </div>
        <div className="flex gap-5 text-[#737686] font-medium text-[10px] mt-2 md:mt-0 justify-center">
          <span className="hover:text-[#004ac6] cursor-pointer">Privacy Policy</span>
          <span className="hover:text-[#004ac6] cursor-pointer">Terms of Service</span>
          <span className="hover:text-[#004ac6] cursor-pointer">API Docs</span>
        </div>
      </footer>
    </div>
  );
}
