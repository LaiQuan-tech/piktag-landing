import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languages } from './i18n';
import { motion } from 'motion/react';
import { Apple, Play, Search, Globe } from 'lucide-react';

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0a0612] font-sans text-white selection:bg-accent-purple/40 selection:text-white overflow-x-hidden">
      {/* Aurora background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-accent-red/30 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[-15%] w-[800px] h-[800px] rounded-full bg-accent-purple/30 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 40, -60, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-brand-500/25 blur-[120px]"
        />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top bar */}
      <nav className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="PikTag Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-xl tracking-tight">PikTag</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Globe className="w-4 h-4" />
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-transparent border border-white/15 rounded-lg px-3 py-1.5 text-sm font-medium text-white/80 cursor-pointer hover:border-white/30 transition-colors [&>option]:bg-[#0a0612] [&>option]:text-white"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 px-6 pt-12 pb-32">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-white/80 mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-purple"></span>
            </span>
            {t('hero.badge')}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] mb-8"
          >
            <span className="block text-white">{t('hero.title1')}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-red via-brand-400 to-accent-purple">
              {t('hero.title2')}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-24"
          >
            <button className="group flex items-center justify-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-2xl font-medium hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <Apple className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] opacity-60 leading-none mb-1">
                  {t('hero.comingSoonOn')}
                </div>
                <div className="text-sm leading-none">{t('hero.appStore')}</div>
              </div>
            </button>
            <button className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-accent-red to-accent-purple text-white px-8 py-4 rounded-2xl font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(140,82,255,0.35)] hover:shadow-[0_0_60px_rgba(140,82,255,0.5)]">
              <Play className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] opacity-70 leading-none mb-1">
                  {t('hero.comingSoonOn')}
                </div>
                <div className="text-sm leading-none">{t('hero.googlePlay')}</div>
              </div>
            </button>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative w-full max-w-[300px]"
          >
            {/* Intense glow behind phone */}
            <div className="absolute -inset-12 bg-gradient-to-tr from-accent-red/40 to-accent-purple/40 rounded-[4rem] blur-3xl -z-10"></div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent-red/20 to-accent-purple/20 rounded-[3rem] blur-2xl -z-10"></div>

            {/* Phone frame */}
            <div className="relative w-full bg-neutral-900 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden aspect-[9/19] flex flex-col">
              {/* App Header */}
              <div className="pt-12 pb-4 px-5 bg-gradient-to-r from-accent-red to-accent-purple text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="font-bold text-lg">PikTag</div>
                  <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Search className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex gap-2 overflow-hidden">
                  <span className="px-3 py-1 bg-white text-brand-900 rounded-full text-xs font-semibold whitespace-nowrap shadow-sm">
                    {t('tags.engineer')}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium whitespace-nowrap">
                    {t('tags.ntuAlumni')}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium whitespace-nowrap">
                    {t('tags.designer')}
                  </span>
                </div>
              </div>
              {/* App Body */}
              <div className="flex-1 bg-neutral-50 p-4 flex flex-col gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white p-3 rounded-2xl shadow-sm border border-neutral-100 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-3 w-20 bg-neutral-200 rounded-full mb-1.5"></div>
                      <div className="flex gap-1">
                        <div className="h-2 w-10 bg-brand-100 rounded-full"></div>
                        <div className="h-2 w-14 bg-brand-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-5 items-center text-xs text-white/40">
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`transition-colors ${
                  i18n.language === lang.code
                    ? 'text-white font-medium'
                    : 'hover:text-white/70'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-5 justify-center items-center">
            <span>&copy; {new Date().getFullYear()} PikTag</span>
            <Link to="/privacy" className="hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
