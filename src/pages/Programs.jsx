import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';

export default function Programs() {
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  return (
    <div className="bg-ywnTeal min-h-screen pb-32">
      
      {/* Banner */}
      <div className="relative text-white py-20 md:py-32 px-4 text-center border-b-4 border-ywnLime flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0"><img src={`${import.meta.env.BASE_URL}ywn41.png`} alt="Banner" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-ywnTeal/85"></div></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-ywnLime mb-4">{isNe ? 'कार्यक्रमहरू' : 'PROGRAMS'}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Program Area & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white/5 p-6 md:p-10 rounded-2xl border border-ywnLime/20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">{isNe ? 'कार्यक्रम क्षेत्र' : 'Program Area'}</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {isNe ? 'हाम्रो मुख्य कार्यक्रम क्षेत्रहरूमा सामुदायिक स्वास्थ्य र पोषण, सामाजिक व्यवहार परिवर्तन सञ्चार (SBCC), इपिडिमियोलोजिकल अनुसन्धान र सर्भेक्षण, शैक्षिक सशक्तीकरण, र दिगो ग्रामीण जीविकोपार्जन पर्दछन्।' : 'Our core program areas include Community Health & Nutrition, Social Behavior Change Communication (SBCC), Epidemiological Research & Surveys, Educational Empowerment, and Sustainable Rural Livelihoods.'}
            </p>
          </div>
          <div className="bg-white/5 p-6 md:p-10 rounded-2xl border border-ywnLime/20">
            <h2 className="text-2xl md:text-3xl font-black text-ywnLime mb-4">{isNe ? 'उपलब्धिहरू' : 'Achievements'}</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {isNe ? 'आफ्नो इतिहासभर, YWN ले निरन्तर उत्कृष्ट नतिजाहरू प्रदान गर्दै इपिडिमियोलोजी तथा रोग नियन्त्रण महाशाखा (EDCD), प्लान इन्टरनेशनल, युनिसेफ, राष्ट्रिय स्वास्थ्य शिक्षा, सूचना तथा संचार केन्द्र (NHEICC), र RTI इन्टरनेशनल लगायत विभिन्न सरकारी र अन्तर्राष्ट्रिय निकायहरूबाट औपचारिक मान्यता र प्रशंसापत्रहरू प्राप्त गरेको छ।' : 'Throughout our history, YWN has consistently delivered exceptional results, earning formal recognition from various government and international bodies, including the Epidemiology and Disease Control Division (EDCD), Plan International, UNICEF, the National Health Education, Information and Communication Center (NHEICC), and RTI International.'}
            </p>
          </div>
        </div>

        {/* Voices From Projects */}
        <div className="border-t border-white/10 pt-16">
          <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-12">{isNe ? 'परियोजनाहरूबाट आवाज' : 'VOICES FROM PROJECTS'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-black/30 p-6 md:p-8 rounded-xl relative">
              <Quote className="absolute top-4 right-4 text-ywnLime/20 w-12 h-12" />
              <h3 className="text-ywnLime font-bold mb-2 uppercase text-sm tracking-wider">{isNe ? 'शिक्षा' : 'Education'}</h3>
              <p className="text-gray-200 italic mb-4">{isNe ? '"साक्षरता कार्यक्रमहरूले हामीलाई पढ्न मात्र सिकाएनन्; स्थानीय वडा बैठकहरूमा कसरी बोल्ने भनेर पनि सिकाए।"' : '"The literacy programs didn\'t just teach us to read; they taught us how to speak up in our local ward meetings."'}</p>
              <p className="text-gray-400 font-bold text-sm">— {isNe ? 'समुदायको सदस्य' : 'Community Member'}</p>
            </div>
            <div className="bg-black/30 p-6 md:p-8 rounded-xl relative">
              <Quote className="absolute top-4 right-4 text-ywnLime/20 w-12 h-12" />
              <h3 className="text-ywnLime font-bold mb-2 uppercase text-sm tracking-wider">{isNe ? 'स्वास्थ्य' : 'Health'}</h3>
              <p className="text-gray-200 italic mb-4">{isNe ? '"YWN ले प्रदान गरेको प्राविधिक सहयोगले मातृ पोषणप्रतिको हाम्रो नगरपालिकाको दृष्टिकोणलाई पूर्ण रूपमा परिवर्तन गर्यो।"' : '"The technical assistance provided by YWN fundamentally transformed our municipality’s approach to maternal nutrition."'}</p>
              <p className="text-gray-400 font-bold text-sm">— {isNe ? 'जिल्ला जनस्वास्थ्य अधिकृत' : 'District Public Health Officer'}</p>
            </div>
            <div className="bg-black/30 p-6 md:p-8 rounded-xl relative">
              <Quote className="absolute top-4 right-4 text-ywnLime/20 w-12 h-12" />
              <h3 className="text-ywnLime font-bold mb-2 uppercase text-sm tracking-wider">{isNe ? 'अनुसन्धान' : 'Research'}</h3>
              <p className="text-gray-200 italic mb-4">{isNe ? 'पुग्न कठिन हिमाली क्षेत्रहरूमा इपिडिमियोलोजिकल डाटा सङ्कलन गर्ने चुनौतीहरूमा हाम्रा फिल्ड अनुसन्धानकर्ताहरूका विचारहरू।' : 'Insights from our field researchers on the challenges of collecting epidemiological data in hard-to-reach Himalayan regions.'}</p>
            </div>
            <div className="bg-black/30 p-6 md:p-8 rounded-xl relative">
              <Quote className="absolute top-4 right-4 text-ywnLime/20 w-12 h-12" />
              <h3 className="text-ywnLime font-bold mb-2 uppercase text-sm tracking-wider">{isNe ? 'सर्भेक्षण' : 'Survey'}</h3>
              <p className="text-gray-200 italic mb-4">{isNe ? 'राष्ट्रिय सर्भेक्षणहरूमा प्रत्येक घरधुरी गणना भएको सुनिश्चित गर्न दिनौं हिँड्ने हाम्रा डाटा संकलकहरूका कथाहरू।' : 'Stories from our data enumerators who walked for days to ensure every household was counted in the national surveys.'}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}