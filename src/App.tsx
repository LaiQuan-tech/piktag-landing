import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Tags,
  QrCode,
  Search,
  Link as LinkIcon,
  Bell,
  Calendar,
  BarChart3,
  Apple,
  Play,
  ChevronRight,
  ContactRound,
  Globe,
  ShieldCheck,
  Users,
  MapPin,
  Sparkles,
  History
} from 'lucide-react';

const features = [
  {
    icon: <Tags className="w-6 h-6 text-yellow-600" />,
    title: '六大語意標籤系統',
    description: '支援身份、技能、興趣、社交、元標籤、關係六種語意分類，為人脈加上精準標籤。可拖曳排序、隱藏私人標籤。',
  },
  {
    icon: <QrCode className="w-6 h-6 text-yellow-600" />,
    title: 'Link Bio & QR Code',
    description: '打造你的個人 Link Bio 頁面，展示頭像、簡介與標籤。支援標準 URL QR Code，掃碼即可加好友。',
  },
  {
    icon: <Search className="w-6 h-6 text-yellow-600" />,
    title: '搜尋與探索',
    description: '透過關鍵字搜尋標籤或帳號，探索擁有相同標籤的人脈，發現你的專業社群與興趣圈。',
  },
  {
    icon: <LinkIcon className="w-6 h-6 text-yellow-600" />,
    title: '社群連結 & 隱私分級',
    description: '記錄 IG、LinkedIn 等社群連結，並設定四級隱私（公開／好友／摯友／僅自己），精準控制誰能看到。',
  },
  {
    icon: <ContactRound className="w-6 h-6 text-yellow-600" />,
    title: '通訊錄同步',
    description: '一鍵匯入手機通訊錄，快速找到已在使用 PikTag 的朋友，輕鬆建立你的人脈網絡。',
  },
  {
    icon: <Globe className="w-6 h-6 text-yellow-600" />,
    title: '15 國語言支援',
    description: '內建 15 種語言的國際化介面，無論你在哪裡，都能用熟悉的語言管理人脈。',
  },
];

const crmFeatures = [
  {
    icon: <Calendar className="w-5 h-5 text-yellow-600" />,
    title: '生日 CRM 提醒',
    description: '為好友設定生日等重要日期，到期當天自動推送通知提醒，不再遺漏每一個重要時刻。',
  },
  {
    icon: <Users className="w-5 h-5 text-yellow-600" />,
    title: '好友互動管理',
    description: '查看好友詳細檔案與標籤，支援封鎖／解封管理，掌控你的社交圈邊界。',
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-yellow-600" />,
    title: '社交統計報表',
    description: '個人社交數據儀表板：總人脈數、使用標籤數、最常用標籤 Top 5，量化你的社交影響力。',
  },
  {
    icon: <Bell className="w-5 h-5 text-yellow-600" />,
    title: '智慧通知中心',
    description: '統一管理所有通知：好友邀請、生日提醒、標籤動態，重要消息一目瞭然。',
  },
];

const popularTags = [
  { name: '#工程師', count: 88, growth: '+12' },
  { name: '#設計師', count: 42, growth: '+8' },
  { name: '#創業家', count: 33, growth: '+5' },
  { name: '#投資人', count: 21, growth: '+3' },
  { name: '#台大校友', count: 15, growth: '+2' },
];

const advancedFeatures = [
  {
    icon: <MapPin className="w-8 h-8 text-yellow-500 mb-4" />,
    title: '附近用戶探索',
    description: '根據 GPS 定位，探索你周圍的 PikTag 用戶與熱門標籤，發現在地社交趨勢與潛在人脈。',
  },
  {
    icon: <History className="w-8 h-8 text-yellow-500 mb-4" />,
    title: '歷史上的今天',
    description: '自動回顧「N 年前的今天你認識了誰」，喚起人脈記憶，讓每段關係歷久彌新。',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-500 mb-4" />,
    title: '智慧推薦演算法',
    description: '根據你的標籤、互動紀錄與人脈圈，智慧推薦你可能想認識的人，拓展社交版圖。',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-yellow-200 selection:text-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="PikTag Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-xl tracking-tight">Pikt.ag</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            <a href="#features" className="hover:text-neutral-900 transition-colors">核心功能</a>
            <a href="#crm" className="hover:text-neutral-900 transition-colors">智慧 CRM</a>
            <a href="#advanced" className="hover:text-neutral-900 transition-colors">即將推出</a>
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
              告別傳統通訊錄。Pikt.ag 透過六大語意標籤、QR Code 名片交換與智慧 CRM 提醒，幫助你精準分類、探索並維繫每一段珍貴的社交關係。支援 15 國語言。
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
              取代傳統通訊錄，Pikt.ag 以語意標籤為核心，結合 Link Bio、QR Code 與隱私分級，讓人脈管理變得精準又直覺。
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

      {/* Popular Tags Showcase */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 via-white to-yellow-50 border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              最活躍的人脈標籤
            </h2>
            <p className="text-neutral-600 text-lg">
              加入數千名用戶，探索並連接擁有相同標籤的人脈。發掘你的專業社群與興趣圈。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {popularTags.map((tag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur"></div>

                {/* Card */}
                <div className="relative bg-white border-2 border-yellow-200 rounded-2xl p-6 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-200/50 cursor-pointer">
                  {/* Rank Badge */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>

                  {/* Tag Name */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 text-yellow-600 break-all pr-2">
                    {tag.name}
                  </h3>

                  {/* Stats */}
                  <div className="space-y-3">
                    {/* Count with bar */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-neutral-600">使用人數</span>
                        <span className="font-bold text-neutral-900">{tag.count}</span>
                      </div>
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(tag.count / 88) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.08 + 0.2 }}
                          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Growth indicator */}
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <span className="text-green-600 font-medium">{tag.growth} 本週</span>
                    </div>
                  </div>

                  {/* Hover CTA */}
                  <div className="mt-4 pt-4 border-t border-yellow-100 flex items-center gap-2 text-yellow-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    探索標籤
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors group">
              查看全部標籤
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
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
                不只是儲存聯絡人，Pikt.ag 主動幫你維繫關係。透過生日提醒、社交統計與智慧通知，讓你在對的時間，與對的人產生連結。
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
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">好友</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">提醒</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-2xl flex gap-4 items-start">
                    <div className="w-2 h-2 mt-2 rounded-full bg-yellow-400 shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium mb-1">今天是 #台大校友 王大明的生日！</p>
                      <p className="text-xs text-neutral-500">剛剛 • 生日 CRM 提醒</p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl flex gap-4 items-start">
                    <div className="w-2 h-2 mt-2 rounded-full bg-yellow-400 shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium mb-1">小花已接受你的好友邀請！</p>
                      <p className="text-xs text-neutral-500">2 小時前 • 好友動態</p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl flex gap-4 items-start opacity-70">
                    <div className="w-2 h-2 mt-2 rounded-full bg-transparent shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium mb-1">你的人脈網絡已成長至 150 人！</p>
                      <p className="text-xs text-neutral-500">昨天 • 社交統計</p>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">即將推出</h2>
            <p className="text-neutral-600 text-lg">
              結合地理位置與智慧推薦，為你發掘潛在人脈，讓社交網絡持續成長。
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
            <img src="/logo.jpg" alt="PikTag Logo" className="w-6 h-6 rounded-md" />
            <span className="font-bold text-lg tracking-tight">Pikt.ag</span>
          </div>
          <div className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Pikt.ag. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-neutral-600">
            <Link to="/privacy" className="hover:text-neutral-900 transition-colors">隱私權政策</Link>
            <Link to="/terms" className="hover:text-neutral-900 transition-colors">服務條款</Link>
            <Link to="/contact" className="hover:text-neutral-900 transition-colors">聯絡我們</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

