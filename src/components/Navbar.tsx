'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Globe, Search, X } from 'lucide-react';

export default function Navbar() {
  const locale = useLocale();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [region, setRegion] = useState<'EG' | 'UK'>('EG');
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const nextLocale = locale === 'en' ? 'ar' : 'en';

  // Animation for the preferences panel
  const panelVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.3 } },
  };

  // Button animation variants for clickability
  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' },
    tap: { scale: 0.95, filter: 'brightness(0.9)' },
  };

  return (
    <>
      <motion.nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl px-6 py-3 rounded-2xl border border-white/30 dark:border-white/10 backdrop-blur-xl bg-white/80 dark:bg-[#0e0e0e]/60 shadow-lg flex items-center justify-between"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        {/* Logo and Links */}
        <div className="flex items-center gap-6">
          <div className="text-2xl font-extrabold text-black dark:text-white">
            Compare<span className="text-purple-600">X</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-gray-800 dark:text-white">
            <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
              Home
            </Link>
            <Link href="/search" className="flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 transition">
              <Search size={16} /> Search
            </Link>
            <Link href="/gold" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
              Gold
            </Link>
            <Link href="/currency" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
              Currency
            </Link>
            <Link href="/about" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
              About
            </Link>
          </div>
        </div>

        {/* Tools Section */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button with Enhanced Clickability */}
          <motion.button
            onClick={toggleTheme}
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 transition button-glow cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </motion.button>

          {/* Preferences Button with Enhanced Clickability */}
          <motion.button
            onClick={() => setIsPreferencesOpen(true)}
            className="relative text-sm px-4 py-1.5 flex items-center gap-1 rounded-md text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition button-glow cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Globe size={14} /> Preferences
          </motion.button>
        </div>
      </motion.nav>

      {/* Preferences Slide-Out Panel */}
      <AnimatePresence>
        {isPreferencesOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-56 z-50 bg-white/20 dark:bg-[#0e0e0e]/20 backdrop-blur-2xl border-l border-white/40 dark:border-white/20 shadow-lg p-4 glassmorphism"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Preferences</h2>
              <button
                onClick={() => setIsPreferencesOpen(false)}
                className="text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400"
              >
                <X size={18} />
              </button>
            </div>

            {/* Language Selection */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                Language
              </label>
              <div className="flex gap-2">
                <Link
                  href="/"
                  locale="en"
                  className={`text-xs px-3 py-1.5 rounded-md transition ${
                    locale === 'en'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  EN
                </Link>
                <Link
                  href="/"
                  locale="ar"
                  className={`text-xs px-3 py-1.5 rounded-md transition ${
                    locale === 'ar'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  AR
                </Link>
              </div>
            </div>

            {/* Region Selection */}
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                Region
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setRegion('EG')}
                  className={`text-xs px-3 py-1.5 rounded-md transition ${
                    region === 'EG'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  EG
                </button>
                <button
                  onClick={() => setRegion('UK')}
                  className={`text-xs px-3 py-1.5 rounded-md transition ${
                    region === 'UK'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  UK
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for closing the panel */}
      <AnimatePresence>
        {isPreferencesOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreferencesOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}