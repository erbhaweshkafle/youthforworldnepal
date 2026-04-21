import { useTranslation } from 'react-i18next';
import { ShieldCheck, Users, Landmark, Target, Eye, Quote } from 'lucide-react';

export default function About() {
  const { t, i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const advisoryTeam = [
    "Dr. Ramesh Kanta Adhikari", "Dr. Govinda Prasad Ojha", "Dr. Babu Ram Marasini", 
    "Dr. Krishna Kumar Rai", "Mr. Kabi Raj Khanal", "Mr. Kul Prasad Joshi", "Dr. Jairaj Pokharel"
  ];

  const boardTeam = [
    { name: "Mr. Achyut Kumar Ojha", en: "Chairman", ne: "अध्यक्ष" },
    { name: "Mrs. Parbati Paudel", en: "Vice-Chairman", ne: "उपाध्यक्ष" },
    { name: "Miss Devora Bhattarai", en: "Secretary", ne: "सचिव" },
    { name: "Mrs. Prijna Pokharel", en: "Treasurer", ne: "कोषाध्यक्ष" },
    { name: "Mrs. Dayana Khanal", en: "Member", ne: "सदस्य" },
    { name: "Mr. Prasant Kaphle", en: "Member", ne: "सदस्य" },
    { name: "Ms. Srijana Pandey", en: "Member", ne: "सदस्य" }
  ];

  const executiveTeam = [
    { name: "Dr. Khem Raj Sharma", role: "Executive Director" },
    { name: "Mr. Ramesh Bhandari", role: "Program Co-ordinator / Officer" },
    { name: "Mr. Nabin Kumar Gaire", role: "Admin / Finance Officer" },
    { name: "Er. Rajan Prasad Lamichhane", role: "Senior IT / Information Officer" },
    { name: "Er. Bhawesh Kafle", role: "IT / Information Officer" },
    { name: "Mr. Deepak Ojha", role: "Logistic Officer" }
  ];

  return (
    <div className="bg-ywnTeal min-h-screen pb-32">
      {/* Hero Banner */}
      <div className="relative text-white py-32 px-4 text-center border-b-4 border-ywnLime flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ywnTeal/85"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-ywnLime mb-6">{t('about.title')}</h1>
          <p className="text-2xl text-gray-300 font-medium">{t('about.subtitle')}</p>
        </div>
      </div>
{/* Mission, Vision & Chairman Message */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 p-8 rounded-2xl border-t-4 border-ywnLime shadow-xl backdrop-blur-sm">
            <Target className="w-10 h-10 text-ywnLime mb-4" />
            <h2 className="text-2xl font-black text-white mb-3">{isNe ? 'हाम्रो मिसन (Mission)' : 'Our Mission'}</h2>
            <p className="text-gray-300 leading-relaxed font-medium">{isNe ? 'ग्रामीण समुदायको सशक्तीकरण गर्दै गरिबी निवारण र दिगो विकास प्रवर्द्धन गर्ने।' : 'To empower rural communities, eradicate poverty, and promote sustainable development through community-led initiatives.'}</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border-t-4 border-ywnLime shadow-xl backdrop-blur-sm">
            <Eye className="w-10 h-10 text-ywnLime mb-4" />
            <h2 className="text-2xl font-black text-white mb-3">{isNe ? 'हाम्रो भिजन (Vision)' : 'Our Vision'}</h2>
            <p className="text-gray-300 leading-relaxed font-medium">{isNe ? 'एक समतामूलक समाज जहाँ सबै नागरिकले स्वास्थ्य, शिक्षा र अवसरहरूमा समान पहुँच प्राप्त गर्छन्।' : 'An equitable society where all citizens have equal access to health, education, and opportunities for a dignified life.'}</p>
          </div>
        </div>

        <div className="bg-ywnLime text-ywnTeal rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          <Quote className="absolute top-6 right-8 w-24 h-24 text-ywnTeal opacity-10 group-hover:scale-110 transition duration-500" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-6">{isNe ? 'अध्यक्षको सन्देश' : 'Message from the Chairman'}</h2>
            <p className="text-lg font-medium leading-relaxed mb-6 max-w-4xl">
              {isNe ? '"विगत दुई दशकदेखि, युथ फर वर्ल्ड नेपालले सीमान्तकृत समुदायको उत्थानमा निरन्तर काम गर्दै आएको छ। हाम्रो सफलताको श्रेय हाम्रा समर्पित कर्मचारी, दातृ निकाय र स्थानीय जनसमुदायलाई जान्छ।"' : '"For over two decades, Youth for World Nepal has been relentlessly working to uplift marginalized communities. Our success is a testament to our dedicated staff, our generous donors, and the resilient local communities we serve."'}
            </p>
            <p className="font-black text-2xl">— Mr. Achyut Kumar Ojha</p>
            <p className="font-bold text-sm uppercase tracking-wider">{isNe ? 'अध्यक्ष' : 'Chairman'}</p>
          </div>
        </div>
      </div>
      {/* History & Governance (Using local images) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/40 rounded-2xl shadow-2xl border-l-8 border-ywnLime border border-white/10 overflow-hidden group">
            <div className="h-48 overflow-hidden"><img src={`${import.meta.env.BASE_URL}ywn1.png`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition" /></div>
            <div className="p-8"><h2 className="text-3xl font-bold text-ywnLime mb-4">{t('about.historyTitle')}</h2><p className="text-gray-300">{t('about.history')}</p></div>
          </div>
          <div className="bg-black/40 rounded-2xl shadow-2xl border-l-8 border-ywnLime border border-white/10 overflow-hidden group">
            <div className="h-48 overflow-hidden"><img src={`${import.meta.env.BASE_URL}ywn2.png`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition" /></div>
            <div className="p-8"><h2 className="text-3xl font-bold text-ywnLime mb-4">{t('about.governanceTitle')}</h2><p className="text-gray-300">{t('about.governance')}</p></div>
          </div>
        </div>
      </div>

      {/* 1. Advisory Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-black text-ywnLime mb-8 text-center">{isNe ? 'सल्लाहकार समिति' : '1. Advisory Team'}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {advisoryTeam.map((name, i) => (
            <div key={i} className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white font-medium hover:border-ywnLime transition">{name}</div>
          ))}
        </div>
      </div>

      {/* 2. Board of Directors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-black text-ywnLime mb-8 text-center">{isNe ? '२. कार्य-समिति (Board of Directors)' : '2. Board of Directors'}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardTeam.map((member, i) => (
            <div key={i} className="bg-white/5 rounded-xl border border-white/10 p-6 text-center hover:border-ywnLime transition">
              <Users className="w-10 h-10 mx-auto text-ywnLime opacity-50 mb-4" />
              <h3 className="font-black text-lg text-white mb-2">{member.name}</h3>
              <span className="bg-ywnLime text-ywnTeal px-3 py-1 rounded text-xs font-bold uppercase">{isNe ? member.ne : member.en}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Executive Team */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ywnLime rounded-3xl p-10 shadow-2xl relative overflow-hidden">
          <ShieldCheck className="absolute -right-10 -bottom-10 w-64 h-64 text-ywnTeal opacity-10" />
          <h2 className="text-3xl font-black text-ywnTeal mb-8 text-center relative z-10">{isNe ? '३. कार्यकारी टोली' : '3. Executive Team'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {executiveTeam.map((member, i) => (
              <div key={i} className="bg-ywnTeal p-6 rounded-xl border border-white/20">
                <h3 className="font-black text-xl text-ywnLime mb-1">{member.name}</h3>
                <p className="text-white text-sm font-bold opacity-80">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}