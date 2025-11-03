import ScrollToTop from 'react-scroll-to-top';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ScrollToTopButton() {
  const { theme } = useTheme();

  return (
    <ScrollToTop
      smooth
      component={<ArrowUp className="w-6 h-6" />}
      style={{
        backgroundColor: theme === 'dark' ? '#31bdc6' : '#3178c6',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: theme === 'dark'
          ? '0 4px 12px rgba(49, 189, 198, 0.5)'
          : '0 4px 12px rgba(49, 120, 198, 0.4)',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
      className="lg:hidden hover:scale-110 transition-transform duration-300"
    />
  );
}
