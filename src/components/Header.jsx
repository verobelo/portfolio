import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Code,
  Languages,
  Menu,
  X,
  Mail,
} from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import toast, { Toaster } from 'react-hot-toast';

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('v.belozerova.dev@gmail.com');
    toast.success('Email copied to clipboard!', {
      duration: 3000,
      position: 'bottom-center',
      style: {
        background: darkMode ? '#1f2937' : '#ffffff',
        color: darkMode ? '#f3f4f6' : '#111827',
        border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
      },
    });
  };

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800'>
        <div className='max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-14 xs:h-16'>
            <div className='flex items-center gap-2 xs:gap-3 text-lg xs:text-xl sm:text-2xl font-bold bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent'>
              <Code className='w-5 h-5 xs:w-6 xs:h-6' color='#3178c6' />
              Veronika
            </div>

            <div className='flex items-center gap-1.5 xs:gap-2 sm:gap-4'>
              <button
                onClick={copyEmail}
                className='hidden md:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer'
                aria-label='Copy email'>
                <Mail className='w-5 h-5' color='#3178c6' />
              </button>

              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hidden md:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer'
                aria-label='LinkedIn'>
                <Linkedin className='w-5 h-5' color='#3178c6' />
              </a>

              <a
                href='https://github.com/verobelo'
                target='_blank'
                rel='noopener noreferrer'
                className='hidden md:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer'
                aria-label='GitHub'>
                <Github className='w-5 h-5' color='#3178c6' />
              </a>

              <button
                onClick={toggleLanguage}
                className='flex items-center gap-0.5 xs:gap-1 px-2 xs:px-3 py-1.5 xs:py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer font-semibold'
                aria-label='Toggle language'>
                <Languages className='w-3.5 h-3.5 xs:w-4 xs:h-4' />
                <span className='text-xs xs:text-sm'>
                  {language.toUpperCase()}
                </span>
              </button>

              <button
                onClick={toggleDarkMode}
                className='p-1.5 xs:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer'
                aria-label='Toggle dark mode'>
                {darkMode ? (
                  <Sun className='w-4 h-4 xs:w-5 xs:h-5' />
                ) : (
                  <Moon className='w-4 h-4 xs:w-5 xs:h-5' />
                )}
              </button>

              <button
                onClick={toggleMobileMenu}
                className='md:hidden p-1.5 xs:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300'
                aria-label='Toggle menu'>
                {mobileMenuOpen ? (
                  <X className='w-5 h-5 xs:w-6 xs:h-6' />
                ) : (
                  <Menu className='w-5 h-5 xs:w-6 xs:h-6' />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/50 opacity-95 backdrop-blur-sm md:hidden'
          onClick={closeMobileMenu}>
          <div
            className='fixed top-14 xs:top-16 right-0 w-64 h-[calc(100vh-3.5rem)] xs:h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-xl max-h-[30vh]'
            onClick={(e) => e.stopPropagation()}>
            <nav className='flex flex-col gap-2 p-4'>
              <button
                onClick={() => {
                  copyEmail();
                  closeMobileMenu();
                }}
                className='flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300'>
                <Mail className='w-5 h-5' />
                <span className='text-sm font-medium'>Copy Email</span>
              </button>

              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                onClick={closeMobileMenu}
                className='flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300'>
                <Linkedin className='w-5 h-5' />
                <span className='text-sm font-medium'>LinkedIn</span>
              </a>

              <a
                href='https://github.com/verobelo'
                target='_blank'
                rel='noopener noreferrer'
                onClick={closeMobileMenu}
                className='flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300'>
                <Github className='w-5 h-5' />
                <span className='text-sm font-medium'>GitHub</span>
              </a>
            </nav>
          </div>
        </div>
      )}

      <Toaster />
    </>
  );
}
