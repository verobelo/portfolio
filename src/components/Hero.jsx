import { Download, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 xs:pt-24 sm:pt-28 relative overflow-hidden'>
      <div className='absolute inset-0 blur-3xl opacity-20 bg-linear-to-r from-primary via-primary-light to-accent animate-glow pointer-events-none'></div>

      <div className='absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float-slow pointer-events-none'></div>
      <div className='absolute top-40 right-20 w-48 h-48 bg-accent/15 rounded-full blur-2xl animate-float-delayed pointer-events-none'></div>
      <div className='absolute bottom-32 left-1/4 w-40 h-40 bg-primary-light/20 rounded-full blur-2xl animate-float pointer-events-none'></div>
      <div className='absolute bottom-20 right-1/3 w-36 h-36 bg-primary/15 rounded-full blur-2xl animate-float-slow pointer-events-none'></div>
      <div className='absolute top-1/2 left-1/2 w-28 h-28 bg-accent/20 rounded-full blur-2xl animate-float-delayed pointer-events-none'></div>

      <div className='max-w-7xl mx-auto w-full'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='text-center lg:text-left animate-fade-in'>
            <h1 className='text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up'>
              <span className='bg-linear-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent'>
                Veronika Belozerova
              </span>
            </h1>

            <h2 className='text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-gray-700 dark:text-gray-300'>
              {t.hero.title}
            </h2>

            <p className='text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 leading-relaxed'>
              {t.hero.description}
            </p>

            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start'>
              <a
                href={
                  language === 'en'
                    ? '/Veronika-Belozerova-Frontend-EN.pdf'
                    : '/Veronika-Belozerova-Frontend-ES.pdf'
                }
                target='_blank'
                rel='noopener noreferrer'
                className='group inline-flex items-center justify-center gap-2 px-4 xs:px-6 sm:px-8 py-2.5 sm:py-3 bg-linear-to-r from-primary to-primary-light text-white rounded-lg text-sm sm:text-base font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300'>
                <Download className='w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce' />
                <span className='whitespace-nowrap'>
                  {t.hero.downloadResume}
                </span>
              </a>

              <a
                href='/certificates.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='group inline-flex items-center justify-center gap-2 px-4 xs:px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light rounded-lg text-sm sm:text-base font-semibold hover:bg-primary/10 dark:hover:bg-primary-light/10 hover:scale-105 transition-all duration-300'>
                <Download className='w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce' />
                <span className='whitespace-nowrap'>
                  {t.hero.downloadCertifications}
                </span>
              </a>
            </div>
          </div>

          <div className='relative flex justify-center lg:justify-end animate-fade-in'>
            <div className='relative'>
              <div className='absolute inset-0 bg-linear-to-r from-primary to-primary-light blur-2xl opacity-30 rounded-full scale-110'></div>

              <div className='relative rounded-2xl overflow-hidden border-4 border-primary/20 dark:border-primary-light/20 shadow-2xl hover:scale-105 transition-transform duration-500'>
                <img
                  src='/hero-image.png'
                  alt='Veronika Belozerova'
                  className='w-full max-w-md h-auto object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 group flex items-center gap-2 text-primary dark:text-primary-light hover:gap-3 transition-all duration-300 cursor-pointer z-10'>
        <span className='text-sm sm:text-base font-medium'>
          {t.hero.seeProjectsAndSkills}
        </span>
        <ChevronDown className='w-5 h-5 animate-bounce' />
      </button>
    </section>
  );
}
