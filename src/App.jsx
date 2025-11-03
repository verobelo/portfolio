import Header from './components/Header'
import Hero from './components/Hero'
import Repositories from './components/Repositories'
import Skills from './components/Skills'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <Repositories />
            <Skills />
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
