import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-6 xs:py-8 px-3 xs:px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-3 xs:gap-4'>
          <div className='text-gray-600 dark:text-gray-400 text-xs xs:text-sm text-center md:text-left'>
            {currentYear} Veronika Belozerova
          </div>

          <div className='flex items-center gap-1.5 xs:gap-2 text-gray-600 dark:text-gray-400 text-xs xs:text-sm text-center'>
            <span>{t.footer.using}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
