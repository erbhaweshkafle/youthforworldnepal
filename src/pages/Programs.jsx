import { useTranslation } from 'react-i18next';
import { BookOpen, Sprout, HeartPulse, Scale, CheckCircle2 } from 'lucide-react';

export default function Programs() {
  const { t, i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const coreAreas = [
    { key: 'edu', icon: BookOpen },
    { key: 'liv', icon: Sprout },
    { key: 'health', icon: HeartPulse },
    { key: 'gov', icon: Scale }
  ];

  return (
    <div className="bg-ywnTeal min-h-screen pb-32">
      {/* Header */}
      <div className="relative text-white py-32 px-4 text-center border-b-4 border-ywnLime flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ywnTeal/85"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-black text-ywnLime mb-6">{t('programs.title')}</h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">{t('programs.subtitle')}</p>
        </div>
      </div>

      {/* 4 Core Pillars (Dark Glassy Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {coreAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <div key={area.key} className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-2xl hover:border-ywnLime hover:-translate-y-2 transition-all duration-300">
                <IconComponent className="w-14 h-14 mb-6 text-ywnLime" />
                <h3 className="text-2xl font-bold text-white mb-4">{t(`programs.areas.${area.key}.title`)}</h3>
                <p className="text-gray-400 text-lg">{t(`programs.areas.${area.key}.desc`)}</p>
              </div>
            );
          })}
        </div>

        {/* 20 Years of Projects (Dark Theme) */}
        <div className="bg-black/20 rounded-3xl p-10 lg:p-20 text-white shadow-2xl border border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-ywnLime mb-6">{t('programs.projectsTitle')}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t('programs.projectsSubtitle')}</p>
          </div>

          <div className="space-y-12">
            {['smart', 'malaria', 'lymphatic', 'nutrition'].map((key, index) => (
              <div key={key} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-ywnLime/50 transition-all`}>
                <div className="w-full lg:w-1/2 p-4 lg:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-ywnLime" />
                    <h3 className="text-3xl font-bold text-white">{t(`programs.projects.${key}.title`)}</h3>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {t(`programs.projects.${key}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}