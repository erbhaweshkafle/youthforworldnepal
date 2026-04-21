import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, ShieldCheck, Send } from 'lucide-react';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(isNe ? 'पठाउँदै...' : 'Sending...');

    // Replace with your actual EmailJS Service ID, Template ID, and Public Key
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
          setStatus(isNe ? 'सन्देश सफलतापूर्वक पठाइयो।' : 'Message sent successfully. We will be in touch.');
          e.target.reset();
      }, () => {
          setStatus(isNe ? 'सन्देश पठाउन असफल भयो।' : 'Failed to send message. Please email us directly.');
      });
  };

  return (
    <section className="bg-ywnTeal min-h-screen pb-24">
      {/* Premium Header */}
      <div className="relative text-white py-32 px-4 text-center border-b-4 border-ywnLime flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Contact Headquarters" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-ywnTeal/85"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-ywnLime mb-6">
            {isNe ? 'हामीलाई सम्पर्क गर्नुहोस्' : 'Contact Us'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {isNe 
              ? 'कन्सोर्टियमका अवसरहरू, कार्यक्रम कार्यान्वयन, वा लेखापरीक्षण कागजातहरू अनुरोध गर्न हाम्रो केन्द्रीय कार्यालयमा सम्पर्क गर्नुहोस्।' 
              : 'Reach out to our Central Office to discuss consortium opportunities, program implementation, or to request documentation for due diligence.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* LEFT COLUMN: Institutional Data & Integrity */}
          <div className="lg:col-span-2 space-y-8">
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl">
              <h2 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">
                {isNe ? 'केन्द्रीय कार्यालय' : 'Central Headquarters'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-ywnLime/10 p-3 rounded-full mt-1">
                    <MapPin className="w-6 h-6 text-ywnLime" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{isNe ? 'ठेगाना' : 'Address'}</p>
                    <p className="text-gray-200 leading-relaxed font-medium">
                      Acme Marg, Mid-Baneshwor,<br/>
                      Kathmandu Metropolitan City-31,<br/>
                      Post Box No. 4647, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-ywnLime/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-ywnLime" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{isNe ? 'फोन' : 'Phone'}</p>
                    <p className="text-gray-200 font-bold text-lg">+977-01-4491166</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-ywnLime/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-ywnLime" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{isNe ? 'इमेल' : 'Email'}</p>
                    <p className="text-ywnLime font-bold text-lg">infoywn@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance & Integrity Block */}
            <div className="bg-ywnLime p-8 rounded-3xl shadow-2xl border border-ywnLime relative overflow-hidden group">
              <ShieldCheck className="absolute -right-6 -top-6 w-32 h-32 text-ywnTeal opacity-10 group-hover:scale-110 transition duration-500" />
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-ywnTeal mb-4">
                  {isNe ? 'सत्यनिष्ठाप्रति प्रतिबद्धता' : 'Commitment to Integrity'}
                </h3>
                <p className="text-ywnTeal/80 font-medium leading-relaxed">
                  {isNe 
                    ? 'सबै साझेदारी सोधपुछहरू गोप्य रूपमा ह्यान्डल गरिन्छन्। YWN ले भ्रष्टाचार विरोधी कानूनहरूको कडाइका साथ पालना गर्दछ र USAID र EU नियमहरू अनुसार स्वतन्त्र संयन्त्र कायम राख्छ।' 
                    : 'All partnership inquiries are handled confidentially. YWN strictly adheres to anti-corruption laws and maintains an independent whistleblower mechanism in accordance with USAID and EU regulations.'}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Interactive Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ywnLime via-green-400 to-ywnLime"></div>
              
              <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
                <Send className="w-8 h-8 text-ywnLime" />
                {isNe ? 'सोधपुछ पठाउनुहोस्' : 'Send an Inquiry'}
              </h2>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">{isNe ? 'संस्था' : 'Organization'}</label>
                    <input type="text" name="organization" required className="w-full px-5 py-4 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-ywnLime focus:ring-1 focus:ring-ywnLime transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">{isNe ? 'सम्पर्क व्यक्ति' : 'Contact Person'}</label>
                    <input type="text" name="user_name" required className="w-full px-5 py-4 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-ywnLime focus:ring-1 focus:ring-ywnLime transition" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">{isNe ? 'इमेल ठेगाना' : 'Email Address'}</label>
                    <input type="email" name="user_email" required className="w-full px-5 py-4 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-ywnLime focus:ring-1 focus:ring-ywnLime transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">{isNe ? 'सोधपुछको प्रकार' : 'Inquiry Type'}</label>
                    <select name="inquiry_type" required className="w-full px-5 py-4 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-ywnLime focus:ring-1 focus:ring-ywnLime transition appearance-none">
                      <option value="" disabled selected className="text-gray-900">{isNe ? 'प्रकार छान्नुहोस्...' : 'Select an option...'}</option>
                      <option value="Partnership & Consortia" className="text-gray-900">{isNe ? 'साझेदारी र कन्सोर्टिया' : 'Partnership & Consortia'}</option>
                      <option value="Request Audit Reports" className="text-gray-900">{isNe ? 'लेखापरीक्षण प्रतिवेदन अनुरोध' : 'Request Audit Reports'}</option>
                      <option value="General Inquiry" className="text-gray-900">{isNe ? 'सामान्य सोधपुछ' : 'General Inquiry'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">{isNe ? 'सन्देश' : 'Message'}</label>
                  <textarea name="message" rows="5" required className="w-full px-5 py-4 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-ywnLime focus:ring-1 focus:ring-ywnLime transition resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-ywnLime text-ywnTeal font-black text-xl py-5 rounded-xl hover:bg-white hover:text-ywnTeal transition-all shadow-[0_0_20px_rgba(225,255,81,0.2)] hover:shadow-[0_0_30px_rgba(225,255,81,0.4)] mt-4">
                  {isNe ? 'सोधपुछ पठाउनुहोस्' : 'Submit Inquiry'}
                </button>
                
                {status && (
                  <div className="mt-6 bg-ywnLime/20 border border-ywnLime/50 p-4 rounded-xl text-center">
                    <p className="font-bold text-ywnLime text-lg">{status}</p>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}