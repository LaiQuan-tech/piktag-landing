import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languages } from './i18n';
import { motion } from 'motion/react';
import { Apple, Play, Search } from 'lucide-react';

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-brand-200 selection:text-neutral-900">
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="PikTag Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-xl tracking-tight">PikTag</span>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-white border border-neutral-200 rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-600 cursor-pointer hover:border-neutral-300 transition-colors"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>{lang.label}</option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-brand-200/40 to-brand-500/20 rounded-full blur-3xl -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-900 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
            </span>
            {t('hero.badge')}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            {t('hero.title1')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-purple">
              {t('hero.title2')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <Apple className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] opacity-70 leading-none mb-1">{t('hero.comingSoonOn')}</div>
                <div className="text-sm leading-none">{t('hero.appStore')}</div>
              </div>
            </button>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent-red to-accent-purple text-white px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm">
              <Play className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] opacity-70 leading-none mb-1">{t('hero.comingSoonOn')}</div>
                <div className="text-sm leading-none">{t('hero.googlePlay')}</div>
              </div>
            </button>
          </div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-xs"
          >
            <div className="absolute -inset-8 bg-gradient-to-tr from-accent-red/30 to-accent-purple/30 rounded-[3rem] blur-3xl -z-10"></div>
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-neutral-100 overflow-hidden aspect-[9/19] flex flex-col">
              {/* App Header */}
              <div className="pt-12 pb-4 px-6 bg-gradient-to-r from-accent-red to-accent-purple text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-bold text-xl">PikTag</div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Search className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex gap-2 overflow-hidden">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium whitespace-nowrap">{t('tags.engineer')}</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium whitespace-nowrap">{t('tags.ntuAlumni')}</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium whitespace-nowrap">{t('tags.designer')}</span>
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
                        <div className="h-3 w-12 bg-brand-100 rounded-full"></div>
                        <div className="h-3 w-16 bg-brand-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6 flex-col md:flex-row">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="PikTag Logo" className="w-6 h-6 rounded-md" />
            <span className="font-bold text-lg tracking-tight">PikTag</span>
          </div>
          <div className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} PikTag. {t('footer.rights')}
          </div>
          <div className="flex gap-6 text-sm font-medium text-neutral-600">
            <Link to="/privacy" className="hover:text-neutral-900 transition-colors">{t('footer.privacy')}</Link>
            <Link to="/terms" className="hover:text-neutral-900 transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
