import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BookOpen, Sprout, HeartPulse, Scale, ShieldCheck, Landmark, Users, Map, Award } from 'lucide-react';

export default function Home() {
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  // Carousel Logic (Block 1)
  const slides = [
    { img: 'ywn1.png', en: 'Female Community Health Volunteers (FCHVs) conducting maternal health training in a rural clinic.', ne: 'ग्रामीण क्लिनिकमा मातृ स्वास्थ्य तालिम दिँदै गरेका महिला सामुदायिक स्वास्थ्य स्वयंसेविकाहरू (FCHVs)।' },
    { img: 'ywn2.png', en: 'Local farmers demonstrating climate-resilient agricultural practices in the hill regions.', ne: 'पहाडी क्षेत्रमा जलवायु-अनुकूल कृषि अभ्यास प्रदर्शन गर्दै स्थानीय किसानहरू।' },
    { img: 'ywn3.png', en: 'Interactive rights-based literacy and education classes for marginalized women.', ne: 'सीमान्तकृत महिलाहरूका लागि अन्तरक्रियात्मक अधिकारमा आधारित साक्षरता र शिक्षा कक्षाहरू।' },
    { img: 'ywn4.png', en: 'YWN field researchers collecting epidemiological survey data using digital tablets.', ne: 'डिजिटल ट्याब्लेट प्रयोग गरेर इपिडिमियोलोजिकल सर्भेक्षण डाटा सङ्कलन गर्दै YWN का फिल्ड अनुसन्धानकर्ताहरू।' }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-ywnTeal text-gray-200 selection:bg-ywnLime selection:text-ywnTeal pb-32 overflow-x-hidden">
      
      {/* BLOCK 1: Field Realities Carousel (Cleaned up, no heavy text) */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-end justify-center pb-12 md:pb-16 border-b-8 border-ywnLime pt-20 md:pt-0">
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <img 
              key={index}
              src={`${import.meta.env.BASE_URL}${slide.img}`} 
              alt="Field Work" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          {/* Lighter overlay so the photos pop more */}
          <div className="absolute inset-0 bg-gradient-to-t from-ywnTeal via-ywnTeal/40 to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl tracking-tight">
            {isNe ? 'युथ फर वर्ल्ड नेपाल' : 'Youth for World Nepal'}
          </h1>
          <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 inline-block max-w-3xl">
            <p className="text-ywnLime font-bold text-xs md:text-lg leading-snug">
              {isNe ? slides[currentSlide].ne : slides[currentSlide].en}
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 2: How It Started (Moved down to its own clean section) */}
      <section className="py-12 md:py-20 bg-ywnTeal text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-ywnLime mb-6 md:mb-8">
            {isNe ? 'हाम्रो सुरुवात' : 'How It Started'}
          </h2>
          <div className="space-y-4 md:space-y-6 text-gray-300 text-sm md:text-xl font-medium leading-relaxed mb-8 md:mb-10">
            <p>{isNe ? 'सन् २००४ (२०६१ वि.सं.) मा स्थापित, युथ फर वर्ल्ड नेपाल (YWN) एउटा सरल तर शक्तिशाली विश्वासका साथ सुरु भएको थियो: ग्रामीण गरिबहरूसँग आत्म-विकासको असीमित क्षमता हुन्छ।' : 'Founded in 2004 (2061 BS), Youth for World Nepal (YWN) began with a simple but powerful belief: that the rural poor possess immense potential for self-development.'}</p>
            <p>{isNe ? 'गरिबी, अशिक्षा, रोग र नागरिक निष्क्रियताका चुनौतीहरू विरुद्ध लड्न हामीले तल्लो तहबाट काम सुरु गर्यौं।' : 'We started as a grassroots effort to combat the interlocking challenges of poverty, ignorance, disease, and civic inertia.'}</p>
            <p>{isNe ? 'आज, हामी ३२ भन्दा बढी जिल्लाहरूमा सञ्चालित एक अग्रणी गैर-सरकारी संस्था हौं, जसले समुदायहरूलाई आफ्नै भविष्यको नेतृत्व गर्न सशक्त बनाइरहेको छ।' : 'Today, we are a leading non-governmental organization operating across 32+ districts, empowering communities to take charge of their own future.'}</p>
          </div>
          <Link to="/projects" className="inline-block bg-ywnLime text-ywnTeal px-8 py-3 md:py-4 rounded-xl font-black text-sm md:text-lg hover:bg-white transition-all shadow-lg">
            {isNe ? 'हाम्रो प्रभाव हेर्नुहोस्' : 'Discover Our Impact'}
          </Link>
        </div>
      </section>

      {/* BLOCK 3: Trust & Registration Bar */}
      <section className="bg-white py-4 md:py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] md:text-sm font-black text-ywnTeal tracking-widest uppercase">
            {isNe 
              ? 'स्थापित २००४ | CDO दर्ता नं: ६२९ | KMC वडा ३१ दर्ता: ३३ | SWC आबद्धता: १८०८५ | दोहोरो लेखा प्रणाली र वार्षिक स्वतन्त्र लेखापरीक्षण' 
              : 'Established 2004 | CDO Regd No: 629 | KMC Ward 31 Regd: 33 | SWC Affiliation: 18085 | Double-Entry Bookkeeping & Audits'}
          </p>
        </div>
      </section>

      {/* BLOCK 4: About Approach */}
      <section className="py-12 md:py-24 bg-ywnLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-ywnTeal mb-4 md:mb-6">
            {isNe ? 'हाम्रो दृष्टिकोण' : 'Our Approach'}
          </h2>
          <p className="text-base md:text-2xl text-gray-700 leading-relaxed font-medium max-w-4xl mx-auto">
            {isNe 
              ? 'हामी सहभागितामूलक विकासमा अधिकारमा आधारित दृष्टिकोण (Rights-based approach) मा विश्वास गर्छौं। विकास कुनै दान होइन; यो आर्थिक, सामाजिक र सांस्कृतिक अधिकार उपभोग गर्न नपाएकाहरूलाई आफ्नो अधिकार दाबी गर्न सक्षम र सशक्त बनाउने प्रक्रिया हो। हामी विश्वव्यापी सोच राख्छौं र स्थानीय स्तरमा काम गर्छौं।' 
              : 'We believe in a rights-based approach to participatory development. Development is not an act of charity; it is a process of enabling and empowering those who are not enjoying their economic, social, and cultural rights to claim them. We think globally and act locally.'}
          </p>
        </div>
      </section>

      {/* BLOCK 5: Quick Impact Metrics */}
      <section className="py-12 md:py-20 border-y border-white/10 bg-ywnTeal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
          <div><div className="text-3xl md:text-6xl font-black text-ywnLime mb-1 md:mb-2">32+</div><p className="text-gray-300 font-bold text-[10px] md:text-sm uppercase tracking-wider">{isNe ? 'जिल्लाहरूमा पहुँच' : 'Districts Reached'}</p></div>
          <div><div className="text-3xl md:text-6xl font-black text-ywnLime mb-1 md:mb-2">81,000+</div><p className="text-gray-300 font-bold text-[10px] md:text-sm uppercase tracking-wider">{isNe ? 'दम्पतिहरू सहभागी' : 'Couples Engaged'}</p></div>
          <div><div className="text-3xl md:text-6xl font-black text-ywnLime mb-1 md:mb-2">15,000+</div><p className="text-gray-300 font-bold text-[10px] md:text-sm uppercase tracking-wider">{isNe ? 'घरधुरीहरू सर्भेक्षण' : 'Households Surveyed'}</p></div>
          <div><div className="text-3xl md:text-6xl font-black text-ywnLime mb-1 md:mb-2">110+</div><p className="text-gray-300 font-bold text-[10px] md:text-sm uppercase tracking-wider">{isNe ? 'सक्रिय विशेषज्ञहरू' : 'Active Members'}</p></div>
        </div>
      </section>

      {/* BLOCK 6: Our Core Pillars */}
      <section className="py-16 md:py-24 bg-white text-ywnTeal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6">{isNe ? 'हाम्रा मुख्य आधारहरू' : 'Our Core Pillars'}</h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              {isNe ? 'हामी सीमान्तकृत समुदायको मानव विकास सूचकांक उकास्न दिगो जीविकोपार्जन, शिक्षा र चेतना, रोकथाममुखी जनस्वास्थ्य, र स्थानीय सुशासनमा केन्द्रित छौं।' : 'We focus on sustainable livelihoods, education and awareness, preventive public health, and local self-governance to elevate the Human Development Index of marginalized populations.'}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="p-4 md:p-8 border-2 border-gray-100 rounded-2xl bg-gray-50 text-center"><BookOpen className="w-8 h-8 md:w-12 md:h-12 mx-auto text-ywnTeal mb-3 md:mb-4" /><h3 className="text-sm md:text-lg font-black">{isNe ? 'शिक्षा र चेतना' : 'Education & Awareness'}</h3></div>
            <div className="p-4 md:p-8 border-2 border-gray-100 rounded-2xl bg-gray-50 text-center"><Sprout className="w-8 h-8 md:w-12 md:h-12 mx-auto text-ywnTeal mb-3 md:mb-4" /><h3 className="text-sm md:text-lg font-black">{isNe ? 'दिगो जीविकोपार्जन' : 'Sustainable Livelihood'}</h3></div>
            <div className="p-4 md:p-8 border-2 border-gray-100 rounded-2xl bg-gray-50 text-center"><HeartPulse className="w-8 h-8 md:w-12 md:h-12 mx-auto text-ywnTeal mb-3 md:mb-4" /><h3 className="text-sm md:text-lg font-black">{isNe ? 'रोकथाममुखी जनस्वास्थ्य' : 'Preventive Public Health'}</h3></div>
            <div className="p-4 md:p-8 border-2 border-gray-100 rounded-2xl bg-gray-50 text-center"><Scale className="w-8 h-8 md:w-12 md:h-12 mx-auto text-ywnTeal mb-3 md:mb-4" /><h3 className="text-sm md:text-lg font-black">{isNe ? 'स्थानीय सुशासन' : 'Local Self-Governance'}</h3></div>
          </div>
        </div>
      </section>

      {/* BLOCK 7 & 8: Our Team & Supporters */}
      <section className="py-12 md:py-24 bg-ywnLight text-ywnTeal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border-l-8 border-ywnTeal">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-ywnLime mb-4" />
            <h3 className="text-xl md:text-2xl font-black mb-3">{isNe ? 'हाम्रो टोली' : 'Our Team'}</h3>
            <p className="text-sm md:text-base text-gray-600 font-medium mb-3 md:mb-4">{isNe ? 'हाम्रो काम जनस्वास्थ्य चिकित्सक, समाजशास्त्री र विकास विशेषज्ञहरूको उच्च समर्पित समूहद्वारा सञ्चालित छ।' : 'Our work is driven by a highly dedicated group of public health physicians, social scientists, and development experts.'}</p>
            <p className="text-sm md:text-base text-gray-600 font-medium">{isNe ? 'एक अनुभवी सल्लाहकार टोली र सक्रिय कार्यकारी समितिको मार्गदर्शनमा, हाम्रो कर्मचारीतन्त्रले मापनयोग्य प्रभाव ल्याउन स्थानीय सरकारहरूसँग मिलेर काम गर्दछ।' : 'Guided by a veteran Advisory Team and a hands-on Executive Board, our staff works closely with local governments to deliver measurable impact.'}</p>
          </div>
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border-l-8 border-ywnLime">
            <Award className="w-8 h-8 md:w-10 md:h-10 text-ywnLime mb-4" />
            <h3 className="text-xl md:text-2xl font-black mb-3">{isNe ? 'हाम्रा समर्थकहरू' : 'Our Supporters'}</h3>
            <p className="text-sm md:text-base text-gray-600 font-medium mb-4 md:mb-6">{isNe ? 'हामी अग्रणी अन्तर्राष्ट्रिय र राष्ट्रिय संस्थाहरूको भरपर्दो कार्यान्वयन साझेदार हुन पाएकोमा गर्व गर्छौं।' : 'We are proud to be a trusted implementing partner for leading international and national organizations.'}</p>
            <p className="text-xs md:text-sm font-bold text-ywnTeal uppercase leading-relaxed bg-gray-100 p-3 md:p-4 rounded-lg">USAID • The Global Fund • JICA • UNICEF • Save the Children • Micronutrient Initiative • RTI International • Government of Nepal</p>
          </div>
        </div>
      </section>

      {/* BLOCK 9 & 10: Signature Project & Where We Work */}
      <section className="py-12 md:py-24 bg-ywnTeal border-t-8 border-ywnLime">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group min-h-[300px] md:min-h-[400px] flex items-end p-6 md:p-10 border border-white/10">
            <img src={`${import.meta.env.BASE_URL}ywn5.png`} alt="Project" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-ywnTeal via-ywnTeal/80 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4">{isNe ? 'मुख्य सम्पन्न परियोजना: स्मार्ट दम्पति अभियान' : 'Signature Past Project: Smart Dampati Campaign'}</h2>
              <p className="text-gray-300 text-xs md:text-base font-medium">
                {isNe ? 'USAID र NHEICC को सहयोगमा, हामीले राष्ट्रव्यापी व्यवहार परिवर्तन अभियान सफलतापूर्वक सञ्चालन गर्यौं, जसमा ८१,००० भन्दा बढी दम्पतिहरूसम्म पुगेर परिवार नियोजन र प्रजनन् स्वास्थ्य सेवाको मागमा क्रान्तिकारी परिवर्तन ल्यायौं।' : 'Supported by USAID and NHEICC, we successfully executed this nationwide behavior change initiative, reaching over 81,000 couples to revolutionize family planning advocacy and demand for reproductive health services.'}
              </p>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group min-h-[300px] md:min-h-[400px] flex items-end p-6 md:p-10 border border-white/10">
            <img src={`${import.meta.env.BASE_URL}ywn6.png`} alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-ywnTeal via-ywnTeal/80 to-transparent"></div>
            <div className="relative z-10">
              <Map className="w-8 h-8 md:w-10 md:h-10 text-ywnLime mb-3 md:mb-4" />
              <h2 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4">{isNe ? 'हाम्रो कार्यक्षेत्र' : 'Where We Work'}</h2>
              <p className="text-gray-300 text-xs md:text-base font-medium mb-2">
                {isNe ? 'नेपालको विविध भौगोलिक परिदृश्यमा सहज रूपमा सञ्चालन हुँदै, YWN ले ३२ भन्दा बढी जिल्लाहरूमा जटिल परियोजनाहरू कार्यान्वयन गरेको छ।' : 'Operating seamlessly across Nepal\'s diverse topographical landscapes, YWN has implemented complex interventions in over 32 districts.'}
              </p>
              <p className="text-gray-300 text-xs md:text-base font-medium">
                {isNe ? 'तराईका फाँटदेखि उच्च हिमाली भेगसम्म, हाम्रो स्थानीय फिल्ड व्यवस्थापनले द्रुत परिचालन र सांस्कृतिक अनुकूलता सुनिश्चित गर्दछ।' : 'From the Terai plains to the high Himalayas, our localized field management ensures rapid deployment and cultural fluency.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 11 & 12: Safeguarding & Financial Transparency */}
      <section className="py-12 md:py-24 bg-white text-ywnTeal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="bg-gray-50 p-6 md:p-10 rounded-2xl shadow-md border-l-4 border-red-500">
            <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-red-500 mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-black mb-2 md:mb-3">{isNe ? 'सुरक्षा नीति (Safeguarding & PSEA)' : 'Safeguarding & PSEA'}</h3>
            <p className="text-sm md:text-base text-gray-600 font-medium mb-2"><strong>{isNe ? 'सम्झौताविहीन नैतिकता।' : 'Uncompromising Ethics.'}</strong> {isNe ? 'हामी बाल दुर्व्यवहार, उत्पीडन, र यौन शोषण (SEA) को सबै रूपहरू विरुद्ध कडा, शून्य-सहनशीलता नीति लागू गर्छौं।' : 'We enforce a strict, zero-tolerance policy against all forms of child abuse, harassment, and Sexual Exploitation and Abuse (SEA).'}</p>
            <p className="text-sm md:text-base text-gray-600 font-medium">{isNe ? 'हामी संयुक्त राष्ट्र संघ (IASC) का छ वटा मुख्य सिद्धान्तहरू र USAID को विस्तृत बाल सुरक्षा मापदण्डहरू पूर्ण रूपमा पालना गर्छौं।' : 'We fully adhere to the UN Inter-Agency Standing Committee (IASC) Six Core Principles and USAID’s comprehensive Child Safeguarding standards.'}</p>
          </div>
          <div className="bg-gray-50 p-6 md:p-10 rounded-2xl shadow-md border-l-4 border-ywnLime">
            <Landmark className="w-8 h-8 md:w-10 md:h-10 text-ywnLime mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-black mb-2 md:mb-3">{isNe ? 'आर्थिक पारदर्शिता' : 'Financial Transparency'}</h3>
            <p className="text-sm md:text-base text-gray-600 font-medium mb-2"><strong>{isNe ? 'आर्थिक इमानदारी।' : 'Fiduciary Integrity.'}</strong> {isNe ? 'YWN ले प्रत्येक डलरको सूक्ष्म ट्र्याकिङ सुनिश्चित गर्दै कडा दोहोरो लेखा प्रणाली मा काम गर्दछ।' : 'YWN operates on a rigorous Double Entry Book Keeping System, ensuring meticulous tracking of every donor dollar.'}</p>
            <p className="text-sm md:text-base text-gray-600 font-medium">{isNe ? 'हामी राष्ट्रिय खरिद ऐन र अन्तर्राष्ट्रिय वित्तीय नियमहरूको कडा अनुपालन सुनिश्चित गर्छौं।' : 'We enforce strict compliance with national procurement laws and international financial regulations.'}</p>
          </div>
        </div>
      </section>

      {/* BLOCK 13: Partner With Us CTA */}
      <section className="py-16 md:py-24 bg-ywnLime text-ywnTeal text-center px-4">
        <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6">{isNe ? 'हामीसँग जोडिनुहोस्' : 'Partner With Us'}</h2>
        <p className="text-sm md:text-xl font-medium max-w-2xl mx-auto mb-6 md:mb-8">
          {isNe ? 'दिगो विकासको लागि सहकार्य गर्न तयार हुनुहुन्छ? चाहे तपाईं स्थानीय समुदायको सदस्य हुनुहुन्छ, सरकारी निकाय, वा अन्तर्राष्ट्रिय दातृ निकाय, साझेदारीका अवसरहरू खोज्न हामीलाई सम्पर्क गर्नुहोस्।' : 'Ready to collaborate for sustainable development? Whether you are a local community member, a government agency, or an international donor, contact us to explore partnership opportunities.'}
        </p>
        <Link to="/contact" className="inline-block bg-ywnTeal text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-black text-sm md:text-lg hover:bg-black transition">{isNe ? 'सम्पर्क गर्नुहोस्' : 'Contact Us Today'}</Link>
      </section>

    </div>
  );
}