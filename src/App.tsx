import { motion } from 'motion/react';
import {
  Tags,
  QrCode,
  Search,
  MessageCircle,
  StickyNote,
  Link as LinkIcon,
  Bell,
  Calendar,
  History,
  TrendingUp,
  MapPin,
  Map,
  BarChart3,
  Apple,
  Play,
  ChevronRight
} from 'lucide-react';

const features = [
  {
    icon: <Tags className="w-6 h-6 text-yellow-600" />,
    title: '標籤式人脈管理',
    description: '為每位人脈加上多個自訂標籤（如 #工程師、#台大校友），快速分類與辨識，取代傳統通訊錄。',
  },
  {
    icon: <QrCode className="w-6 h-6 text-yellow-600" />,
    title: '個人檔案 & QR Code',
    description: '每位用戶擁有個人名片頁，包含頭像、簡介、標籤展示，支援 QR Code 掃碼交換名片。',
  },
  {
    icon: <Search className="w-6 h-6 text-yellow-600" />,
    title: '搜尋與探索',
    description: '五大分類搜尋：熱門標籤、附近會員、認證會員、附近熱標、最近搜尋，支援關鍵字搜尋標籤或帳號。',
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-yellow-600" />,
    title: '即時聊天',
    description: '一對一即時訊息，直接在 App 內與人脈溝通，不需切換到其他通訊軟體。',
  },
  {
    icon: <StickyNote className="w-6 h-6 text-yellow-600" />,
    title: '便利貼筆記',
    description: '為每位好友貼上備忘便利貼（如「記得明天約咖啡」），支援釘選、編輯、刪除。',
  },
  {
    icon: <LinkIcon className="w-6 h-6 text-yellow-600" />,
    title: '社群連結 (Biolinks)',
    description: '在好友檔案中記錄 IG、LinkedIn 等社群連結，一鍵開啟對方的社群頁面。',
  },
];

const crmFeatures = [
  {
    icon: <Bell className="w-5 h-5 text-yellow-600" />,
    title: 'Biolink 點擊追蹤通知',
    description: '當有人點擊你的社群連結時，自動收到通知，追蹤人脈互動熱度。',
  },
  {
    icon: <Calendar className="w-5 h-5 text-yellow-600" />,
    title: '重要日期提醒',
    description: '為好友設定生日、紀念日、合約到期，到期當天自動推送提醒，不再遺漏。',
  },
  {
    icon: <History className="w-5 h-5 text-yellow-600" />,
    title: '歷史上的今天',
    description: '自動回顧「N 年前的今天你認識了誰」，喚起人脈記憶，強化社交連結感。',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-yellow-600" />,
    title: '標籤熱度通知',
    description: '當某個標籤的使用人數快速上升時，自動通知（如「#工程師 熱度上升中！」）。',
  },
];

const advancedFeatures = [
  {
    icon: <MapPin className="w-8 h-8 text-yellow-500 mb-4" />,
    title: '附近熱門標籤推薦',
    description: '根據 GPS 定位，顯示你所在區域最多人使用的標籤，發現在地社交趨勢。',
  },
  {
    icon: <Map className="w-8 h-8 text-yellow-500 mb-4" />,
    title: '在這地點你認識誰',
    description: '根據目前位置，列出過去在此地認識的所有人脈，適合出差或參加活動時快速回顧。',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-yellow-500 mb-4" />,
    title: '社交統計報表',
    description: '個人社交數據儀表板：總人脈數、使用標籤數、連結點擊數、最常用標籤 Top 5、人脈時間軸。',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-yellow-200 selection:text-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-lg">
              P
            </div>
            <span className="font-bold text-xl tracking-tight">Pikt.ag</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            <a href="#features" className="hover:text-neutral-900 transition-colors">核心功能</a>
            <a href="#crm" className="hover:text-neutral-900 transition-colors">智慧 CRM</a>
            <a href="#advanced" className="hover:text-neutral-900 transition-colors">進階探索</a>
          </div>
          <button className="bg-neutral-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors">
            即將推出
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              iOS & Android 即將上線
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              重新定義你的<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                人脈管理方式
              </span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              告別傳統通訊錄。Pikt.ag 透過自訂標籤、智慧提醒與即時互動，幫助你輕鬆分類、探索並維繫每一段珍貴的社交關係。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98]">
                <Apple className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[10px] opacity-70 leading-none mb-1">Coming Soon on</div>
                  <div className="text-sm leading-none">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border border-neutral-200 text-neutral-900 px-8 py-4 rounded-2xl font-medium hover:bg-neutral-50 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm">
                <Play className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[10px] opacity-70 leading-none mb-1">Coming Soon on</div>
                  <div className="text-sm leading-none">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Hero Visual (Abstract App Representation) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/40 to-yellow-400/20 rounded-[3rem] transform rotate-3 scale-105 blur-2xl"></div>
            <div className="relative w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl border border-neutral-100 overflow-hidden aspect-[9/19] flex flex-col">
              {/* App Header */}
              <div className="pt-12 pb-4 px-6 bg-yellow-400 text-neutral-900">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-bold text-xl">Pikt.ag</div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Search className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex gap-2 overflow-hidden">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium whitespace-nowrap">#工程師</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium whitespace-nowrap">#台大校友</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium whitespace-nowrap">#設計師</span>
                </div>
              </div>
              {/* App Body */}
              <div className="flex-1 bg-neutral-50 p-6 flex flex-col gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-neutral-200 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 w-24 bg-neutral-200 rounded-full mb-2"></div>
                      <div className="flex gap-1">
                        <div className="h-3 w-12 bg-yellow-100 rounded-full"></div>
                        <div className="h-3 w-16 bg-yellow-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Phase 1: Core Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">基礎功能，強大無比</h2>
            <p className="text-neutral-600 text-lg">
              取代傳統通訊錄，Pikt.ag 提供全方位的人脈管理工具，讓建立與維繫關係變得簡單直覺。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 2: CRM & Engagement */}
      <section id="crm" className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-yellow-400 text-sm font-medium mb-6">
                Phase 2
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                智慧 CRM 與黏性功能
              </h2>
              <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                不只是儲存聯絡人，Pikt.ag 主動幫你維繫關係。透過智慧追蹤與貼心提醒，讓你在對的時間，與對的人產生連結。
              </p>
              
              <div className="space-y-6">
                {crmFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                      <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Notification Center Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full"></div>
              <div className="relative bg-[#1A1A1A] border border-white/10 rounded-[2rem] p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">通知中心</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-xs font-bold">全部</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">追蹤</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">標籤</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-2xl flex gap-4 items-start">
                    <div className="w-2 h-2 mt-2 rounded-full bg-yellow-400 shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium mb-1">小花點擊了你的 Instagram 連結</p>
                      <p className="text-xs text-neutral-500">剛剛 • Biolink 追蹤</p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl flex gap-4 items-start">
                    <div className="w-2 h-2 mt-2 rounded-full bg-yellow-400 shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium mb-1">今天是 #台大校友 王大明的生日！</p>
                      <p className="text-xs text-neutral-500">2 小時前 • CRM 提醒</p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl flex gap-4 items-start opacity-70">
                    <div className="w-2 h-2 mt-2 rounded-full bg-transparent shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium mb-1">#工程師 標籤熱度上升中！已有 88 人使用</p>
                      <p className="text-xs text-neutral-500">昨天 • 標籤動態</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: Advanced Features */}
      <section id="advanced" className="py-24 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-200 text-yellow-800 text-sm font-medium mb-4">
              Phase 3
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">進階探索與數據分析</h2>
            <p className="text-neutral-600 text-lg">
              結合地理位置與數據統計，為你發掘潛在人脈，並量化你的社交影響力。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-yellow-100"
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            準備好升級你的人脈網絡了嗎？
          </h2>
          <p className="text-xl text-neutral-600 mb-10">
            Pikt.ag 即將登陸 iOS 與 Android 平台。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <Apple className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] opacity-70 leading-none mb-1">Coming Soon on</div>
                <div className="text-sm leading-none">App Store</div>
              </div>
            </button>
            <button className="flex items-center justify-center gap-2 bg-yellow-400 text-neutral-900 px-8 py-4 rounded-2xl font-medium hover:bg-yellow-500 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm">
              <Play className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] opacity-70 leading-none mb-1">Coming Soon on</div>
                <div className="text-sm leading-none">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-50 py-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-400 rounded-md flex items-center justify-center font-bold text-sm">
              P
            </div>
            <span className="font-bold text-lg tracking-tight">Pikt.ag</span>
          </div>
          <div className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Pikt.ag. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-neutral-600">
            <a href="#" className="hover:text-neutral-900 transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">服務條款</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">聯絡我們</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

