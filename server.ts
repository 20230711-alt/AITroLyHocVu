/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

// Lazy initialization of GoogleGenAI to prevent crashing on boot if key missing
function getGeminiClient() {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
  }
  return ai;
}

const app = express();
const PORT = 3000;

app.use(express.json());

// API health endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", geminiConfigured: !!process.env.GEMINI_API_KEY });
});

// Chat Proxy endpoint using Gemini 3.5-flash
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages array in request body" });
  }

  // Set system prompt supporting academic contexts
  const systemInstruction = 
    `Bạn là Academia AI (Trợ lý học vụ thông minh bậc học thuật). 
    Bạn thân thiện, chuyên nghiệp và có năng lực phân tích xuất sắc. 
    Trường học có một số thông tin quan trọng của sinh viên Alex Rivera hiện tại:
    1. THỜI HẠN ĐÓNG HỌC PHÍ HỌC KỲ NÀY: Hạn chót đóng đến ngày 25/12/2024.
    2. LỊCH HỌC MÔN CƠ SỞ DỮ LIỆU: Thứ 3 và Thứ 5 từ 08:00 - 10:30, tại phòng học B.402 (Tòa nhà Trung tâm).
    3. Sinh viên đang học ngành Khoa học Máy tính năm cuối (Computer Science Senior).
    Bạn có các công cụ như tóm tắt slide bài giảng, tạo câu hỏi ôn tập, tính chỉ số điểm GPA dự kiến.
    Khi sinh viên hỏi han, hãy trả lời súc tích bằng tiếng Việt chất lượng cao. Nếu sinh viên hỏi về học phí, lịch học, hãy cung cấp chính xác dữ liệu trên.`;

  try {
    const client = getGeminiClient();
    if (client) {
      // Map frontend messages into Gemini contents structure
      const contents = messages.map(msg => ({
        role: msg.sender === 'ai' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }));

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "Xin lỗi, hiện tại mình không thể trả lời câu hỏi này.";
      return res.json({ reply: replyText });
    } else {
      // No valid API key provided -> Return simulated smart response based on keywords
      const lastMessage = messages[messages.length - 1]?.text?.toLowerCase() || '';
      let replyText = "Mình ghi nhận câu hỏi của bạn. Mình là Academia AI, bạn cần hỗ trợ thêm thông tin gì nào?";

      if (lastMessage.includes("học phí") || lastMessage.includes("hoc phi") || lastMessage.includes("tiền học") || lastMessage.includes("đóng học")) {
        replyText = "Thời hạn đóng học phí học kỳ này của bạn có hạn chót là ngày 25/12/2024. Bạn hãy lưu ý đóng đúng hạn để tránh bị khóa đăng ký tín chỉ học kỳ tiếp theo nhé!";
      } else if (lastMessage.includes("lịch học") || lastMessage.includes("lich hoc") || lastMessage.includes("cơ sở dữ liệu") || lastMessage.includes("co so du lieu")) {
        replyText = "Lịch học môn Cơ sở dữ liệu của bạn diễn ra vào Thứ 3 & Thứ 5 hằng tuần từ 08:00 - 10:30 sáng, phòng B.402 (Tòa nhà Trung tâm). Hãy chuẩn bị bài trước khi lên giảng đường bạn nhé!";
      } else if (lastMessage.includes("chào") || lastMessage.includes("hello") || lastMessage.includes("hi")) {
        replyText = "Chào bạn! Mình có thể hỗ trợ giải đáp lịch học, hạn đóng học phí, tóm tắt tài liệu PDF/DOCX hoặc hỗ trợ ôn tập học vụ cho bạn hôm nay!";
      } else if (lastMessage.includes("gpa") || lastMessage.includes("điểm") || lastMessage.includes("diem")) {
        replyText = "Dựa trên kết quả trong hồ sơ của bạn, điểm GPA kỳ này dự kiến đạt 3.82/4.00 nếu bạn hoàn thành tốt đồ án môn học Cơ sở dữ liệu. Bạn có thể xem bảng phân tích chi tiết ở tab Dashboard nhé!";
      } else if (lastMessage.includes("tóm tắt") || lastMessage.includes("pdf") || lastMessage.includes("tài liệu") || lastMessage.includes("doc")) {
        replyText = "Quy trình tóm tắt tài liệu đang hoạt động! Bạn chỉ cần sang tab 'Files' để tải tài liệu bài giảng lên, AI sẽ tối ưu hóa và xuất tóm tắt ý chính cho bạn trong vòng 30 giây.";
      }

      return res.json({ reply: replyText });
    }
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Lỗi kết nối máy chủ AI: " + (error.message || "Unknown issue") });
  }
});

// Configure Vite middleware and static files
async function startServer() {
  const isProd = process.env.NODE_ENV === "production";
  
  if (!isProd) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Academia AI Server] running on http://localhost:${PORT}`);
  });
}

startServer();
