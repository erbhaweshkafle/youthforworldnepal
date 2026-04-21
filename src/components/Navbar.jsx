import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Info, Layers, ImageIcon, Mail, ClipboardList } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const isNe = i18n.language === 'ne';
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="bg-ywnTeal shadow-xl sticky top-0 z-50 border-b-4 border-ywnLime">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="YWN Logo" className="h-12 w-auto object-contain hover:opacity-90 transition-opacity" />
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-gray-200 hover:text-ywnLime font-semibold transition">{t('nav.home')}</Link>
              <Link to="/about" className="text-gray-200 hover:text-ywnLime font-semibold transition">{t('nav.about')}</Link>
              <Link to="/programs" className="text-gray-200 hover:text-ywnLime font-semibold transition">{t('nav.programs')}</Link>
              <Link to="/projects" className="text-gray-200 hover:text-ywnLime font-semibold transition">{isNe ? 'परियोजनाहरू' : 'Projects'}</Link>
              <Link to="/gallery" className="text-gray-200 hover:text-ywnLime font-semibold transition">{isNe ? 'ग्यालरी' : 'Gallery'}</Link>
              <Link to="/contact" className="bg-ywnLime text-ywnTeal px-6 py-2 rounded font-bold hover:bg-white transition shadow-sm">{t('nav.contact')}</Link>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-ywnLime focus:outline-none">
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE SLIDING SIDEBAR */}
      {/* Increased z-index to 60 so it sits on top of everything */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-ywnTeal shadow-2xl z-[60] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden border-l border-ywnLime/20`}>
        
        {/* NEW: CLOSE BUTTON INSIDE THE SIDEBAR */}
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-ywnLime hover:text-white transition focus:outline-none">
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="px-6 flex flex-col space-y-6 mt-4">
          <Link to="/" onClick={toggleMenu} className="text-xl text-white font-bold">{t('nav.home')}</Link>
          <Link to="/about" onClick={toggleMenu} className="text-xl text-white font-bold">{t('nav.about')}</Link>
          <Link to="/programs" onClick={toggleMenu} className="text-xl text-white font-bold">{t('nav.programs')}</Link>
          <Link to="/projects" onClick={toggleMenu} className="text-xl text-white font-bold">{isNe ? 'परियोजनाहरू' : 'Projects'}</Link>
          <Link to="/gallery" onClick={toggleMenu} className="text-xl text-white font-bold">{isNe ? 'ग्यालरी' : 'Gallery'}</Link>
        </div>
      </div>

      {/* MOBILE APP-STYLE BOTTOM FOOTER NAV */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-ywnTeal border-t border-white/10 z-40 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
        <div className="flex justify-around items-center h-16 px-2 relative">
          <Link to="/about" className={`flex flex-col items-center ${location.pathname === '/about' ? 'text-ywnLime' : 'text-gray-400'}`}>
            <Info className="w-6 h-6 mb-1" /><span className="text-[10px]">About</span>
          </Link>
          <Link to="/projects" className={`flex flex-col items-center ${location.pathname === '/projects' ? 'text-ywnLime' : 'text-gray-400'}`}>
            <Layers className="w-6 h-6 mb-1" /><span className="text-[10px]">Projects</span>
          </Link>
          
          <Link to="/contact" className="relative -top-5 flex flex-col items-center justify-center bg-ywnLime w-16 h-16 rounded-full border-4 border-ywnTeal shadow-xl text-ywnTeal hover:scale-105 transition-transform">
            <Mail className="w-7 h-7" />
          </Link>

        <Link to="/programs" className={`flex flex-col items-center ${location.pathname === '/programs' ? 'text-ywnLime' : 'text-gray-400'}`}>
            <ClipboardList className="w-6 h-6 mb-1" /><span className="text-[10px]">Programs</span>
          </Link>
          <Link to="/gallery" className={`flex flex-col items-center ${location.pathname === '/gallery' ? 'text-ywnLime' : 'text-gray-400'}`}>
            <ImageIcon className="w-6 h-6 mb-1" /><span className="text-[10px]">Gallery</span>
          </Link>
        </div>
      </div>
    </>
  );
}