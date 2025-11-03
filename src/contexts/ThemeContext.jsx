import { createContext, useContext, useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = (event) => {
    const newDarkMode = !darkMode;

    if (!event || !document.startViewTransition) {
      flushSync(() => {
        setDarkMode(newDarkMode);
      });
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', String(newDarkMode));
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.startViewTransition(() => {
      flushSync(() => {
        setDarkMode(newDarkMode);
        if (newDarkMode) {
          document.documentElement.classList.add('dark');
          console.log('Added dark class, classList:', document.documentElement.classList.toString());
        } else {
          document.documentElement.classList.remove('dark');
          console.log('Removed dark class, classList:', document.documentElement.classList.toString());
        }
        localStorage.setItem('darkMode', String(newDarkMode));
      });
    }).ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  const value = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
