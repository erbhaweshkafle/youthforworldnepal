import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, ShieldCheck, Send, Briefcase, FileText } from 'lucide-react';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(isNe ? 'पठाउँदै...' : 'Sending...');
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => { setStatus(isNe ? 'सन्देश पठाइयो।' : 'Message sent.'); e.target.reset(); }, 
            () => { setStatus(isNe ? 'पठाउन असफल भयो।' : 'Failed to send.'); });
  };

  return (
    <section className="bg-ywnTeal min-h-screen pb-32">
      
      {/* Banner */}
      <div className="relative text-white py-20 md:py-32 px-4 text-center border-b-4 border-ywnLime flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0"><img src={`${import.meta.env.BASE_URL}ywn44.png`} alt="Banner" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-ywnTeal/85"></div></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-ywnLime mb-4">{isNe ? 'सम्पर्क गर्नुहोस्' : 'CONTACT US'}</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{isNe ? 'कन्सोर्टियमका अवसरहरू वा लेखापरीक्षण कागजातहरू अनुरोध गर्न हाम्रो केन्द्रीय कार्यालयमा सम्पर्क गर्नुहोस्।' : 'Reach out to discuss consortium opportunities, program implementation, or request due diligence documents.'}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          
          {/* Info Blocks */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl shadow-xl">
              <h2 className="text-xl md:text-2xl font-black text-white mb-6 border-b border-white/10 pb-4">{isNe ? 'केन्द्रीय कार्यालय' : 'Central Office Headquarters'}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4"><MapPin className="w-6 h-6 text-ywnLime flex-shrink-0 mt-1" /><div><p className="text-gray-200 font-medium text-sm leading-relaxed">{isNe ? 'युथ फर वर्ल्ड नेपाल, वडा ३१, भीमसेनगोला, शान्तिनगर, काठमाडौं महानगरपालिका, हुलाक बक्स नं. ४६४७, नेपाल' : 'Youth for World Nepal (Bishwoka Lagi Yuwa Nepal), Ward 31, Bhimsen Gola, Shantinagar, Kathmandu Metropolitan City, Post Box No. 4647, Nepal'}</p></div></div>
                <div className="flex items-center gap-4"><Phone className="w-6 h-6 text-ywnLime flex-shrink-0" /><div><p className="text-gray-200 font-bold">+977-01-4491166<br/><span className="text-xs text-gray-400 font-normal">{isNe ? "अध्यक्षको प्रत्यक्ष नम्बर: ९८५१०९३४२५" : "President's Direct Line: 9851093425"}</span></p></div></div>
                <div className="flex items-center gap-4"><Mail className="w-6 h-6 text-ywnLime flex-shrink-0" /><div><p className="text-ywnLime font-bold text-sm">infoywn@gmail.com<br/>ojha.achyut@gmail.com</p></div></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                <FileText className="w-6 h-6 mx-auto text-ywnLime mb-2" />
                <h3 className="font-bold text-sm text-white mb-1">{isNe ? 'सूचना (Notice)' : 'Notice'}</h3>
                <p className="text-[10px] text-gray-400">{isNe ? 'सार्वजनिक खरिद सूचनाहरू र संस्थागत विवरणहरूको लागि सम्पर्क गर्नुहोस्।' : 'Contact admin for public procurement notices and disclosures.'}</p>
              </div>
              <div className="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                <Briefcase className="w-6 h-6 mx-auto text-ywnLime mb-2" />
                <h3 className="font-bold text-sm text-white mb-1">{isNe ? 'क्यारियर (Career)' : 'Career'}</h3>
                <p className="text-[10px] text-gray-400">{isNe ? 'रोजगारीका अवसरहरू वा (TORs) माग गर्न इमेल मार्फत सम्पर्क गर्नुहोस्।' : 'Email us to inquire about job openings or to request TORs.'}</p>
              </div>
            </div>
            
            <div className="bg-ywnLime p-6 rounded-2xl shadow-xl relative overflow-hidden group">
              <ShieldCheck className="absolute -right-4 -top-4 w-24 h-24 text-ywnTeal opacity-10" />
              <div className="relative z-10">
                <h3 className="text-lg font-black text-ywnTeal mb-2">{isNe ? 'सत्यनिष्ठाप्रति प्रतिबद्धता' : 'Commitment to Integrity'}</h3>
                <p className="text-ywnTeal/80 text-xs md:text-sm font-medium leading-relaxed">{isNe ? 'सबै साझेदारी सोधपुछहरू गोप्य रूपमा ह्यान्डल गरिन्छन्। YWN ले भ्रष्टाचार विरोधी कानूनहरूको कडाइका साथ पालना गर्दछ।' : 'All inquiries are confidential. YWN strictly adheres to anti-corruption laws and USAID/EU whistleblower regulations.'}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 p-6 md:p-10 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ywnLime to-green-400"></div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3"><Send className="w-6 h-6 text-ywnLime" />{isNe ? 'सोधपुछ पठाउनुहोस्' : 'Send an Inquiry'}</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-xs font-bold text-gray-400 mb-2 uppercase">{isNe ? 'संस्था' : 'Organization'}</label><input type="text" name="organization" required className="w-full px-4 py-3 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-ywnLime transition text-sm" /></div>
                  <div><label className="block text-xs font-bold text-gray-400 mb-2 uppercase">{isNe ? 'सम्पर्क व्यक्ति' : 'Contact Person'}</label><input type="text" name="user_name" required className="w-full px-4 py-3 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-ywnLime transition text-sm" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-xs font-bold text-gray-400 mb-2 uppercase">{isNe ? 'इमेल ठेगाना' : 'Email Address'}</label><input type="email" name="user_email" required className="w-full px-4 py-3 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-ywnLime transition text-sm" /></div>
                  <div><label className="block text-xs font-bold text-gray-400 mb-2 uppercase">{isNe ? 'सोधपुछको प्रकार' : 'Inquiry Type'}</label>
                    <select name="inquiry_type" required className="w-full px-4 py-3 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-ywnLime transition appearance-none text-sm">
                      <option value="" disabled selected className="text-gray-900">{isNe ? 'प्रकार छान्नुहोस्...' : 'Select an option...'}</option>
                      <option value="Partnership & Consortia" className="text-gray-900">{isNe ? 'साझेदारी र कन्सोर्टिया' : 'Partnership & Consortia'}</option>
                      <option value="Request Audit Reports" className="text-gray-900">{isNe ? 'लेखापरीक्षण प्रतिवेदन अनुरोध' : 'Request Audit Reports'}</option>
                      <option value="General Inquiry" className="text-gray-900">{isNe ? 'सामान्य सोधपुछ' : 'General Inquiry'}</option>
                    </select>
                  </div>
                </div>
                <div><label className="block text-xs font-bold text-gray-400 mb-2 uppercase">{isNe ? 'सन्देश' : 'Message'}</label><textarea name="message" rows="4" required className="w-full px-4 py-3 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-ywnLime transition resize-none text-sm"></textarea></div>
                <button type="submit" className="w-full bg-ywnLime text-ywnTeal font-black text-lg py-4 rounded-xl hover:bg-white transition-all mt-2">{isNe ? 'सोधपुछ पठाउनुहोस्' : 'Submit Inquiry'}</button>
                {status && <div className="mt-4 bg-ywnLime/20 p-3 rounded-xl text-center"><p className="font-bold text-ywnLime text-sm">{status}</p></div>}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}