import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Sprout, HeartPulse, Scale, ShieldCheck, 
  Landmark, Users, FileText, Map, Award, Quote, Image as ImageIcon
} from 'lucide-react';

export default function Home() {
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  return (
    <div className="bg-ywnTeal text-gray-200 selection:bg-ywnLime selection:text-ywnTeal pb-32 overflow-x-hidden">
      
      {/* BLOCK 1: Hero Section (Dark & Heavy) */}
      <section className="relative h-[85vh] flex items-center border-b-8 border-ywnLime">
        <div className="absolute inset-0 z-0">
          <img 
  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Nepali Community" 
  className="w-full h-full object-cover" 
/>
          <div className="absolute inset-0 bg-ywnTeal/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight max-w-4xl">
            {isNe ? 'समुदायको सशक्तीकरण। जीवनमा रूपान्तरण।' : 'Empowering Communities. Transforming Lives.'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            {isNe 
              ? 'युथ फर वर्ल्ड नेपाल ले ग्रामीण नेपालभर गरिबी निवारण, स्वास्थ्यमा सुधार, र स्थानीय नेतृत्वलाई प्रोत्साहित गर्न समुदायहरूसँग प्रत्यक्ष रूपमा काम गर्दछ।' 
              : 'Youth for World Nepal (YWN) works directly with communities to build sustainable ways out of poverty, improve health, and encourage local leadership across rural Nepal.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/programs" className="bg-ywnLime text-ywnTeal px-10 py-5 rounded-xl font-black text-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(225,255,81,0.3)] text-center">
              {isNe ? 'हाम्रो प्रभाव हेर्नुहोस्' : 'Discover Our Impact'}
            </Link>
            <Link to="/contact" className="bg-transparent border-4 border-ywnLime text-ywnLime px-10 py-5 rounded-xl font-black text-xl hover:bg-ywnLime hover:text-ywnTeal transition-all text-center">
              {isNe ? 'हामीसँग साझेदारी गर्नुहोस्' : 'Partner With Us'}
            </Link>
          </div>
        </div>
      </section>

      {/* BLOCK 2: Trust & Registration Bar */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm md:text-base font-black text-ywnTeal tracking-widest uppercase">
            {isNe 
              ? 'स्थापित २००४ | CDO दर्ता नं: ७२५/२००४ | SWC आबद्धता: १८०८५' 
              : 'Established 2004 | CDO Regd No: 725/2004 | SWC Affiliation: 18085'}
          </p>
        </div>
      </section>

      {/* BLOCK 3: Our Core Philosophy */}
      <section className="py-24 bg-ywnLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-ywnTeal mb-6">
                {isNe ? 'विश्वव्यापी सोचौं, स्थानीय स्तरमा काम गरौं।' : 'Think Globally, Act Locally.'}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                {isNe 
                  ? '२००४ देखि, हामीले ग्रामीण समुदायहरूसँग आफ्नो विकास आफैं गर्न सक्ने क्षमता हुन्छ भन्ने विश्वास गर्दै आएका छौं। उनीहरूलाई दान मात्र होइन, अवसरको आवश्यकता छ। हामी सीमान्तकृत समूहहरूसँग उनीहरूको अधिकार दाबी गर्न, स्वास्थ्य सुधार गर्न र आफ्नै समुदायको विकासको नेतृत्व गर्न मद्दत गर्छौं।' 
                  : 'Since 2004, we have believed that rural communities have the power to develop themselves. They don\'t just need charity; they need opportunity. We work with marginalized groups to help them claim their rights, improve their health, and lead their own community development.'}
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-ywnLime translate-x-4 translate-y-4 rounded-2xl"></div>
              <img 
  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
  alt="Community" 
  className="relative z-10 rounded-2xl shadow-2xl" 
/>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 4: Impact in Numbers */}
      <section className="py-20 border-y border-white/10 bg-ywnTeal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-black text-ywnLime mb-2">32+</div>
            <p className="text-gray-300 font-bold uppercase tracking-wider">{isNe ? 'जिल्लाहरूमा पहुँच' : 'Districts Reached'}</p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black text-ywnLime mb-2">81,000+</div>
            <p className="text-gray-300 font-bold uppercase tracking-wider">{isNe ? 'दम्पतिहरू सहभागी' : 'Couples Engaged'}</p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black text-ywnLime mb-2">15,000+</div>
            <p className="text-gray-300 font-bold uppercase tracking-wider">{isNe ? 'घरधुरीहरू सर्भेक्षण' : 'Households Surveyed'}</p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black text-ywnLime mb-2">110+</div>
            <p className="text-gray-300 font-bold uppercase tracking-wider">{isNe ? 'सक्रिय विशेषज्ञहरू' : 'Active Experts'}</p>
          </div>
        </div>
      </section>

      {/* BLOCK 5: What We Do (Programs) */}
      <section className="py-24 bg-white text-ywnTeal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">{isNe ? 'हाम्रा कार्यक्रमहरू' : 'What We Do'}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              {isNe ? 'हामी ग्रामीण विकासका लागि चार मुख्य क्षेत्रहरूमा एकीकृत रूपमा काम गर्छौं:' : 'We take a combined approach to rural development in four main areas:'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border-2 border-gray-100 rounded-2xl hover:border-ywnLime transition-all bg-gray-50">
              <BookOpen className="w-12 h-12 text-ywnTeal mb-6" />
              <h3 className="text-xl font-black mb-3">{isNe ? '१. शिक्षा र चेतना' : 'Education & Awareness'}</h3>
              <p className="text-gray-600">{isNe ? 'मानिसहरूलाई उनीहरूको आधारभूत अधिकारहरू बुझ्न र दाबी गर्न मद्दत गर्ने।' : 'Helping people understand and claim their basic rights.'}</p>
            </div>
            <div className="p-8 border-2 border-gray-100 rounded-2xl hover:border-ywnLime transition-all bg-gray-50">
              <Sprout className="w-12 h-12 text-ywnTeal mb-6" />
              <h3 className="text-xl font-black mb-3">{isNe ? '२. दिगो जीविकोपार्जन' : 'Sustainable Livelihood'}</h3>
              <p className="text-gray-600">{isNe ? 'आय आर्जन बढाउन जलवायु-अनुकूल कृषि र स्थानीय लघुवित्तलाई बढावा दिने।' : 'Supporting smart agriculture and local microfinance to boost incomes.'}</p>
            </div>
            <div className="p-8 border-2 border-ywnLime rounded-2xl bg-ywnTeal text-white shadow-xl">
              <HeartPulse className="w-12 h-12 text-ywnLime mb-6" />
              <h3 className="text-xl font-black mb-3 text-ywnLime">{isNe ? '३. जनस्वास्थ्य' : 'Public Health'}</h3>
              <p className="text-gray-300">{isNe ? 'रोकथाममुखी स्वास्थ्य सेवा, मातृ स्वास्थ्य, र स्वयंसेविकाहरूको तालिममा ध्यान।' : 'Focusing on preventive care, maternal health, and training FCHVs.'}</p>
            </div>
            <div className="p-8 border-2 border-gray-100 rounded-2xl hover:border-ywnLime transition-all bg-gray-50">
              <Scale className="w-12 h-12 text-ywnTeal mb-6" />
              <h3 className="text-xl font-black mb-3">{isNe ? '४. सुशासन' : 'Self-Governance'}</h3>
              <p className="text-gray-600">{isNe ? 'स्थानीय नागरिकहरूलाई लोकतान्त्रिक निर्णय प्रक्रियामा भाग लिन प्रोत्साहित गर्ने।' : 'Encouraging local people to take part in democratic decision-making.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 6 & 7: Featured Project & Where We Work (IMAGE HEAVY) */}
      <section className="py-24 bg-ywnTeal border-t-8 border-ywnLime">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Project Card with BG Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group min-h-[400px] flex items-end p-10 border-4 border-ywnTeal hover:border-ywnLime transition-all">
              <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3" alt="Health" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ywnTeal via-ywnTeal/80 to-transparent"></div>
              <div className="relative z-10">
                <Award className="w-12 h-12 text-ywnLime mb-4" />
                <h2 className="text-3xl font-black text-white mb-4">{isNe ? 'स्मार्ट दम्पति अभियान' : 'Smart Dampati Campaign'}</h2>
                <p className="text-gray-300 font-medium mb-6">
                  {isNe ? 'युएसएड र NHEICC को सहयोगमा ८१,०००+ दम्पतिहरूसम्म पहुँच।' : 'Reached 81,000+ couples supported by USAID.'}
                </p>
                <Link to="/projects" className="bg-ywnLime text-ywnTeal px-6 py-2 rounded font-bold">{isNe ? 'विवरण हेर्नुहोस्' : 'View Details'}</Link>
              </div>
            </div>
            
            {/* Location Card with BG Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group min-h-[400px] flex items-end p-10 border-4 border-ywnTeal hover:border-ywnLime transition-all">
              <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3" alt="Map" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ywnTeal via-ywnTeal/80 to-transparent"></div>
              <div className="relative z-10">
                <Map className="w-12 h-12 text-ywnLime mb-4" />
                <h2 className="text-3xl font-black text-white mb-4">{isNe ? '३२+ जिल्लाहरूमा पहुँच' : 'National Reach: 32+ Districts'}</h2>
                <p className="text-gray-300 font-medium">
                  {isNe ? 'तराईदेखि उच्च हिमाली भेगसम्म प्रमाणित अनुभव।' : 'Proven expertise from the Terai to the high Himalayas.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCKS 8-11: Institutional Trust Grid */}
      <section className="py-24 bg-ywnLight text-ywnTeal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-ywnTeal hover:-translate-y-1 transition">
              <Users className="w-10 h-10 text-ywnLime mb-4" />
              <h3 className="text-2xl font-black mb-3">{isNe ? 'विशेषज्ञहरूद्वारा निर्देशित' : 'Guided by Experts'}</h3>
              <p className="text-gray-600 font-medium">{isNe ? 'हामीलाई उत्कृष्ट जनस्वास्थ्य चिकित्सकहरू र स्वास्थ्य मन्त्रालयका पूर्व विशेषज्ञहरूले मार्गदर्शन गर्छन्।' : 'Guided by elite public health doctors, epidemiologists, and former Ministry of Health experts.'}</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-red-500 hover:-translate-y-1 transition">
              <ShieldCheck className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-2xl font-black mb-3">{isNe ? 'दुर्व्यवहारप्रति शून्य सहनशीलता' : 'Zero Tolerance for Abuse'}</h3>
              <p className="text-gray-600 font-medium">{isNe ? 'हामी PSEA र बाल सुरक्षाका लागि USAID र संयुक्त राष्ट्र संघका दिशानिर्देशहरू कडाइका साथ पालना गर्छौं।' : 'We strictly follow USAID and UN guidelines for Protection from Sexual Exploitation and Abuse (PSEA).'}</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-ywnLime hover:-translate-y-1 transition">
              <Landmark className="w-10 h-10 text-ywnLime mb-4" />
              <h3 className="text-2xl font-black mb-3">{isNe ? 'आर्थिक पारदर्शिता' : 'Financial Transparency'}</h3>
              <p className="text-gray-600 font-medium">{isNe ? 'हामी कडा दोहोरो लेखा प्रणाली प्रयोग गर्छौं र प्रत्येक वर्ष स्वतन्त्र लेखापरीक्षण गराउँछौं।' : 'We use a strict Double Entry Book Keeping System and are audited independently every year.'}</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-ywnTeal hover:-translate-y-1 transition">
              <FileText className="w-10 h-10 text-ywnLime mb-4" />
              <h3 className="text-2xl font-black mb-3">{isNe ? 'स्थानीय नेतृत्वको प्रवर्द्धन' : 'Locally-Led Development'}</h3>
              <p className="text-gray-600 font-medium">{isNe ? 'हामी अन्तर्राष्ट्रिय दातृ निकायहरूसँग मुख्य कार्यान्वयनकर्ताको रूपमा सीधै साझेदारी गर्न तयार छौं।' : 'We are ready to partner directly with international donors as a prime implementer.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 12: Photo Collage Grid */}
      <section className="py-24 bg-white border-t-8 border-ywnLime">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ImageIcon className="w-16 h-16 mx-auto text-ywnTeal mb-4" />
            <h2 className="text-4xl font-black text-ywnTeal mb-4">
              {isNe ? 'कार्यक्षेत्रका झलकहरू' : 'Field Work in Action'}
            </h2>
            <Link to="/gallery" className="text-ywnTeal font-bold underline hover:text-ywnLime">
              {isNe ? 'पूर्ण मिडिया ग्यालरी हेर्नुहोस्' : 'View Full Media Gallery'}
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
            <img src={`${import.meta.env.BASE_URL}ywn26.png`} alt="Gallery 1" className="w-full h-full object-cover rounded-xl shadow-md" />
            <img src={`${import.meta.env.BASE_URL}ywn27.png`} alt="Gallery 2" className="w-full h-full object-cover rounded-xl shadow-md" />
            <img src={`${import.meta.env.BASE_URL}ywn28.png`} alt="Gallery 3" className="w-full h-full object-cover rounded-xl shadow-md hidden md:block" />
            <img src={`${import.meta.env.BASE_URL}ywn29.png`} alt="Gallery 4" className="w-full h-full object-cover rounded-xl shadow-md hidden md:block" />
          </div>
        </div>
      </section>

      {/* BLOCK 13: Community Voices / Testimonial */}
      <section className="py-24 bg-ywnLime text-ywnTeal text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Quote className="w-20 h-20 mx-auto text-ywnTeal opacity-20 mb-6" />
          <p className="text-3xl md:text-4xl font-black leading-tight mb-8">
            {isNe 
              ? '"हाम्रा महिला सामुदायिक स्वास्थ्य स्वयंसेविकाहरूलाई YWN ले दिएको तालिमले हाम्रो नगरपालिकाले मातृ स्वास्थ्यलाई हेर्ने दृष्टिकोण नै परिवर्तन गर्‍यो। उनीहरूले हामीलाई दीर्घकालीन सीपहरू दिएर गएका छन्।"' 
              : '"YWN’s training for our Female Community Health Volunteers changed how our municipality handles maternal health. They left us with skills that will last."'}
          </p>
          <p className="text-xl font-bold uppercase tracking-widest">— District Public Health Officer</p>
        </div>
      </section>

    </div>
  );
}