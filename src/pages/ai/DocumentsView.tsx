import React, { useRef, useState } from 'react';
import {
  Bell,
  Brain,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  FileArchive,
  FileText,
  MessageSquare,
  Pencil,
  Plus,
  Search,
  Sparkles,
  Star,
  Trash2,
  UploadCloud,
  X,
} from 'lucide-react';

import { UserSession } from '../../types';

type DocumentType = 'PDF' | 'DOCX' | 'PPTX';

interface StudyDocument {
  id: string;
  name: string;
  type: DocumentType;
  size: string;
  subject: string;
  date: string;
  uploadedAt: string;
  pages: number;
  status: 'processing' | 'processed';
  favorite?: boolean;
}

interface DocumentsViewProps {
  user?: UserSession | null;
}

const initialDocuments: StudyDocument[] = [
  {
    id: 'doc-1',
    name: 'Giai_Tich_1_Final.pdf',
    type: 'PDF',
    size: '4.8 MB',
    subject: 'Giải tích',
    date: '12/04/2026',
    uploadedAt: '12/04/2026 10:30',
    pages: 128,
    status: 'processed',
    favorite: true,
  },
  {
    id: 'doc-2',
    name: 'Java_Programming.docx',
    type: 'DOCX',
    size: '3.2 MB',
    subject: 'Lập trình Java',
    date: '11/04/2026',
    uploadedAt: '11/04/2026 14:10',
    pages: 84,
    status: 'processed',
  },
  {
    id: 'doc-3',
    name: 'Bai_Giang_AI_Co_Ban.pptx',
    type: 'PPTX',
    size: '6.7 MB',
    subject: 'Trí tuệ nhân tạo',
    date: '10/04/2026',
    uploadedAt: '10/04/2026 09:20',
    pages: 56,
    status: 'processed',
  },
  {
    id: 'doc-4',
    name: 'CSDL_Nang_Cao.pdf',
    type: 'PDF',
    size: '5.1 MB',
    subject: 'Cơ sở dữ liệu',
    date: '08/04/2026',
    uploadedAt: '08/04/2026 16:45',
    pages: 96,
    status: 'processed',
  },
];

const filters = ['Tất cả', 'PDF', 'DOCX', 'PPTX', 'Gần đây'];

export default function DocumentsView({ user }: DocumentsViewProps) {
  const [documents, setDocuments] = useState<StudyDocument[]>(initialDocuments);
  const [selectedDocumentId, setSelectedDocumentId] = useState('doc-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const [isDragging, setIsDragging] = useState(false);
  const [editingDocumentId, setEditingDocumentId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const displayName = user?.name || 'Thùy Linh';
  const avatar = user?.avatar || '/assets/images/default-avatar.svg';

  const filteredDocuments = documents.filter((document) => {
    const matchesSearch =
      document.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      document.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === 'Tất cả' ||
      activeFilter === 'Gần đây' ||
      document.type === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const selectedDocument =
    documents.find((document) => document.id === selectedDocumentId) ||
    documents[0];

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      processUpload(file.name, file.size);
    }
  };

  const inferType = (fileName: string): DocumentType => {
    const normalizedName = fileName.toLowerCase();

    if (normalizedName.endsWith('.docx')) {
      return 'DOCX';
    }

    if (normalizedName.endsWith('.pptx')) {
      return 'PPTX';
    }

    return 'PDF';
  };

  const processUpload = (fileName: string, fileSize?: number) => {
    const type = inferType(fileName);
    const id = crypto.randomUUID();
    const now = new Date();
    const uploadedAt = now.toLocaleString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    const newDocument: StudyDocument = {
      id,
      name: fileName,
      type,
      size: fileSize
        ? `${(fileSize / (1024 * 1024)).toFixed(1)} MB`
        : '2.4 MB',
      subject: 'Tài liệu mới',
      date: now.toLocaleDateString('vi-VN'),
      uploadedAt,
      pages: 32,
      status: 'processing',
    };

    setDocuments((currentDocuments) => [newDocument, ...currentDocuments]);
    setSelectedDocumentId(id);

    window.setTimeout(() => {
      setDocuments((currentDocuments) =>
        currentDocuments.map((document) =>
          document.id === id
            ? {
                ...document,
                status: 'processed',
              }
            : document
        )
      );
    }, 1800);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (file) {
      processUpload(file.name, file.size);
    }
  };

  const startRename = (document: StudyDocument) => {
    setEditingDocumentId(document.id);
    setEditingName(document.name);
  };

  const saveRename = (id: string) => {
    if (!editingName.trim()) {
      setEditingDocumentId(null);
      return;
    }

    setDocuments((currentDocuments) =>
      currentDocuments.map((document) =>
        document.id === id
          ? {
              ...document,
              name: editingName,
            }
          : document
      )
    );
    setEditingDocumentId(null);
  };

  const deleteDocument = (id: string) => {
    setDocuments((currentDocuments) =>
      currentDocuments.filter((document) => document.id !== id)
    );

    if (selectedDocumentId === id) {
      setSelectedDocumentId(documents.find((document) => document.id !== id)?.id || '');
    }
  };

  return (
    <div className="relative min-h-screen flex-1 overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_16%,rgba(0,140,255,.15),transparent_30%),radial-gradient(circle_at_88%_68%,rgba(0,255,170,.08),transparent_28%)]" />

      <main className="relative mx-auto w-full max-w-[1700px] px-5 py-8 lg:px-8">
        <header className="mb-7 flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h1 className="text-3xl font-black md:text-4xl">
              Quản lý tài liệu học vụ
            </h1>
            <p className="mt-4 text-base text-slate-300">
              Tổ chức và chuẩn hóa kho dữ liệu học tập với AI.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <label className="relative block w-full min-w-[280px] max-w-md sm:w-[430px]">
              <Search
                size={24}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300"
              />
              <input
                type="search"
                placeholder="Tìm kiếm tài liệu..."
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

        <section className="mb-7 grid gap-5 md:grid-cols-2 2xl:grid-cols-4">
          <StatCard
            type="folder"
            value="125"
            label="TỔNG TÀI LIỆU"
            badge="+12%"
            accent="blue"
          />
          <StatCard
            type="PDF"
            value="78"
            label="TÀI LIỆU PDF"
            badge="+8%"
            accent="red"
          />
          <StatCard
            type="DOCX"
            value="32"
            label="TÀI LIỆU DOCX"
            badge="-3%"
            accent="blue"
          />
          <StatCard
            type="ai"
            value="112"
            label="ĐÃ XỬ LÝ AI"
            badge="+15%"
            accent="green"
          />
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_390px]">
          <div className="min-w-0">
            <div className="mb-6 grid gap-5 lg:grid-cols-[1fr_280px]">
              <button
                type="button"
                onClick={handleUploadClick}
                onDragOver={(event) => {
                  event.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`flex min-h-40 flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition-all ${
                  isDragging
                    ? 'border-cyan-300 bg-cyan-500/15'
                    : 'border-cyan-500/45 bg-[#061638]/55 hover:border-cyan-300 hover:bg-cyan-500/10'
                }`}
              >
                <UploadCloud size={46} className="mb-4 text-cyan-300" />
                <span className="text-base font-bold">
                  Kéo thả hoặc nhập để tải file lên
                </span>
                <span className="mt-2 text-sm text-slate-300">
                  PDF, DOCX, PPTX • Tối đa 25MB
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.docx,.pptx"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </button>

              <div className="space-y-5">
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 text-sm font-black uppercase tracking-wide text-white shadow-[0_0_22px_rgba(0,90,255,.25)] hover:bg-blue-500"
                >
                  <Plus size={22} />
                  Tải tài liệu
                </button>

                <div className="rounded-2xl border border-cyan-500/20 bg-[#061638]/80 p-5">
                  <p className="text-sm text-slate-300">Dung lượng đã sử dụng</p>
                  <p className="mt-2 font-semibold">2.4 GB / 10 GB</p>
                  <div className="mt-3 h-2 rounded-full bg-cyan-500/15">
                    <div className="h-2 w-1/4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5 grid gap-4 lg:grid-cols-[1fr_230px_230px]">
              <label className="relative block">
                <Search
                  size={22}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Tìm kiếm tài liệu..."
                  className="h-14 w-full rounded-2xl border border-cyan-500/25 bg-[#061638]/80 pl-14 pr-5 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
                />
              </label>

              <SelectLike label="Tất cả môn học" />
              <SelectLike label="Mới nhất" />
            </div>

            <div className="mb-5 flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-5 py-3 text-sm font-bold transition-all ${
                    activeFilter === filter
                      ? 'border-blue-500 bg-blue-600 text-white'
                      : 'border-cyan-500/15 bg-[#061638]/70 text-slate-300 hover:border-cyan-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {filteredDocuments.map((document) => (
                <DocumentRow
                  key={document.id}
                  document={document}
                  isSelected={selectedDocument?.id === document.id}
                  isEditing={editingDocumentId === document.id}
                  editingName={editingName}
                  onEditingNameChange={setEditingName}
                  onSelect={() => setSelectedDocumentId(document.id)}
                  onStartRename={() => startRename(document)}
                  onSaveRename={() => saveRename(document.id)}
                  onDelete={() => deleteDocument(document.id)}
                />
              ))}

              {filteredDocuments.length === 0 && (
                <div className="rounded-2xl border border-dashed border-cyan-500/25 bg-[#061638]/70 p-12 text-center font-semibold text-slate-400">
                  Không có tài liệu nào phù hợp.
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <PageButton icon={<ChevronLeft size={18} />} />
              <PageButton label="1" active />
              <PageButton label="2" />
              <PageButton label="3" />
              <span className="px-4 text-slate-400">...</span>
              <PageButton label="10" />
              <PageButton icon={<ChevronRight size={18} />} />
            </div>
          </div>

          <DocumentDetailPanel document={selectedDocument} />
        </section>
      </main>
    </div>
  );
}

function StatCard({
  type,
  value,
  label,
  badge,
  accent,
}: {
  type: DocumentType | 'folder' | 'ai';
  value: string;
  label: string;
  badge: string;
  accent: 'blue' | 'red' | 'green';
}) {
  const accentClasses = {
    blue: 'border-cyan-500/35 text-blue-400',
    red: 'border-rose-500/25 text-rose-400',
    green: 'border-emerald-500/25 text-emerald-400',
  };

  return (
    <div
      className={`relative min-h-36 overflow-hidden rounded-2xl border bg-[#061638]/75 p-6 shadow-[0_0_26px_rgba(0,140,255,.1)] ${accentClasses[accent]}`}
    >
      <div className="flex items-start gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-current/12">
          {type === 'ai' ? (
            <Brain size={34} />
          ) : type === 'folder' ? (
            <FileArchive size={34} />
          ) : (
            <FileText size={34} />
          )}
        </div>
        <div>
          <div className="flex items-start gap-4">
            <h2 className="text-4xl font-black text-white">{value}</h2>
            <span className="rounded-xl bg-current/10 px-3 py-1 text-xs font-bold">
              {badge}
            </span>
          </div>
          <p className="mt-2 text-sm font-bold uppercase tracking-wide text-slate-300">
            {label}
          </p>
        </div>
      </div>
      <div className="absolute bottom-4 left-7 right-7 h-8 opacity-70">
        <div className="h-full bg-[linear-gradient(135deg,transparent_0_8%,currentColor_8%_10%,transparent_10%_18%,currentColor_18%_20%,transparent_20%_30%,currentColor_30%_32%,transparent_32%_44%,currentColor_44%_46%,transparent_46%_58%,currentColor_58%_60%,transparent_60%_76%,currentColor_76%_78%,transparent_78%_100%)]" />
      </div>
    </div>
  );
}

function SelectLike({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex h-14 items-center justify-between rounded-2xl border border-cyan-500/25 bg-[#061638]/80 px-5 text-sm font-semibold text-white"
    >
      {label}
      <ChevronDown size={20} className="text-slate-400" />
    </button>
  );
}

function DocumentRow({
  document,
  isSelected,
  isEditing,
  editingName,
  onEditingNameChange,
  onSelect,
  onStartRename,
  onSaveRename,
  onDelete,
}: {
  document: StudyDocument;
  isSelected: boolean;
  isEditing: boolean;
  editingName: string;
  onEditingNameChange: (value: string) => void;
  onSelect: () => void;
  onStartRename: () => void;
  onSaveRename: () => void;
  onDelete: () => void;
}) {
  return (
    <article
      className={`grid gap-4 rounded-2xl border bg-[#061638]/80 p-4 transition-all lg:grid-cols-[1fr_170px_130px_270px] lg:items-center ${
        isSelected
          ? 'border-cyan-500/55 shadow-[0_0_24px_rgba(0,140,255,.15)]'
          : 'border-cyan-500/15 hover:border-cyan-500/35'
      }`}
    >
      <button
        type="button"
        onClick={onSelect}
        className="flex min-w-0 items-center gap-4 text-left"
      >
        <FileBadge type={document.type} />
        <div className="min-w-0">
          {isEditing ? (
            <div className="flex gap-2">
              <input
                value={editingName}
                onChange={(event) => onEditingNameChange(event.target.value)}
                className="h-9 min-w-0 rounded-lg border border-cyan-500/35 bg-[#020817] px-3 text-white outline-none"
              />
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onSaveRename();
                }}
                className="rounded-lg bg-blue-600 px-3 text-xs font-bold"
              >
                Lưu
              </button>
            </div>
          ) : (
            <h3 className="truncate text-lg font-bold text-white">
              {document.name}
              <Star
                size={17}
                className={`ml-2 inline ${
                  document.favorite ? 'fill-cyan-300 text-cyan-300' : 'text-slate-400'
                }`}
              />
            </h3>
          )}
          <p className="mt-1 text-sm text-slate-300">
            {document.type} • {document.size} • Môn: {document.subject}
          </p>
        </div>
      </button>

      <span className="text-sm text-slate-300">{document.date}</span>

      <span className="w-fit rounded-full bg-emerald-500/15 px-4 py-2 text-xs font-bold text-emerald-300">
        {document.status === 'processed' ? 'AI Processed' : 'AI Analyzing'}
      </span>

      <div className="flex flex-wrap justify-start gap-3 lg:justify-end">
        <IconButton icon={<Eye size={19} />} color="blue" onClick={onSelect} />
        <IconButton icon={<Brain size={19} />} color="green" onClick={onSelect} />
        <IconButton
          icon={<MessageSquare size={19} />}
          color="violet"
          onClick={onSelect}
        />
        <IconButton icon={<Pencil size={19} />} color="blue" onClick={onStartRename} />
        <IconButton icon={<Trash2 size={19} />} color="red" onClick={onDelete} />
      </div>
    </article>
  );
}

function FileBadge({ type }: { type: DocumentType }) {
  const color =
    type === 'PDF'
      ? 'bg-red-500 text-white'
      : type === 'DOCX'
        ? 'bg-blue-500 text-white'
        : 'bg-orange-500 text-white';

  return (
    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}>
      <span className="text-xs font-black">{type}</span>
    </div>
  );
}

function IconButton({
  icon,
  color,
  onClick,
}: {
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'violet' | 'red';
  onClick: () => void;
}) {
  const colors = {
    blue: 'border-blue-500/25 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20',
    green:
      'border-emerald-500/25 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20',
    violet:
      'border-violet-500/25 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20',
    red: 'border-rose-500/25 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${colors[color]}`}
    >
      {icon}
    </button>
  );
}

function DocumentDetailPanel({ document }: { document?: StudyDocument }) {
  if (!document) {
    return null;
  }

  return (
    <aside className="rounded-2xl border border-cyan-500/35 bg-[#061638]/80 p-6 shadow-[0_0_26px_rgba(0,140,255,.13)] xl:sticky xl:top-6 xl:h-fit">
      <div className="mb-6 flex items-start justify-between border-b border-cyan-500/15 pb-6">
        <div className="flex gap-4">
          <FileBadge type={document.type} />
          <div>
            <h2 className="font-black text-white">{document.name}</h2>
            <p className="mt-1 text-sm text-slate-400">
              {document.type} • {document.size}
            </p>
          </div>
        </div>
        <button type="button" className="text-slate-300 hover:text-white">
          <X size={22} />
        </button>
      </div>

      <h3 className="mb-4 text-lg font-bold">Thông tin chi tiết</h3>
      <dl className="mb-6 grid grid-cols-[120px_1fr] gap-x-5 gap-y-3 text-sm">
        <dt className="text-slate-400">Môn học</dt>
        <dd className="font-semibold text-white">{document.subject}</dd>
        <dt className="text-slate-400">Ngày tải lên</dt>
        <dd className="font-semibold text-white">{document.uploadedAt}</dd>
        <dt className="text-slate-400">Kích thước</dt>
        <dd className="font-semibold text-white">{document.size}</dd>
        <dt className="text-slate-400">Số trang</dt>
        <dd className="font-semibold text-white">{document.pages}</dd>
        <dt className="text-slate-400">Trạng thái AI</dt>
        <dd>
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300">
            Đã xử lý AI
          </span>
        </dd>
      </dl>

      <h3 className="mb-4 text-lg font-bold">AI Tools</h3>
      <div className="space-y-3">
        <AiTool icon={<Brain size={22} />} title="Tóm tắt tài liệu" text="Tạo bản tóm tắt nội dung chính" />
        <AiTool icon={<Sparkles size={22} />} title="Sinh câu hỏi ôn tập" text="Tạo câu hỏi từ nội dung tài liệu" />
        <AiTool icon={<FileText size={22} />} title="Tạo Flashcard" text="Tạo thẻ ghi nhớ thông minh" />
        <AiTool icon={<MessageSquare size={22} />} title="Chat với tài liệu" text="Đặt câu hỏi về tài liệu này" />
      </div>

      <button
        type="button"
        className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 text-sm font-black text-white hover:bg-blue-500"
      >
        <Eye size={20} />
        Xem tài liệu
      </button>
    </aside>
  );
}

function AiTool({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-4 rounded-xl border border-cyan-500/15 bg-[#081b3d]/75 p-4 text-left hover:border-cyan-300"
    >
      <span className="text-cyan-300">{icon}</span>
      <span>
        <span className="block font-bold text-white">{title}</span>
        <span className="mt-1 block text-sm text-slate-400">{text}</span>
      </span>
    </button>
  );
}

function PageButton({
  label,
  icon,
  active = false,
}: {
  label?: string;
  icon?: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex h-12 min-w-12 items-center justify-center rounded-xl px-4 font-bold ${
        active
          ? 'bg-blue-600 text-white'
          : 'bg-[#061638]/80 text-slate-300 hover:bg-cyan-500/10'
      }`}
    >
      {icon || label}
    </button>
  );
}
