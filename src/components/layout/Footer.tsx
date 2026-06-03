import logoSymbol from '../../assets/image/logo-symbol.png';
import socialMedia from '../../assets/icon/Social Media.png';

const Footer = () => {
  return (
    <footer className='w-full bg-white dark:bg-black py-10 px-4 sm:px-6 lg:px-8'>
      {/* Kotak Footer Utama */}
      <div className='max-w-7xl mx-auto bg-gray-100 dark:bg-[#0B0F19] rounded-[2rem] border border-gray-300 dark:border-gray-700 p-8 md:p-12'>
        {/* BAGIAN ATAS: Judul & Logo */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 mb-10 md:mb-15'>
          {/* Judul */}
          <h2 className='text-black py-1 dark:text-white text-4xl md:text-5xl font-semibold uppercase order-2 md:order-1'>
            Let's Discuss Your <br></br> Ideas
          </h2>

          {/* Gambar Logo (Di HP urutan 1 paling atas, di PC urutan 2 di kanan) */}
          <div className='flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity duration-300 order-1 md:order-2'>
            <img
              src={logoSymbol}
              alt='Company Logo'
              className='h-10 md:h-10 w-auto object-contain'
            />
            <span className='text-black dark:text-white font-semibold text-3xl md:text-2xl tracking-tight'>
              Your Logo
            </span>
          </div>
        </div>

        {/* GARIS PEMBATAS */}
        <hr className='border-gray-400 dark:border-gray-700 mb-8' />

        {/* BAGIAN BAWAH: Navigasi & Sosial Media */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>
          {/* Menu Navigasi */}
          <nav className='flex flex-col md:flex-row md:flex-wrap justify-start gap-4 md:gap-8'>
            {['About', 'Service', 'Projects', 'Testimonials', 'FAQ'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='text-gray-700 dark:text-white hover:text-white text-[15px] md:text-[15px] font-light transition-colors duration-300'
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Gambar Sosial Media */}
          <div className='flex items-center mt-2 md:mt-0'>
            <img
              src={socialMedia}
              alt='Social Media Links'
              className='h-11 md:h-10 w-auto md:w-auto object-contain cursor-pointer hover:scale-105 transition-all duration-300 invert dark:invert-0 opacity-90 hover:opacity-100'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
