import { ExternalLink, Video } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

export default function Repositories() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      slug: 'dentahub',
      liveUrl: 'https://dentahub.vercel.app/',
      githubUrl: 'https://github.com/verobelo/dentahub',
      demoVideoUrl: 'https://www.loom.com/share/d71b9d8645634cbfbff0b90f7dd5262c?sid=b2a21758-eb98-4c31-93fa-08065c38de25',
      tags: [
        'React',
        'Next.js 15',
        'TypeScript',
        'Appwrite',
        'Tailwind',
        'OpenAI API',
        'shadcn',
      ],
      demoAccess: {
        admin: { password: '123456' },
      },
    },
    {
      id: 2,
      slug: 'nomadgym',
      liveUrl: 'https://www.nomadgym.es/',
      githubUrl: 'https://github.com/verobelo/nomadgym',
      tags: ['React', 'Next.js 15', 'TypeScript', 'Appwrite', 'Tailwind'],
      followLinks: {
        linkedin: 'https://www.linkedin.com/company/nomadgym/',
        blog: 'https://github.com/verobelo/nomadgym',
      },
      startupInfo: true,
    },
  ];

  return (
    <section id='projects' className='py-12 xs:py-16 sm:py-20 px-3 xs:px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-3 xs:mb-4 bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent'>
          {t.projects.title}
        </h2>
        <p className='text-sm xs:text-base text-center text-gray-600 dark:text-gray-400 mb-8 xs:mb-10 sm:mb-12'>
          {t.projects.subtitle}
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8'>
          {projects.map((project) => (
            <div
              key={project.id}
              className={cn(
                'group relative rounded-lg border border-gray-200 dark:border-gray-800',
                'bg-white dark:bg-gray-900',
                'lg:hover:border-primary lg:dark:hover:border-primary-light',
                'lg:hover:shadow-xl',
                'transition-all duration-300',
                'overflow-hidden'
              )}>
              {/* Desktop hover overlay - only visible on lg+ screens */}
              <div className='hidden lg:flex absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex-col items-center justify-center'>
                <img
                  src={`/${project.slug}-preview.png`}
                  alt={`${t.projects[project.slug].name} Preview`}
                  className='absolute inset-0 w-full h-full object-cover'
                />
                <div className='relative z-20 flex flex-wrap gap-3 justify-center'>
                  {project.followLinks ? (
                    <>
                      <a
                        href={project.followLinks.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light transition-colors text-sm font-medium'>
                        <ExternalLink className='w-4 h-4' />
                        {t.projects.linkedin}
                      </a>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium'>
                        <ExternalLink className='w-4 h-4' />
                        {t.projects.website}
                      </a>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium'>
                        {t.projects.github}
                      </a>
                      {project.demoVideoUrl && (
                        <a
                          href={project.demoVideoUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm font-medium'>
                          <Video className='w-4 h-4' />
                          {t.projects.demoVideo}
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light transition-colors text-sm font-medium'>
                        <ExternalLink className='w-4 h-4' />
                        {t.projects.liveDemo}
                      </a>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium'>
                        {t.projects.github}
                      </a>
                      {project.demoVideoUrl && (
                        <a
                          href={project.demoVideoUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm font-medium'>
                          <Video className='w-4 h-4' />
                          {t.projects.demoVideo}
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Mobile/Tablet header with image and buttons - only visible on < lg screens */}
              <div className='lg:hidden relative h-48 xs:h-56 sm:h-64 overflow-hidden rounded-t-lg'>
                <img
                  src={`/${project.slug}-preview.png`}
                  alt={`${t.projects[project.slug].name} Preview`}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>
                <div className='absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 xs:gap-2.5'>
                  {project.followLinks ? (
                    <>
                      <a
                        href={project.followLinks.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 xs:gap-1.5 px-2.5 xs:px-3 py-1.5 xs:py-2 bg-primary text-white rounded-md hover:bg-primary-light transition-colors text-xs xs:text-sm font-medium shadow-lg'>
                        <ExternalLink className='w-3 h-3 xs:w-3.5 xs:h-3.5' />
                        {t.projects.linkedin}
                      </a>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 xs:gap-1.5 px-2.5 xs:px-3 py-1.5 xs:py-2 bg-white/95 dark:bg-gray-900/95 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-white dark:hover:bg-gray-800 transition-colors text-xs xs:text-sm font-medium shadow-lg'>
                        <ExternalLink className='w-3 h-3 xs:w-3.5 xs:h-3.5' />
                        {t.projects.website}
                      </a>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 xs:gap-1.5 px-2.5 xs:px-3 py-1.5 xs:py-2 bg-white/95 dark:bg-gray-900/95 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-white dark:hover:bg-gray-800 transition-colors text-xs xs:text-sm font-medium shadow-lg'>
                        {t.projects.github}
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 xs:gap-1.5 px-2.5 xs:px-3 py-1.5 xs:py-2 bg-primary text-white rounded-md hover:bg-primary-light transition-colors text-xs xs:text-sm font-medium shadow-lg'>
                        <ExternalLink className='w-3 h-3 xs:w-3.5 xs:h-3.5' />
                        {t.projects.liveDemo}
                      </a>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 xs:gap-1.5 px-2.5 xs:px-3 py-1.5 xs:py-2 bg-white/95 dark:bg-gray-900/95 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-white dark:hover:bg-gray-800 transition-colors text-xs xs:text-sm font-medium shadow-lg'>
                        {t.projects.github}
                      </a>
                      {project.demoVideoUrl && (
                        <a
                          href={project.demoVideoUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-1 xs:gap-1.5 px-2.5 xs:px-3 py-1.5 xs:py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-xs xs:text-sm font-medium shadow-lg'>
                          <Video className='w-3 h-3 xs:w-3.5 xs:h-3.5' />
                          {t.projects.demoVideo}
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className='space-y-3 xs:space-y-4 p-4 xs:p-5 sm:p-6'>
                <h3 className='text-lg xs:text-xl sm:text-2xl font-bold group-hover:text-primary dark:group-hover:text-primary-light transition-colors'>
                  {t.projects[project.slug].name}
                </h3>

                <p className='text-gray-600 dark:text-gray-400 text-xs xs:text-sm italic'>
                  {t.projects[project.slug].description}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='px-2 py-1 text-xs font-medium bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-md'>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='pt-2'>
                  <h4 className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                    {t.projects.problem}
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    {t.projects[project.slug].problem}
                  </p>
                </div>

                <div>
                  <h4 className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                    {t.projects.solution}
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    {t.projects[project.slug].solution}
                  </p>
                </div>

                {project.demoAccess && (
                  <div className='pt-2 border-t border-gray-200 dark:border-gray-700'>
                    <h4 className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3'>
                      {t.projects.dentahub.demoAccess}
                    </h4>
                    <div className='space-y-2'>
                      <div className='bg-gray-50 dark:bg-gray-800 p-3 rounded-md'>
                        <p className='text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1'>
                          {t.projects.dentahub.adminAccount}
                        </p>
                        <p className='text-xs text-gray-600 dark:text-gray-400'>
                          {t.projects.dentahub.passkey}: {project.demoAccess.admin.password}
                        </p>
                      </div>
                      <div className='bg-gray-50 dark:bg-gray-800 p-3 rounded-md'>
                        <p className='text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1'>
                          {t.projects.dentahub.patientAccount}
                        </p>
                        <p className='text-xs text-gray-600 dark:text-gray-400'>
                          {t.projects.dentahub.patientInstructions}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {project.startupInfo && (
                  <div className='pt-2 border-t border-gray-200 dark:border-gray-700'>
                    <div className='bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md border border-blue-200 dark:border-blue-800'>
                      <p className='text-sm text-gray-700 dark:text-gray-300'>
                        {t.projects.nomadgym.startupMessage} {t.projects.nomadgym.launchingIn}{' '}
                        <span className='font-semibold text-primary dark:text-primary-light'>
                          2026
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className='hidden lg:block absolute inset-0 rounded-lg bg-linear-to-r from-primary/0 to-primary-light/0 group-hover:from-primary/5 group-hover:to-primary-light/5 transition-all duration-300 pointer-events-none'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
