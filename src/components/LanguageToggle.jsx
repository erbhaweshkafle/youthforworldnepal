import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === 'en' ? 'ne' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      onClick={toggleLang}
      // CHANGED: Added bottom-24 right-4 for mobile, and md:bottom-6 md:right-6 for desktop
      className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 bg-ywnTeal text-ywnLime font-bold py-3 px-5 rounded-full shadow-lg border-2 border-ywnLime hover:bg-ywnLime hover:text-ywnTeal transition-all duration-300 flex items-center gap-2"
    >
      {i18n.language === 'en' ? '🇳🇵 NP' : '🇬🇧 EN'}
    </button>
  );
}