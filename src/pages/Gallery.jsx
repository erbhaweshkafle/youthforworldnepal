import { useTranslation } from 'react-i18next';
import { BookOpen, Mail, Video } from 'lucide-react';

export default function Gallery() {
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const localImages = Array.from({ length: 15 }, (_, i) => `${import.meta.env.BASE_URL}ywn${i + 11}.png`);

  return (
    <div className="bg-ywnTeal min-h-screen pb-32">
      
      {/* Banner */}
      <div className="relative text-white py-20 md:py-32 px-4 text-center border-b-4 border-ywnLime flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0"><img src={`${import.meta.env.BASE_URL}ywn43.png`} alt="Banner" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-ywnTeal/85"></div></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-ywnLime mb-4">{isNe ? 'ग्यालरी र स्रोतहरू' : 'GALLERY & RESOURCES'}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Resources Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-xl border-t-4 border-ywnLime">
            <BookOpen className="w-8 h-8 text-ywnLime mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">{isNe ? 'प्रकाशनहरू' : 'Publications'}</h2>
            <p className="text-gray-400 text-sm mb-4">{isNe ? 'अनुसन्धान कागजातहरू, सर्भेक्षण प्रतिवेदनहरू, र स्वास्थ्य प्रवर्द्धन सामग्रीहरूको पुस्तकालय।' : 'Library of research documents, baseline/end-line survey reports, and health materials.'}</p>
            <p className="text-xs text-ywnLime italic">{isNe ? '(विशिष्ट परियोजना प्रतिवेदनहरू प्राप्त गर्न सम्पर्क गर्नुहोस्)' : '(Please contact us to request access to specific reports.)'}</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border-t-4 border-ywnLime">
            <Mail className="w-8 h-8 text-ywnLime mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">{isNe ? 'न्यूजलेटर' : 'Newsletter'}</h2>
            <p className="text-gray-400 text-sm mb-4">{isNe ? 'हाम्रो फिल्ड कार्य, प्रभाव, र संस्थागत गतिविधिहरूको बारेमा अपडेट रहनुहोस्।' : 'Stay updated on our fieldwork, community impact stories, and milestones.'}</p>
            <p className="text-xs text-ywnLime italic">{isNe ? '(इमेल सूचीमा समावेश हुन सम्पर्क गर्नुहोस्)' : '(Please contact us to subscribe.)'}</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border-t-4 border-ywnLime">
            <Video className="w-8 h-8 text-ywnLime mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">{isNe ? 'भिडियो र मिडिया' : 'Video & Media'}</h2>
            <p className="text-gray-400 text-sm mb-4">{isNe ? 'हाम्रो यात्रा हेर्नुहोस् र प्रेस विज्ञप्ति तथा आधिकारिक कभरेज पढ्नुहोस्।' : 'Watch our journey, and access press releases and official media coverage.'}</p>
            <p className="text-xs text-ywnLime italic">{isNe ? '(मिडिया सोधपुछका लागि सम्पर्क गर्नुहोस्)' : '(Please contact us for media inquiries/press resources.)'}</p>
          </div>
        </div>

        {/* Image Grid */}
        <div>
          <h2 className="text-3xl font-black text-center text-white mb-8 border-b border-white/10 pb-6">{isNe ? 'फोटो ग्यालेरी' : 'Photo Gallery'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {localImages.map((src, index) => (
              <div key={index} className="group overflow-hidden rounded-xl shadow-2xl bg-black/40 border border-white/10">
                <img src={src} alt={`Field Work ${index}`} className="w-full h-48 md:h-64 object-cover transform group-hover:scale-110 opacity-90 group-hover:opacity-100 transition duration-500" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}