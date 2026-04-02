import { Link } from "react-router-dom";
import { Mail, MessageCircle, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useState } from "react";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-neutral-200 rounded-lg">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-neutral-800 hover:bg-neutral-100 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 text-neutral-500 shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-neutral-500 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 text-neutral-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

const faqs = [
  {
    question: "Pikt.ag 是什麼？",
    answer:
      "Pikt.ag 是一款行動社交 CRM 應用程式，幫助您透過語意標籤、QR Code 和社群連結來管理人脈。無論是商務交流還是日常社交，都能輕鬆記住每一位聯絡人。",
  },
  {
    question: "如何使用語意標籤管理聯絡人？",
    answer:
      "您可以為每位聯絡人添加自訂標籤，例如「#台北咖啡聚會」、「#設計師」或「#2024展覽認識」。透過標籤搜尋，您能快速找到特定場合或特徵的聯絡人。",
  },
  {
    question: "QR Code 功能如何運作？",
    answer:
      "每位用戶都有專屬的 QR Code 名片。對方掃描後即可查看您的個人資料與社群連結，也能直接將您加入聯絡人，省去手動輸入的麻煩。",
  },
  {
    question: "Pikt.ag 是免費的嗎？",
    answer:
      "Pikt.ag 提供免費基本方案，包含核心的聯絡人管理與標籤功能。進階功能如批量匯入、數據分析等則包含在付費方案中，詳情請參閱我們的方案頁面。",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="Pikt.ag logo" className="h-8 w-8 rounded" />
            <span className="text-xl font-bold text-neutral-900">Pikt.ag</span>
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
        {/* Title */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-neutral-900 mb-3">聯絡我們</h1>
          <p className="text-neutral-600 leading-relaxed max-w-2xl">
            感謝您對 Pikt.ag 的關注！如果您有任何問題、建議或合作提案，歡迎透過以下方式與我們聯繫，我們會盡快回覆您。
          </p>
        </section>

        {/* Contact Info */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-neutral-900 mb-5">聯絡方式</h2>
          <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-4">
            <a
              href="mailto:support@pikt.ag"
              className="flex items-center gap-3 text-neutral-700 hover:text-yellow-600 transition-colors"
            >
              <Mail className="h-5 w-5 text-yellow-500" />
              <span>support@pikt.ag</span>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-neutral-900 mb-5">
            <span className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-yellow-500" />
              常見問題
            </span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-neutral-900 mb-5">社群連結</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.facebook.com/pikttag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-neutral-700 hover:border-yellow-400 hover:text-yellow-600 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/pikt.ag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-neutral-700 hover:border-yellow-400 hover:text-yellow-600 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Instagram
            </a>
            <a
              href="https://line.me/R/ti/p/@pikttag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-neutral-700 hover:border-yellow-400 hover:text-yellow-600 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              LINE
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <span>&copy; {new Date().getFullYear()} Pikt.ag</span>
          <nav className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-neutral-800 transition-colors">
              隱私權政策
            </Link>
            <Link to="/terms" className="hover:text-neutral-800 transition-colors">
              服務條款
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
