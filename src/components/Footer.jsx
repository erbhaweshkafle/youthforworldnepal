import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  return (
    <footer className="bg-ywnTeal text-white py-16 border-t-8 border-ywnLime mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div className="md:col-span-2">
          <h3 className="text-3xl font-black text-ywnLime mb-4">
            {isNe ? 'युथ फर वर्ल्ड नेपाल' : 'Youth for World Nepal'}
          </h3>
          <p className="text-gray-300 font-medium leading-relaxed max-w-sm">
            {isNe 
              ? '२००४ देखि नेपालभर समुदायहरूको सशक्तीकरण। स्वास्थ्य, शिक्षा, र दिगो जीविकोपार्जन मार्फत जीवनमा रूपान्तरण।' 
              : 'Empowering communities across Nepal since 2004. Transforming lives through health, education, and sustainable livelihoods.'}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-bold text-ywnLime mb-4">{isNe ? 'नेभिगेसन' : 'Navigation'}</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/about" className="text-gray-300 hover:text-ywnLime transition">{isNe ? 'हाम्रो बारेमा (Who We Are)' : 'Who We Are'}</Link>
            <Link to="/programs" className="text-gray-300 hover:text-ywnLime transition">{isNe ? 'हस्तक्षेपहरू (Our Interventions)' : 'Our Interventions'}</Link>
            <Link to="/projects" className="text-gray-300 hover:text-ywnLime transition">{isNe ? 'प्रभाव र तथ्यांक (Impact & Data)' : 'Impact & Data'}</Link>
            <Link to="/gallery" className="text-gray-300 hover:text-ywnLime transition">{isNe ? 'मिडिया ग्यालरी' : 'Media Gallery'}</Link>
            <Link to="/contact" className="text-gray-300 hover:text-ywnLime transition">{isNe ? 'सम्पर्क' : 'Contact'}</Link>
          </div>
        </div>

        {/* Contact & Legal */}
        <div>
          <h3 className="text-xl font-bold text-ywnLime mb-4">{isNe ? 'सम्पर्क र दर्ता' : 'Contact & Trust'}</h3>
          <p className="text-sm text-gray-300 mb-1">Kathmandu, Nepal</p>
          <p className="text-sm text-gray-300 mb-1">+977-01-4491166</p>
          <p className="text-sm text-gray-300 mb-4">infoywn@gmail.com</p>
          
          <div className="pt-4 border-t border-white/10">
            <p className="text-sm font-bold text-ywnLime">SWC: 18085</p>
            <p className="text-sm font-bold text-ywnLime">CDO: 725/2004</p>
          </div>
        </div>

      </div>
    </footer>
  );
}