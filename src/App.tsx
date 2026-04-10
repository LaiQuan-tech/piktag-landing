import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languages } from './i18n';
import { motion, AnimatePresence } from 'motion/react';
import { Apple, Play, Search } from 'lucide-react';

export default function App() {
  const { t, i18n } = useTranslation();
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      activeTag: t('tags.engineer'),
      otherTags: [t('tags.ntuAlumni'), t('tags.designer')],
    },
    {
      activeTag: t('tags.designer'),
      otherTags: [t('tags.entrepreneur'), t('tags.investor')],
    },
    {
      activeTag: t('tags.ntuAlumni'),
      otherTags: [t('tags.engineer'), t('tags.investor')],
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 flex flex-col selection:bg-brand-200 selection:text-neutral-900">
      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 max-w-4xl w-full">
          {/* Left: Phone mockup with slideshow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[280px] flex flex-col items-center"
          >
            {/* Ambient glow */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-accent-red/25 to-accent-purple/25 rounded-[3rem] blur-3xl -z-10"></div>

            {/* Phone frame */}
            <div className="relative w-full bg-white rounded-[2.5rem] shadow-2xl border border-neutral-100 overflow-hidden aspect-[9/19] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col flex-1"
                >
                  {/* App Header */}
                  <div className="pt-10 pb-4 px-5 bg-gradient-to-r from-accent-red to-accent-purple text-white">
                    <div className="flex items-center justify-between mb-5">
                      <div className="font-bold text-lg">PikTag</div>
                      <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Search className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex gap-2 overflow-hidden">
                      <span className="px-3 py-1 bg-white text-brand-900 rounded-full text-xs font-semibold whitespace-nowrap shadow-sm">
                        {slides[slideIndex].activeTag}
                      </span>
                      {slides[slideIndex].otherTags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
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
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide indicators */}
            <div className="flex gap-2 mt-5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === slideIndex ? 'bg-neutral-800' : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Info card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-sm"
          >
            <div className="bg-white border border-neutral-200 rounded-2xl px-8 py-10 text-center">
              {/* Logo */}
              <img
                src="/logo.png"
                alt="PikTag Logo"
                className="w-20 h-20 mx-auto mb-2"
              />
              <div className="font-bold text-2xl tracking-tight mb-4">PikTag</div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-medium mb-4">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-600"></span>
                </span>
                {t('hero.badge')}
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold tracking-tight leading-tight mb-3">
                {t('hero.title1')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-purple">
                  {t('hero.title2')}
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {t('hero.description')}
              </p>

              {/* Buttons (stacked) */}
              <div className="flex flex-col gap-3">
                <button className="flex items-center justify-center gap-2 bg-neutral-900 text-white py-3 rounded-xl font-medium hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <Apple className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-[10px] opacity-70 leading-none mb-1">{t('hero.comingSoonOn')}</div>
                    <div className="text-sm leading-none">{t('hero.appStore')}</div>
                  </div>
                </button>
                <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent-red to-accent-purple text-white py-3 rounded-xl font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm">
                  <Play className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-[10px] opacity-70 leading-none mb-1">{t('hero.comingSoonOn')}</div>
                    <div className="text-sm leading-none">{t('hero.googlePlay')}</div>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer (IG-style) */}
      <footer className="border-t border-neutral-200 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center text-xs text-neutral-500">
          {/* Language row */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`hover:underline transition-colors ${
                  i18n.language === lang.code
                    ? 'font-semibold text-neutral-900'
                    : 'hover:text-neutral-700'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Legal row */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <span>&copy; {new Date().getFullYear()} PikTag</span>
            <Link to="/privacy" className="hover:text-neutral-900 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-neutral-900 transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
