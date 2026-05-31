/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Upload, FileText, Edit2, Trash2, CheckCircle, HelpCircle, Archive, PlusCircle, Search, AlertCircle, Loader2 } from 'lucide-react';
import { DocumentItem } from '../../types';
import AILayout from '../../components/AILayout';

export default function DocumentsView() {
  const [documents, setDocuments] = useState<DocumentItem[]>([
    {
      id: 'doc-1',
      name: 'Giai_Tich_1_Final.pdf',
      type: 'PDF',
      date: '12/04/2024',
      status: 'processed',
      size: '4.8 MB'
    },
    {
      id: 'doc-2',
      name: 'Lich_Su_Triet_Hoc.docx',
      type: 'DOCX',
      date: '10/04/2024',
      status: 'processed',
      size: '1.2 MB'
    },
    {
      id: 'doc-3',
      name: 'Data_Science_Notes.pdf',
      type: 'PDF',
      date: '08/04/2024',
      status: 'processed',
      size: '8.5 MB'
    }
  ]);

  const [filterType, setFilterType] = useState<'all' | 'recent' | 'PDF' | 'DOCX'>('all');
  const [editingDocId, setEditingDocId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processMockUpload(files[0].name, files[0].size);
    }
  };

  const processMockUpload = (fileName: string, fileSize?: number) => {
    const fileType = fileName.toLowerCase().endsWith('.docx') ? 'DOCX' : 'PDF';
    const sizeStr = fileSize ? `${(fileSize / (1024 * 1024)).toFixed(1)} MB` : '2.1 MB';
    
    const newDocId = 'doc-' + Math.random().toString(36).substring(2, 9);
    const newDoc: DocumentItem = {
      id: newDocId,
      name: fileName,
      type: fileType,
      date: new Date().toLocaleDateString('vi-VN'),
      status: 'processing',
      size: sizeStr
    };

    setDocuments(prev => [newDoc, ...prev]);

    // Simulate real AI Analysis processing checker
    setTimeout(() => {
      setDocuments(prev => prev.map(item => {
        if (item.id === newDocId) {
          return { ...item, status: 'processed' };
        }
        return item;
      }));
    }, 3000);
  };

  // Drag and Drop Zone support
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processMockUpload(files[0].name, files[0].size);
    }
  };

  const handleDelete = (id: string) => {
    setDocuments(prev => prev.filter(item => item.id !== id));
  };

  const startRename = (doc: DocumentItem) => {
    setEditingDocId(doc.id);
    setEditingName(doc.name);
  };

  const saveRename = (id: string) => {
    setDocuments(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, name: editingName };
      }
      return item;
    }));
    setEditingDocId(null);
  };

  const filteredDocs = documents.filter(doc => {
    if (filterType === 'all') return true;
    if (filterType === 'recent') return true; // Show all for recent mockup logic
    return doc.type === filterType;
  });

  return (
    <AILayout>
      <div className="w-full flex-grow p-6 space-y-6 max-w-4xl mx-auto pb-28">
      {/* Title section */}
      <div className="space-y-1">
        <h2 className="font-sans font-black text-2.5xl text-[#0b1c30]">Quản lý tài liệu học vụ</h2>
        <p className="text-xs text-[#737686] font-medium">Tổ chức và chuẩn hóa kho dữ liệu học tập với AI.</p>
      </div>

      {/* Drag & Drop Main Action Zone */}
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleUploadClick}
        className={`w-full bg-[#2563eb]/5 border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
          isDragging ? 'bg-blue-100/50 border-[#004ac6]' : 'border-[#2563eb]/20'
        }`}
      >
        <div className="flex flex-col items-center text-center gap-3">
          <div className="bg-[#004ac6]/15 hover:bg-blue-200/50 p-4 rounded-full text-[#004ac6] transition-colors relative">
            <Upload className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="block font-sans font-black text-[#0b1c30] text-sm tracking-wide">
              Kéo thả hoặc Nhấp để tải PDF/DOCX
            </span>
            <span className="block text-[11px] text-[#737686] font-bold mt-1 uppercase tracking-wider">
              Tối đa 25MB mỗi file mẫu
            </span>
          </div>
        </div>
        
        <input 
          ref={fileInputRef}
          type="file"
          accept=".pdf,.docx,.txt"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Search Filter tags view */}
      <div className="flex gap-2 overflow-x-auto pb-1 mx-0.5 whitespace-nowrap scrollbar-none">
        <button 
          onClick={() => setFilterType('all')}
          className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold border transition-colors cursor-pointer ${
            filterType === 'all' 
              ? 'bg-[#004ac6] border-[#004ac6] text-white shadow-sm' 
              : 'bg-[#eff4ff] border-[#c3c6d7]/20 text-[#737686] hover:bg-[#e5eeff]'
          }`}
        >
          Tất cả tài liệu
        </button>
        <button 
          onClick={() => setFilterType('recent')}
          className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold border transition-colors cursor-pointer ${
            filterType === 'recent' 
              ? 'bg-[#004ac6] border-[#004ac6] text-white shadow-sm' 
              : 'bg-[#eff4ff] border-[#c3c6d7]/20 text-[#737686] hover:bg-[#e5eeff]'
          }`}
        >
          Tải lên gần đây
        </button>
        <button 
          onClick={() => setFilterType('PDF')}
          className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold border transition-colors cursor-pointer ${
            filterType === 'PDF' 
              ? 'bg-[#004ac6] border-[#004ac6] text-white shadow-sm' 
              : 'bg-[#eff4ff] border-[#c3c6d7]/20 text-[#737686] hover:bg-[#e5eeff]'
          }`}
        >
          Tệp PDF
        </button>
        <button 
          onClick={() => setFilterType('DOCX')}
          className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold border transition-colors cursor-pointer ${
            filterType === 'DOCX' 
              ? 'bg-[#004ac6] border-[#004ac6] text-white shadow-sm' 
              : 'bg-[#eff4ff] border-[#c3c6d7]/20 text-[#737686] hover:bg-[#e5eeff]'
          }`}
        >
          Tệp DOCX
        </button>
      </div>

      {/* Document layout loop block list */}
      <div className="space-y-4">
        {filteredDocs.length > 0 ? (
          filteredDocs.map((doc) => (
            <div 
              key={doc.id} 
              className="bg-white border border-[#c3c6d7]/35 rounded-2xl p-4 shadow-sm flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-[#004ac6]/10 p-2.5 rounded-xl text-[#004ac6] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 pr-2">
                    {editingDocId === doc.id ? (
                      <div className="flex items-center gap-2">
                        <input 
                          type="text" 
                          value={editingName} 
                          onChange={(e) => setEditingName(e.target.value)} 
                          className="px-2 py-1 text-xs border border-blue-400 outline-none rounded bg-[#f8f9ff] font-bold text-[#0b1c30]"
                        />
                        <button 
                          onClick={() => saveRename(doc.id)} 
                          className="bg-[#004ac6] text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider scale-90"
                        >
                          Lưu
                        </button>
                      </div>
                    ) : (
                      <h3 className="font-sans font-extrabold text-[#0b1c30] text-sm truncate max-w-[200px] sm:max-w-xs">{doc.name}</h3>
                    )}
                    <span className="text-[10px] font-bold text-[#737686] tracking-wide uppercase block mt-0.5">
                      {doc.type} • {doc.size || '2.4 MB'}
                    </span>
                  </div>
                </div>

                <div className="flex gap-1.5 shrink-0">
                  <button 
                    onClick={() => startRename(doc)}
                    className="p-1 text-[#737686] hover:text-[#004ac6] rounded-lg hover:bg-[#eff4ff] transition-all cursor-pointer"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(doc.id)}
                    className="p-1 text-red-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-all cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Divider Details row */}
              <div className="flex items-center justify-between border-t border-[#c3c6d7]/15 pt-3.5 mt-3.5">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] text-[#737686] font-extrabold uppercase tracking-wide">Ngày tải</span>
                  <span className="text-xs text-[#0b1c30] font-semibold">{doc.date}</span>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-[10px] text-[#737686] font-extrabold uppercase tracking-wide">Trạng thái</span>
                  
                  {doc.status === 'processing' ? (
                    <span className="bg-[#eff4ff] text-[#004ac6] px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin text-[#004ac6]" />
                      AI Analyzing
                    </span>
                  ) : (
                    <span className="bg-[#22c55e]/10 text-[#166534] px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1.5 border border-[#22c55e]/20">
                      <CheckCircle className="w-3.5 h-3.5" />
                      AI Processed
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 text-center text-[#737686] font-semibold bg-white border border-dashed border-[#c3c6d7]/40 rounded-2xl">
            Không có tệp tài liệu nào được hiển thị.
          </div>
        )}
      </div>

      {/* Page counts and viewing footer details */}
      <div className="mt-8 text-center pb-12 flex flex-col items-center gap-4">
        <div className="opacity-30">
          <Archive className="w-12 h-12" />
        </div>
        <p className="text-xs text-[#737686] font-semibold">
          Hiển thị {filteredDocs.length} trên tổng số {documents.length} tài liệu học tập
        </p>
        <button 
          onClick={handleUploadClick}
          className="text-[#004ac6] hover:text-[#2563eb] text-xs font-bold py-2 px-6 border border-[#004ac6]/20 hover:border-[#004ac6] rounded-full hover:bg-[#eff4ff]/45 transition-colors cursor-pointer capitalize font-sans"
        >
          Tải thêm tài liệu
        </button>
      </div>
      </div>
    </AILayout>
  );
}
