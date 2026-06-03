import { logos, stats } from '../../data/about';

const AboutSection = () => {
  return (
    <section
      id='about'
      className='py-16 md:py-24 bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden border-t border-gray-100 dark:border-black'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* ========================================= */}
        {/* BAGIAN ATAS: LOGO MARQUEE (TRUSTED BY) */}
        {/* ========================================= */}
        <div className='mb-20 md:mb-28'>
          <div className='text-center mb-10'>
            <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white tracking-wide'>
              Trusted by Global innovators & leading Brands
            </h3>
          </div>

          <div className='relative w-full overflow-hidden py-4'>
            <div className='absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent dark:from-black dark:to-transparent z-10 pointer-events-none'></div>
            <div className='absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent dark:from-black dark:to-transparent z-10 pointer-events-none'></div>

            <div className='flex overflow-hidden select-none'>
              <div className='animate-marquee flex gap-12 md:gap-20 items-center pr-12 md:pr-20'>
                {[...logos, ...logos].map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt='Partner Logo'
                    className='h-8 md:h-10 w-auto object-contain opacity-60 grayscale dark:invert dark:opacity-80 transition-opacity hover:opacity-100 hover:grayscale-0 shrink-0'
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* BAGIAN BAWAH: STATISTIK BULAT (INNOVATE WITH TECHNOVA) */}
        {/* ========================================= */}
        <div className='flex flex-col items-center justify-center w-full'>
          {/* Judul & Subjudul */}
          <div className='text-center max-w-3xl mx-auto mb-8 md:mb-16 space-y-0'>
            <h2 className='py-6 md:py-10 text-4xl md:text-4xl lg:text-[36px] font-semibold tracking-tight text-black dark:text-white'>
              End-to-End IT Solutions That Drive Results
            </h2>
            <p className='text-[18px] md:text-lg text-slate-700 dark:text-slate-400 leading-relaxed font-normal'>
              From strategy to execution, we deliver solutions that grow your
              business.
            </p>
          </div>

          {/* Grid Lingkaran Statistik */}
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-12 w-full justify-items-center'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='relative flex items-center justify-center w-[160px] h-[160px] min-[390px]:w-[175px] min-[390px]:h-[175px] sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr transition-transform duration-300 hover:-translate-y-2'
              >
                <div className='flex flex-col items-center justify-center w-full h-full bg-slate-100 dark:bg-[#0B0F19] rounded-full text-center px-2'>
                  <h4 className='text-3xl min-[390px]:text-4xl md:text-5xl font-semibold text-[#FF6B4A] mb-1 md:mb-2 tracking-tight'>
                    {stat.number}
                  </h4>
                  <p className='text-[13px] min-[390px]:text-sm md:text-base font-semibold text-slate-700 dark:text-slate-300 leading-tight'>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
