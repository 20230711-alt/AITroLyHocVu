/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ScreenType = 'LANDING' 
| 'LOGIN' 
| 'REGISTER' 
| 'CHAT' 
| 'FAQ' 
| 'DOCUMENTS' 
| 'ANALYTICS'
| 'STUDENT_DASHBOARD'
| 'PROFILE'
| 'GRADES'
| 'TUITION'
| 'SCHEDULE'
| 'NOTIFICATION'
| 'DOCUMENT_DETAIL'
| 'DOCUMENT_CHAT'
| 'SETTINGS'
| 'ADMIN_DASHBOARD';

export interface UserSession {
  email: string;
  name: string;
  role: 'student' | 'admin';
  avatar: string;
  major?: string;
}

export interface AcademicWidget {
  type: 'tuition' | 'schedule';
  title: string;
  subtitle?: string;
  details: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  widgets?: AcademicWidget[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  views: number;
  likes: number;
}

export interface DocumentItem {
  id: string;
  name: string;
  type: 'PDF' | 'DOCX';
  date: string;
  status: 'processed' | 'processing' | 'failed';
  size?: string;
}

export interface RecentActivity {
  id: string;
  user: string;
  action: string;
  time: string;
  type: 'upload' | 'chat' | 'register';
}
