import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';

export default function Projects() {
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const journeys = [
    { year: '2025', en: 'Conducted strategic planning for localization opportunities with international bilateral donors and mapped climate-resilient livelihood initiatives.', ne: 'अन्तर्राष्ट्रिय द्विपक्षीय दातृ निकायहरूसँग स्थानीयकरण (Localization) का अवसरहरूको लागि रणनीतिक योजना निर्माण र जलवायु-अनुकूल जीविकोपार्जन पहलहरूको म्यापिङ।' },
    { year: '2024', en: 'Secured and completed the agreement with NHEICC to update the critical Health Promotion Booklet for the Smart Dampati reproductive health advocacy program.', ne: 'स्मार्ट दम्पति प्रजनन् स्वास्थ्य अभियानको लागि महत्वपूर्ण स्वास्थ्य प्रवर्द्धन पुस्तिका अद्यावधिक गर्न NHEICC सँगको सम्झौता सम्पन्न।' },
    { year: '2023', en: 'Consolidated field training modules for local government health workers and advanced organizational safeguarding policies.', ne: 'स्थानीय सरकारका स्वास्थ्यकर्मीहरूका लागि फिल्ड तालिम मोड्युलहरू एकीकृत गरियो र संगठनात्मक सुरक्षा नीतिहरूलाई अन्तर्राष्ट्रिय स्तरमा अद्यावधिक गरियो।' },
    { year: '2022', en: 'Expanded focus on community resilience and post-pandemic health recovery, assisting local health posts with data management.', ne: 'स्थानीय स्वास्थ्य चौकीहरूलाई डाटा व्यवस्थापनमा सहयोग गर्दै समुदायको लचिलोपन र महामारीपछिको स्वास्थ्य पुनःस्थापनामा ध्यान विस्तार गरियो।' },
    { year: '2021', en: 'Supported local municipalities in public health awareness during national health emergencies.', ne: 'राष्ट्रिय स्वास्थ्य संकटको समयमा जनस्वास्थ्य सचेतना जगाउन स्थानीय नगरपालिकाहरूलाई सहयोग प्रदान गरियो।' },
    { year: '2020', en: 'Maintained operational readiness and supported marginalized communities through targeted infectious disease prevention campaigns.', ne: 'संक्रामक रोग रोकथाम सम्बन्धी लक्षित स्वास्थ्य सञ्चार अभियान मार्फत सीमान्तकृत समुदायहरूलाई सहयोग प्रदान गरियो।' },
    { year: '2019', en: 'Restructured the YWN Center for Development Studies and Policy Advocacy.', ne: 'YWN विकास अध्ययन र नीति वकालत केन्द्रको पुनर्संरचना गरियो।' },
    { year: '2018', en: 'Focused on policy advocacy and the dissemination of human rights frameworks within rural educational settings.', ne: 'ग्रामीण शैक्षिक सेटिङहरू भित्र नीति वकालत र मानव अधिकार ढाँचाहरूको प्रसारमा ध्यान केन्द्रित गरियो।' },
    { year: '2017', en: 'Conducted the massive IT-based Nepal Malariometric Survey (5,868 samples) and the Lymphatic Filariasis Post MDA Coverage Survey (15,000 households).', ne: '३२ जिल्लाहरूमा विशाल आईटी-आधारित नेपाल औलो सर्भेक्षण (५,८६८ नमुनाहरू) र १० जिल्लाहरूमा हात्तीपाइले रोग सर्भेक्षण सञ्चालन गरियो।' },
    { year: '2016', en: 'Executed crucial health behavior change campaigns and emergency nutrition responses across multiple districts.', ne: 'विभिन्न जिल्लाहरूमा महत्वपूर्ण स्वास्थ्य व्यवहार परिवर्तन अभियानहरू र आकस्मिक पोषण कार्यक्रमहरू सञ्चालन गरियो।' }
  ];

  const pastProjects = [
    { year: "2024", en: "Health Promotion Policy & SBCC Updates (NHEICC / USAID)", ne: "स्वास्थ्य प्रवर्द्धन नीति र SBCC अपडेट (NHEICC / USAID)" },
    { year: "2017", en: "Nepal Malariometric Survey (EDCD / Save the Children / Global Fund)", ne: "नेपाल औलो सर्भेक्षण (EDCD / Save the Children / Global Fund)" },
    { year: "2017", en: "Lymphatic Filariasis Post MDA Coverage Survey (EDCD / RTI ENVISION)", ne: "हात्तीपाइले रोग सर्भेक्षण (EDCD / RTI ENVISION)" },
    { year: "2016-2017", en: "Health Behavior Change Awareness Program (NHEICC)", ne: "स्वास्थ्य व्यवहार परिवर्तन सचेतना कार्यक्रम (NHEICC)" },
    { year: "2015-2016", en: "Emergency Nutrition, OTP & Communal Feeding (Plan International / UNICEF)", ne: "आकस्मिक पोषण, OTP र सामुदायिक फिडिङ (Plan International / UNICEF)" },
    { year: "2015-2016", en: "Health Orientation and Behavior Change (NHEICC)", ne: "स्वास्थ्य अभिमुखीकरण र व्यवहार परिवर्तन (NHEICC)" },
    { year: "2015", en: "Gender Based Violence (GBV) Awareness (NHEICC)", ne: "लैंगिक हिंसा (GBV) सचेतना (NHEICC)" },
    { year: "2013-2015", en: "Maternal and Neonatal Micronutrient Program (IMNMP) (Micronutrient Initiative)", ne: "मातृ तथा नवजात शिशु माइक्रोन्यूट्रियन्ट कार्यक्रम (MI)" },
    { year: "2012-2014", en: "Infant and Young Child Feeding (IYCF) Training (CHD / DHO)", ne: "शिशु तथा बाल्यकालीन पोषण (IYCF) तालिम (CHD)" },
    { year: "2013", en: "Sentinel Site Survey (RTI International / USAID)", ne: "सेन्टिनेल साइट सर्भेक्षण (RTI International / USAID)" },
    { year: "2012", en: "CB-IMCI Training (CHD)", ne: "CB-IMCI तालिम (CHD)" },
    { year: "2011-2013", en: "Community Based Newborn Care Program (CB-NCP) (CHD / DHO)", ne: "समुदायमा आधारित नवजात शिशु स्याहार कार्यक्रम (CHD)" },
    { year: "2011", en: "FCHV Fund Utilization Training (JSI)", ne: "FCHV कोष उपयोग तालिम (JSI)" },
    { year: "2011", en: "School Health & Nutrition Program End-Line Survey (JICA)", ne: "विद्यालय स्वास्थ्य र पोषण कार्यक्रम अन्तिम सर्भेक्षण (JICA)" },
    { year: "2010", en: "Introducing Zinc Program (UNICEF / MI)", ne: "जिंक कार्यक्रमको सुरुवात (UNICEF / MI)" },
    { year: "2009", en: "Master Training of Trainers (MTOT) of CMAM (UNICEF)", ne: "CMAM को मास्टर ट्रेनर तालिम (UNICEF)" },
    { year: "2008-2009", en: "School Health Nutrition (SCF)", ne: "विद्यालय स्वास्थ्य पोषण (SCF)" }
  ];

  return (
    <div className="bg-ywnTeal min-h-screen pb-32 overflow-x-hidden">
      
      {/* Banner */}
      <div className="relative text-white py-20 md:py-32 px-4 text-center border-b-4 border-ywnLime flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={`${import.meta.env.BASE_URL}ywn42.png`} alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ywnTeal/85"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-ywnLime mb-4">{isNe ? 'परियोजनाहरू र यात्रा' : 'PROJECTS & JOURNEY'}</h1>
          <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto">{isNe ? 'हाम्रो विस्तृत कार्य अनुभवले प्रमुख अन्तर्राष्ट्रिय दातृ निकायहरूसँग मिलेर जटिल र बहु-जिल्ला परियोजनाहरू व्यवस्थापन गर्ने क्षमता प्रमाणित गर्दछ।' : 'Our extensive portfolio demonstrates our capacity to manage complex, multi-district interventions alongside major international donors.'}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* NEW DESIGN: Journey Cards instead of a vertical line */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white inline-block border-b-4 border-ywnLime pb-2">{isNe ? 'हाम्रो यात्रा (Journey)' : 'Our Journey'}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {journeys.map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-ywnLime transition-all relative overflow-hidden group">
                <div className="absolute -right-4 -top-6 text-6xl md:text-7xl font-black text-white/5 group-hover:text-ywnLime/10 transition-colors pointer-events-none">
                  {item.year}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-ywnLime mb-3">{isNe ? 'कार्यक्रम' : 'Program'} {item.year}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{isNe ? item.ne : item.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NEW DESIGN: Past Projects Grid */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white inline-block border-b-4 border-ywnLime pb-2">{isNe ? 'विगतका परियोजनाहरू' : 'Past Projects'}</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {pastProjects.map((proj, i) => (
              <div key={i} className="bg-black/30 p-4 md:p-5 rounded-xl border border-white/5 flex items-start gap-3 hover:border-ywnLime/50 transition">
                <CheckCircle className="w-5 h-5 text-ywnLime flex-shrink-0 mt-0.5" />
                <div>
                  <span className="bg-ywnLime text-ywnTeal text-[10px] md:text-xs font-bold px-2 py-1 rounded inline-block mb-1">{proj.year}</span>
                  <p className="text-gray-200 font-medium text-sm md:text-base leading-snug">{isNe ? proj.ne : proj.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}