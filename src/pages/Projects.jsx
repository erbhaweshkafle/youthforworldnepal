import { useTranslation } from 'react-i18next';
import { MapPin, Users, Building2, BookOpen } from 'lucide-react';

export default function Projects() {
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const portfolio = [
    { id: 1, img: "ywn3.png", title: isNe ? 'नेपाल औलो सर्भेक्षण' : 'Nepal Malariometric Survey', funder: 'EDCD / Global Fund', location: '55+ Districts', reach: '5,868 Samples', year: '2017' },
    { id: 2, img: "ywn4.png", title: isNe ? 'हात्तीपाइले रोग सर्भेक्षण' : 'LF Post MDA Coverage', funder: 'RTI ENVISION', location: '10 Districts', reach: '15,000 HHs', year: '2017' },
    { id: 3, img: "ywn5.png", title: isNe ? 'स्मार्ट दम्पति अभियान' : 'Smart Dampati Campaign', funder: 'USAID / JHU-HC3', location: '13 Districts', reach: 'Behavior Change', year: '2016-2024' },
    { id: 4, img: "ywn6.png", title: isNe ? 'मातृ र नवजात माइक्रोन्यूट्रियन्ट' : 'Maternal Micronutrient', funder: 'Micronutrient Initiative', location: '10 Districts', reach: 'Maternal Nutrition', year: '2013-2015' },
    { id: 5, img: "ywn7.png", title: isNe ? 'सेन्टिनेल साइट सर्भेक्षण' : 'Sentinel Site Survey', funder: 'RTI / USAID', location: 'Rukum, Salyan, Rautahat', reach: 'Health Data', year: '2013' },
    { id: 6, img: "ywn8.png", title: isNe ? 'IYCF तालिम' : 'IYCF Training', funder: 'CHD', location: 'Bara, Mahottari, Doti', reach: 'Infant Feeding', year: '2012-2014' },
    { id: 7, img: "ywn9.png", title: isNe ? 'CB-IMCI तालिम' : 'CB-IMCI Training', funder: 'CHD', location: 'Pokhara, Mustang, Dolpa', reach: 'Community Health', year: '2012-2015' },
    { id: 8, img: "ywn10.png", title: isNe ? 'विद्यालय स्वास्थ्य सर्भेक्षण' : 'School Health End-Line', funder: 'JICA', location: 'Syangja, Sindhupalchowk', reach: 'Student Health', year: '2010-2011' }
  ];

  return (
    <div className="bg-ywnTeal min-h-screen pb-32">
      <div className="relative text-white py-32 px-4 text-center border-b-4 border-ywnLime flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ywnTeal/85"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-ywnLime mb-6">{isNe ? 'प्रभाव र तथ्यांक' : 'Impact & Data'}</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">{isNe ? 'प्रमाणित ट्र्याक रेकर्ड।' : 'Performance History: A proven track record.'}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.map((project) => (
            <div key={project.id} className="bg-white/5 rounded-2xl shadow-2xl overflow-hidden border border-white/10 group">
              <div className="h-56 relative overflow-hidden">
                <img src={`${import.meta.env.BASE_URL}${project.img}`} className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition duration-500" />
                <div className="absolute top-0 right-0 bg-ywnLime text-ywnTeal font-black px-4 py-1 rounded-bl-xl">{project.year}</div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-black text-white mb-6">{project.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black/40 p-5 rounded-xl border border-white/5">
                  <div><p className="text-xs font-bold text-gray-500 uppercase">Donor</p><p className="font-bold text-gray-200">{project.funder}</p></div>
                  <div><p className="text-xs font-bold text-gray-500 uppercase">Scope</p><p className="font-bold text-gray-200">{project.location}</p></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}