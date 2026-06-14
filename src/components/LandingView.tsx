/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, FileText, HelpCircle, Star, Zap, BarChart3 } from 'lucide-react';
import { ScreenType } from '../types';
import {
  Brain,
  Bot,
  GraduationCap,
  BookOpen,
  MessageCircleQuestion,
  Bell,
  CircleHelp,
  Mail,
  LifeBuoy,
  Users,
  Shield,
  Cookie,
  Facebook,
  Github,
  Globe,
  MapPin,
  Phone,
} from "lucide-react";
const dashboardPreview = new URL(
  '../assets/images/dashboard-preview.png',
  import.meta.url
).href;
interface LandingViewProps {
  onStart: () => void;
  setScreen: (screen: ScreenType) => void;
}

export default function LandingView({ onStart, setScreen }: LandingViewProps) {
  return (
    <div className="relative min-h-screen w-full bg-[#020B24] flex flex-col items-center overflow-x-hidden text-white">
      {/* AI Background */}
<div className="fixed inset-0 -z-10 overflow-hidden bg-[#020B24]">

  {/* Dot Grid */}
  <div className="moving-dots absolute inset-0 opacity-25" />

  {/* Glow Left */}
  <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />

  {/* Glow Right */}
  <div className="absolute top-[30%] right-0 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[180px]" />

  {/* Glow Bottom */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-400/10 blur-[180px]" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(0,140,255,.25),transparent_35%),radial-gradient(circle_at_85%_45%,rgba(0,212,255,.18),transparent_35%)]" />

</div>

      {/* Main Content */}
      <main className="w-full flex-grow flex flex-col items-center relative z-10">
        {/* Hero Section */}
        <section className="relative px-6 py-12 md:py-24 overflow-hidden flex flex-col items-center text-center w-full max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-1.5 px-4 py-1.5 bg-cyan-500/20 border border-cyan-500/40 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-sans text-[10px] text-cyan-300 font-bold uppercase tracking-wider">
              ⚡ PHIÊN BẢN 2.0 ĐÃ SẴN SÀNG
            </span>
          </div>

          {/* Title */}
          <h1 className="font-sans font-black text-4xl md:text-6xl text-white mb-4 md:mb-6 max-w-3xl mx-auto leading-[1.2] md:leading-[1.1] tracking-tight px-4">
            Trợ lý học vụ <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI</span> dành cho sinh viên hiện đại
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto px-4">
            Tối ưu hóa quy trình học tập, tra cứu tài liệu và giải đáp mọi thắc mắc học vụ chỉ trong tích tắc.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-md justify-center px-4">
            <button 
              onClick={onStart}
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3.5 px-8 rounded-xl font-bold font-sans text-sm tracking-wide active:scale-95 transition-all hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer"
            >
              Bắt đầu ngay
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById("features-section");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto bg-white/10 border border-white/20 text-white py-3.5 px-8 rounded-xl font-bold font-sans text-sm tracking-wide active:bg-white/5 transition-all hover:bg-white/20 hover:border-white/40 cursor-pointer"
            >
              Tìm hiểu thêm
            </button>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="w-full px-6 py-16 flex flex-col items-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-8">
              <h2 className="font-sans font-black text-3xl md:text-4xl text-white mb-2">Một nền tảng duy nhất cho toàn bộ học vụ</h2>
              <p className="text-slate-400 text-sm md:text-base">Quản lý lịch học, học phí, điểm số và tài liệu.</p>
            </div>
            
            {/* Dashboard Preview Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <div className="relative bg-[#0a1428] border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden">
                <img
  src={dashboardPreview}
  alt="Academia AI Dashboard Preview"
  className="w-full h-auto rounded-lg shadow-2xl object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23041428" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%2306b6d4" text-anchor="middle" dominant-baseline="middle"%3EDashboard Preview%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI Demo Section */}
        <section id="features-section" className="w-full px-6 py-16 flex flex-col items-center">
          <div className="max-w-2xl mx-auto w-full">
            <div className="text-center mb-8">
              <h2 className="font-sans font-black text-3xl md:text-4xl text-white mb-2">Hỏi AI bất kỳ điều gì</h2>
              <p className="text-slate-400 text-sm md:text-base">Nhận câu trả lời tức thì từ trợ lý AI thông minh</p>
            </div>

            {/* Chat Demo */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 backdrop-blur-sm">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-cyan-600/30 border border-cyan-500/50 rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                  <p className="text-white text-sm">GPA của tôi hiện tại là bao nhiêu?</p>
                </div>
              </div>

              {/* AI Message */}
              <div className="flex justify-start">
                <div className="bg-blue-600/20 border border-blue-500/50 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-blue-300 font-semibold">Academia AI</span>
                  </div>
                  <p className="text-slate-200 text-sm">GPA hiện tại của bạn là <span className="text-cyan-400 font-bold">3.45 / 4.0</span>. Bạn đang xếp loại <span className="text-green-400 font-bold">Giỏi</span>.</p>
                </div>
              </div>

              {/* Suggested Questions */}
              <div className="pt-4 flex flex-wrap gap-2">
                <button className="bg-white/5 hover:bg-white/10 border border-white/20 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 px-3 py-2 rounded-lg text-xs transition-all cursor-pointer">
                  💡 Môn học cần cải thiện?
                </button>
                <button className="bg-white/5 hover:bg-white/10 border border-white/20 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 px-3 py-2 rounded-lg text-xs transition-all cursor-pointer">
                  📅 Lịch thi sắp tới
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full px-6 py-16">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="text-center mb-10">
              <h3 className="font-sans font-black text-3xl md:text-4xl text-white mb-2">Tính năng vượt trội</h3>
              <p className="text-slate-400 text-sm md:text-base">Được thiết kế riêng cho hệ sinh thái Academia</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* Feature 1 */}
              <div className="bg-white/5 border border-white/10 hover:border-cyan-500/50 p-6 rounded-2xl transition-all hover:bg-white/10 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-bold text-lg text-white mb-2">Chatbot AI</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Trò chuyện trực tiếp để giải quyết bài tập, tóm tắt bài giảng hoặc lập kế hoạch ôn thi hiệu quả.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/5 border border-white/10 hover:border-blue-500/50 p-6 rounded-2xl transition-all hover:bg-white/10 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-bold text-lg text-white mb-2">Tra cứu tài liệu</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Kho lưu trữ thông minh giúp bạn tìm kiếm giáo trình, tài liệu tham khảo và slide bài giảng trong vài giây.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/5 border border-white/10 hover:border-violet-500/50 p-6 rounded-2xl transition-all hover:bg-white/10 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/50 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-bold text-lg text-white mb-2">Hỏi đáp học vụ</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Giải đáp nhanh các thắc mắc về quy chế đào tạo, tín chỉ, lịch thi và các thủ tục hành chính tại trường.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats & Testimonials Section */}
        <section className="w-full px-6 py-16">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full text-center mb-16">
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">15K+</div>
                <div className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-bold">Sinh viên</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">500+</div>
                <div className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-bold">Giảng viên</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">2M+</div>
                <div className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-bold">Tài liệu</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">98%</div>
                <div className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-bold">Hài lòng</div>
              </div>
            </div>

            {/* Testimonials - 3 Cards */}
            <div className="w-full">
              <h3 className="font-sans font-black text-2xl md:text-3xl text-white text-center mb-8">Sinh viên nói gì về Academia AI</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    "Academia AI đã thay đổi hoàn toàn cách mình quản lý việc học. Mọi thứ đều nằm trong tầm tay!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">M</div>
                    <div>
                      <p className="text-white font-semibold text-sm">Minh Quân</p>
                      <p className="text-slate-500 text-xs">SV Năm 2</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    "Từ khi dùng Academia AI, tôi giải quyết bài tập nhanh hơn 3 lần. Thật tuyệt vời!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-400 font-bold">L</div>
                    <div>
                      <p className="text-white font-semibold text-sm">Linh Chiêu</p>
                      <p className="text-slate-500 text-xs">SV Năm 3</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-violet-400 text-violet-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    "Không còn lo lắng về lịch học hay thủ tục đăng ký môn. Academia AI giải quyết tất cả!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-violet-500/30 flex items-center justify-center text-violet-400 font-bold">H</div>
                    <div>
                      <p className="text-white font-semibold text-sm">Huy Mạnh</p>
                      <p className="text-slate-500 text-xs">SV Năm 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-6 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-violet-600/20 border border-white/10 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm">
              <h2 className="font-sans font-black text-2xl md:text-3xl text-white mb-3">
                Sẵn sàng trải nghiệm Academia AI?
              </h2>
              <p className="text-slate-300 text-sm md:text-base mb-8">
                Tham gia cùng hàng nghìn sinh viên đang sử dụng.
              </p>
              <button 
                onClick={onStart}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3.5 px-8 rounded-xl font-bold font-sans text-base tracking-wide active:scale-95 transition-all hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer"
              >
                Đăng nhập ngay
              </button>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="w-full px-6 py-16 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center mb-6 relative">
            <div className="w-10 h-10 rounded-full bg-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-lg">
              @
            </div>
          </div>
          <h3 className="font-sans font-extrabold text-xl text-white mb-2">Bạn cần hỗ trợ?</h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-xs">
            Đội ngũ kỹ thuật luôn sẵn sàng 24/7 để giúp đỡ bạn.
          </p>
          <a 
            href="mailto:support@academia.ai"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-all cursor-pointer"
          >
            support@academia.ai
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>
      </main>
<section className="w-full px-6 py-16">
  <div className="max-w-3xl mx-auto">

    <div className="
      rounded-3xl
      border border-cyan-500/20
      bg-gradient-to-r
      from-cyan-900/40
      via-blue-900/40
      to-violet-900/40
      backdrop-blur-md
      p-10
      text-center
    ">

      <h2 className="text-4xl font-black text-white">
        Sẵn sàng trải nghiệm Academia AI?
      </h2>

      <p className="text-slate-300 mt-4">
        Tham gia cùng hàng nghìn sinh viên đang sử dụng.
      </p>

      <button
        onClick={onStart}
        className="
          mt-8
          px-10
          py-4
          rounded-xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          text-white
          font-bold
        "
      >
        Đăng nhập ngay
      </button>

    </div>
  </div>
</section>
      <footer className="w-full border-t border-cyan-500/10 bg-[#06132c]">

  <div className="max-w-7xl mx-auto px-10 py-14">

    <div className="grid grid-cols-1 md:grid-cols-6 gap-10">

      {/* Academia AI */}
<div className="md:col-span-2 max-w-md">

  <div className="flex items-center gap-3 mb-5">
    <Brain
      size={48}
      className="text-cyan-400"
    />

    <div>
      <h3 className="text-3xl font-black text-white">
        Academia AI
      </h3>

      <p className="text-cyan-400 text-sm">
        Empowering Scholars
      </p>
    </div>
  </div>

  <p className="text-slate-400 leading-8 text-base">
    Trợ lý học vụ thông minh dành cho sinh viên,
    hỗ trợ học tập, quản lý lịch học, học phí,
    tra cứu tài liệu và giải đáp mọi thắc mắc
    học vụ trên một nền tảng duy nhất.
  </p>

  <div className="flex gap-4 mt-8">
    <div className="w-12 h-12 rounded-full border border-cyan-500/20 flex items-center justify-center hover:border-cyan-400 transition">
      <Facebook size={20} />
    </div>

    <div className="w-12 h-12 rounded-full border border-cyan-500/20 flex items-center justify-center hover:border-cyan-400 transition">
      <Github size={20} />
    </div>

    <div className="w-12 h-12 rounded-full border border-cyan-500/20 flex items-center justify-center hover:border-cyan-400 transition">
      <Mail size={20} />
    </div>
  </div>

</div>

      {/* Sản phẩm */}
      <div>
        <h4 className="text-cyan-400 font-bold text-xl mb-6">
          SẢN PHẨM
        </h4>

        <ul className="space-y-4 text-slate-300">
  <li className="flex items-center gap-3">
    <Bot size={18} className="text-cyan-400" />
    AI Assistant
  </li>

  <li className="flex items-center gap-3">
    <GraduationCap size={18} className="text-cyan-400" />
    Quản lý học tập
  </li>

  <li className="flex items-center gap-3">
    <BookOpen size={18} className="text-cyan-400" />
    Tra cứu tài liệu
  </li>

  <li className="flex items-center gap-3">
    <MessageCircleQuestion size={18} className="text-cyan-400" />
    Hỏi đáp học vụ
  </li>

  <li className="flex items-center gap-3">
    <Bell size={18} className="text-cyan-400" />
    Thông báo & Sự kiện
  </li>
</ul>
      </div>

      {/* Hỗ trợ */}
      <div>
        <h4 className="text-cyan-400 font-bold text-xl mb-6">
          HỖ TRỢ
        </h4>

        <ul className="space-y-4 text-slate-300">
  <li className="flex items-center gap-3">
    <CircleHelp size={18} className="text-cyan-400" />
    FAQ
  </li>

  <li className="flex items-center gap-3">
    <Mail size={18} className="text-cyan-400" />
    Liên hệ hỗ trợ
  </li>

  <li className="flex items-center gap-3">
    <BookOpen size={18} className="text-cyan-400" />
    Hướng dẫn sử dụng
  </li>

  <li className="flex items-center gap-3">
    <LifeBuoy size={18} className="text-cyan-400" />
    Trung tâm trợ giúp
  </li>

  <li className="flex items-center gap-3">
    <Users size={18} className="text-cyan-400" />
    Cộng đồng sinh viên
  </li>
</ul>
      </div>

      {/* Liên hệ */}
      <div>
        <h4 className="text-cyan-400 font-bold text-xl mb-6">
          LIÊN HỆ
        </h4>

        <div className="space-y-5 text-slate-300">

          <div className="flex gap-3">
            <MapPin size={18}
            className="text-cyan-400 shrink-0 mt-1" />
            <span>
              Du Thịnh,
              Đông Hiếu,
              Thái Hòa, Nghệ An
            </span>
          </div>

          <div className="flex gap-3">
            <MapPin size={18}
            className="text-cyan-400 shrink-0 mt-1" />
            <span>
              Phương Canh,
              Nam Từ Liêm,
              Hà Nội
            </span>
          </div>

          <div className="flex gap-3">
            <Phone size={18}
            className="text-cyan-400 shrink-0 mt-1"/>
            <span>
              0397598541
            </span>
          </div>

          <div className="flex gap-3">
            <Mail size={18}
            className="text-cyan-400 shrink-0 mt-1" />
            <span>
              support@academia.ai
            </span>
          </div>

        </div>
      </div>

      {/* Pháp lý */}
<div>

  <h4 className="text-cyan-400 font-bold text-xl mb-6">
    PHÁP LÝ
  </h4>

  <div className="space-y-4 text-slate-300">

    <div className="flex gap-3">
      <Shield size={18} className="text-cyan-400 mt-1" />
      <span>Chính sách bảo mật</span>
    </div>

    <div className="flex gap-3">
      <FileText size={18} className="text-cyan-400 mt-1" />
      <span>Điều khoản sử dụng</span>
    </div>

    <div className="flex gap-3">
      <Cookie size={18} className="text-cyan-400 mt-1" />
      <span>Chính sách Cookie</span>
    </div>

    <div className="flex gap-3">
      <Shield size={18} className="text-cyan-400 mt-1" />
      <span>Bản quyền</span>
    </div>

  </div>

</div>

    </div>

    <div className="border-t border-cyan-500/10 mt-10 pt-6 text-center text-slate-500 text-sm">
     Tlynh's exclusive version for Academia AI - © 2026 All rights reserved.
    </div>

  </div>

</footer>
    </div>
  );
}