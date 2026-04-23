import { useTranslation } from 'react-i18next';
import { ShieldCheck, Users, Target, Eye, Quote } from 'lucide-react';

export default function About() {
  const { t, i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  const advisoryTeam = [
    "Dr. Ramesh Kanta Adhikari", "Dr. Govinda Prasad Ojha", "Dr. Babu Ram Marasini", 
    "Dr. Krishna Kumar Rai", "Mr. Kabi Raj Khanal", "Mr. Kul Prasad Joshi", "Dr. Jairaj Pokharel"
  ];

  const boardTeam = [
    { name: "Mr. Achyut Kumar Ojha", en: "Chairman", ne: "अध्यक्ष (Adhyakshya)" },
    { name: "Mrs. Parbati Paudel", en: "Vice-Chairman", ne: "उपाध्यक्ष (Upadhyakshya)" },
    { name: "Miss Devora Bhattarai", en: "Secretary", ne: "सचिव (Sachiv)" },
    { name: "Mrs. Prijna Pokharel", en: "Treasurer", ne: "कोषाध्यक्ष (Koshadhyakshya)" },
    { name: "Mrs. Dayana Khanal", en: "Member", ne: "सदस्य (Sadasya)" },
    { name: "Mr. Prasant Kaphle", en: "Member", ne: "सदस्य (Sadasya)" },
    { name: "Ms. Srijana Pandey", en: "Member", ne: "सदस्य (Sadasya)" }
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
      
      {/* Banner */}
      <div className="relative text-white py-20 md:py-32 px-4 text-center border-b-4 border-ywnLime flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0"><img src={`${import.meta.env.BASE_URL}ywn40.png`} alt="Banner" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-ywnTeal/85"></div></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-ywnLime mb-4">{isNe ? 'हाम्रो बारेमा' : 'ABOUT US'}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20 space-y-16">
        
        {/* Who We Are & What We Do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl font-black text-ywnLime mb-4">{isNe ? 'हामी को हौं (Who We Are)' : 'Who We Are (History/Overview)'}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">{isNe ? 'युथ फर वर्ल्ड नेपाल (YWN) सकारात्मक सामाजिक रूपान्तरण सिर्जना गर्न समर्पित एक दर्ता प्राप्त गैर-सरकारी, गैर-नाफामूलक, र गैर-राजनीतिक संस्था हो।' : 'Youth for World Nepal (YWN) is a registered non-government, non-profit making, non-political organization dedicated to creating positive social transformation.'}</p>
            <p className="text-gray-300 leading-relaxed">{isNe ? 'CDO दर्ता नं: ६२९ र KMC वडा ३१ दर्ता: ३३ अन्तर्गत स्थापित र SWC आबद्धता: १८०८५ प्राप्त यस संस्थाले विगत दुई दशकदेखि मुख्यतया नेपालभर क्षमता विकास, समुदाय सचेतना, स्वास्थ्य, र शिक्षामा ध्यान केन्द्रित गरेको छ।' : 'Established under CDO Regd No: 629 (2061 BS) and KMC Ward 31 Regd: 33, with SWC Affiliation: 18085, we have spent two decades focusing primarily on capacity building, community sensitization, health, and education across Nepal.'}</p>
          </div>
          <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl font-black text-ywnLime mb-4">{isNe ? 'हामी के गर्छौं (What We Do)' : 'What We Do'}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">{isNe ? 'हामी एकीकृत सामुदायिक विकासका मुद्दाहरूलाई सम्बोधन गर्न स्थानीय र राष्ट्रिय दुवै स्तरमा कार्यक्रमहरू डिजाइन र कार्यान्वयन गर्छौं।' : 'We design and execute programs at both local and national levels addressing integrated community development issues.'}</p>
            <p className="text-gray-300 leading-relaxed">{isNe ? 'ठूला इपिडिमियोलोजिकल सर्भेक्षणहरू सञ्चालन गर्नेदेखि लिएर महिला सामुदायिक स्वास्थ्य स्वयंसेविकाहरू (FCHVs) लाई तालिम दिनेसम्म, हामी अति गरिब र सामाजिक-आर्थिक रूपमा जोखिममा परेकाहरूको भलाइमा प्रत्यक्ष सुधार ल्याउने काम गर्छौं।' : 'From conducting massive epidemiological surveys to training Female Community Health Volunteers (FCHVs), we implement interventions that directly improve the well-being of the ultra-poor and socio-economically vulnerable.'}</p>
          </div>
        </div>

        {/* How & Where */}
        <div className="bg-black/20 p-6 md:p-10 rounded-2xl border border-ywnLime/30">
          <h2 className="text-2xl font-black text-white mb-4">{isNe ? 'हामी कसरी काम गर्छौं र कहाँ गर्छौं' : 'How Do We Work & Where We Do'}</h2>
          <p className="text-gray-300 leading-relaxed mb-4">{isNe ? 'हामी समान विचारधारा भएका संस्थाहरू, संयुक्त राष्ट्र संघका एजेन्सीहरू, द्विपक्षीय संस्थाहरू र सरकारी निकायहरूसँग नजिकको सहकार्यमा काम गर्छौं। कडा वित्तीय पारदर्शिता र शून्य-सहनशीलता सुरक्षा नीतिहरू पालना गरेर, हामी प्रत्येक परियोजना प्रभावकारी र नैतिक रूपमा सम्पन्न भएको सुनिश्चित गर्छौं।' : 'We work in close collaboration with like-minded institutions, UN agencies, bilateral organizations, and government line agencies. By adhering to strict financial transparency and zero-tolerance safeguarding policies, we ensure that every project is executed efficiently and ethically.'}</p>
          <p className="text-ywnLime font-bold">{isNe ? 'हाम्रो कार्यक्षेत्र नेपालको विविध भौगोलिक र सामाजिक-सांस्कृतिक परिदृश्यका ३२ भन्दा बढी जिल्लाहरूमा फैलिएको छ।' : 'Our operational footprint covers over 32 districts across Nepal\'s diverse topographical and socio-cultural landscapes.'}</p>
        </div>

        {/* Working Approach & What We Have Done */}
        <div>
          <h2 className="text-3xl font-black text-ywnLime mb-6 text-center">{isNe ? 'हाम्रो कार्य दृष्टिकोण' : 'Our Working Approach'}</h2>
          <p className="text-center text-gray-300 mb-8">{isNe ? 'हाम्रा परियोजनाहरू ग्रामीण पुनर्निर्माणको चार-आयामिक दृष्टिकोणमा आधारित छन्:' : 'Our projects are based on a four-fold approach to rural reconstruction:'}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/5 p-6 rounded-xl border-t-4 border-blue-400"><h3 className="font-bold text-white mb-2">{isNe ? '१. शिक्षा र चेतना' : 'Education and Awareness'}</h3><p className="text-sm text-gray-400">{isNe ? 'अशिक्षा विरुद्ध लड्न र मानिसहरूलाई आफ्नो अधिकारमा पहुँच पुर्‍याउन सशक्त बनाउन।' : 'To combat illiteracy and empower people to access their rights.'}</p></div>
            <div className="bg-white/5 p-6 rounded-xl border-t-4 border-green-400"><h3 className="font-bold text-white mb-2">{isNe ? '२. दिगो जीविकोपार्जन' : 'Sustainable Livelihood'}</h3><p className="text-sm text-gray-400">{isNe ? 'दिगो कृषि, सामाजिक वन, र ग्रामीण लघुवित्त मार्फत गरिबी विरुद्ध लड्न।' : 'To fight poverty through sustainable agriculture, social forestry, and rural microfinance.'}</p></div>
            <div className="bg-white/5 p-6 rounded-xl border-t-4 border-red-400"><h3 className="font-bold text-white mb-2">{isNe ? '३. स्वास्थ्य' : 'Health'}</h3><p className="text-sm text-gray-400">{isNe ? 'समुदायहरूमा गुणस्तरीय रोकथाममुखी स्वास्थ्य सेवा, मातृ पोषण, र रोग नियन्त्रण पुर्‍याउन।' : 'To bring quality preventive health services, maternal nutrition, and disease control to communities.'}</p></div>
            <div className="bg-white/5 p-6 rounded-xl border-t-4 border-yellow-400"><h3 className="font-bold text-white mb-2">{isNe ? '४. सुशासन' : 'Self-Governance'}</h3><p className="text-sm text-gray-400">{isNe ? 'नागरिक निष्क्रियतालाई हटाउन र लोकतान्त्रिक निर्णय प्रक्रियालाई प्रोत्साहित गर्न।' : 'To overcome civic inertia and encourage democratic decision-making.'}</p></div>
          </div>
          <div className="bg-ywnTeal border-l-4 border-ywnLime p-6 rounded-r-xl shadow-md">
            <h3 className="text-xl font-bold text-white mb-2">{isNe ? 'हामीले के गर्यौं' : 'What We Have Done'}</h3>
            <p className="text-gray-300 text-sm md:text-base">{isNe ? 'विगत दुई दशकमा, प्रजनन् स्वास्थ्य सम्बन्धी वकालत मार्फत ८१,००० भन्दा बढी दम्पतिहरूसम्म पुग्ने, राष्ट्रव्यापी रोग नियन्त्रण कार्यक्रमहरूको लागि १५,००० भन्दा बढी घरधुरीको सर्भेक्षण गर्ने, र हजारौं स्वास्थ्यकर्मीहरूलाई तालिम दिने काम हामीले गरेका छौं।' : 'Over the last two decades, our impact includes reaching over 81,000 couples through reproductive health advocacy, surveying over 15,000 households for nationwide disease control programs, and training thousands of health workers.'}</p>
          </div>
        </div>

        {/* Mission, Vision & Chairman Message */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="bg-white/5 p-6 md:p-8 rounded-2xl border-t-4 border-ywnLime shadow-xl">
              <Target className="w-10 h-10 text-ywnLime mb-4" />
              <h2 className="text-xl md:text-2xl font-black text-white mb-3">{isNe ? 'हाम्रो मिसन (Mission) र लक्ष्य (Goal)' : 'Our Mission & Goal'}</h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3"><strong>{isNe ? 'मिसन:' : 'Mission:'}</strong> {isNe ? 'YWN ले नेपालका सीमान्तकृत समुदायहरूको जीवनस्तर उकास्न युवा, सरकार र अन्य सरोकारवालाहरूसँग मिलेर काम गर्दछ।' : 'YWN works closely with youths, governments, and other concerned stakeholders to promote the quality of life of the disadvantaged community of Nepal.'}</p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>{isNe ? 'लक्ष्य:' : 'Goal:'}</strong> {isNe ? 'मानिसहरूको आधारभूत जीवनस्तर कायम राख्न सहयोग पुर्‍याउने र समृद्ध समुदायहरू निर्माण गर्ने मार्गहरू तयार गर्ने।' : 'To enhance and support the maintenance of a basic quality of life for people and architect pathways to build prosperous communities.'}</p>
            </div>
            <div className="bg-white/5 p-6 md:p-8 rounded-2xl border-t-4 border-ywnLime shadow-xl">
              <Eye className="w-10 h-10 text-ywnLime mb-4" />
              <h2 className="text-xl md:text-2xl font-black text-white mb-3">{isNe ? 'दृष्टिकोण र रणनीति' : 'Vision & Strategy'}</h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3"><strong>{isNe ? 'दृष्टिकोण:' : 'Vision:'}</strong> {isNe ? 'YWN ले सबै विपन्न व्यक्ति तथा समुदायहरूले राम्रो जीवनस्तर, सेवाहरूमा पहुँच र सम्मानलाई आफ्नो अधिकारको रूपमा प्राप्त गरून् भन्ने परिकल्पना गर्दछ।' : 'YWN envisions that all underprivileged persons and/or communities live with a better quality of life, access to services, and dignity as their rights.'}</p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>{isNe ? 'रणनीतिक उद्देश्यहरू:' : 'Strategic Objectives:'}</strong> {isNe ? 'जनस्वास्थ्य कार्यक्रमहरू डिजाइन गर्ने, कार्यमूलक अनुसन्धान गर्ने, सामुदायिक स्वास्थ्यकर्मीहरूलाई सहयोग गर्ने, र विशेषज्ञ परामर्श सेवाहरू प्रदान गर्ने।' : 'Design public health programs, carry out action-oriented research, support community health workers, and provide expert consultancy services.'}</p>
            </div>
          </div>

          <div className="bg-ywnLime text-ywnTeal rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden group">
            <Quote className="absolute top-6 right-8 w-24 h-24 text-ywnTeal opacity-10 group-hover:scale-110 transition duration-500" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black mb-4">{isNe ? 'अध्यक्षको सन्देश' : 'Message from the Chairman'}</h2>
              <p className="text-base md:text-lg font-medium leading-relaxed mb-6 max-w-4xl italic">
                {isNe ? '"विगत दुई दशकदेखि, युथ फर वर्ल्ड नेपालले सीमान्तकृत समुदायको उत्थानमा निरन्तर काम गर्दै आएको छ। हाम्रो सफलताको श्रेय हाम्रा समर्पित कर्मचारी, दातृ निकाय र स्थानीय जनसमुदायलाई जान्छ।"' : '"For over two decades, Youth for World Nepal has been relentlessly working to uplift marginalized communities. Our success is a testament to our dedicated staff, our generous donors, and the resilient local communities we serve."'}
              </p>
              <p className="font-black text-xl md:text-2xl">— Mr. Achyut Kumar Ojha</p>
              <p className="font-bold text-xs md:text-sm uppercase tracking-wider">{isNe ? 'अध्यक्ष' : 'Chairman'}</p>
            </div>
          </div>
        </div>

        {/* Organizational Structure */}
        <div className="text-center bg-black/20 p-6 rounded-xl">
          <h2 className="text-2xl font-black text-ywnLime mb-3">{isNe ? 'संस्थागत संरचना' : 'Organizational Structure'}</h2>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto">{isNe ? 'YWN साधारण सभाद्वारा सञ्चालित छ, जसले कार्यकारी समिति चयन गर्दछ। काठमाडौंस्थित केन्द्रीय कार्यालयले तीनवटा विशेष शाखाहरू सञ्चालन गर्दछ: वित्त तथा सामान्य प्रशासन, कार्यक्रम शाखा, र विकास अध्ययन तथा नीति वकालत केन्द्र।' : 'YWN is governed by a General Assembly, which elects the Executive Committee. The Central Office in Kathmandu orchestrates three specialized divisions: Finance and General Administration, the Program Division, and the Center for Development Studies and Policy Advocacy.'}</p>
        </div>

        {/* TEAM SECTIONS */}
        <div className="border-t border-white/10 pt-16">
          <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-12 uppercase tracking-wide">{isNe ? 'व्यवस्थापन र कर्मचारी' : 'Management and Staff'}</h2>
          
          {/* 1. Advisory Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-black text-ywnLime mb-6 text-center">{isNe ? '१. सल्लाहकार टोली' : '1. Advisory Team'}</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {advisoryTeam.map((name, i) => (
                <div key={i} className="bg-white/5 border border-white/10 px-4 md:px-6 py-2 md:py-3 rounded-full text-white text-sm md:text-base font-medium">{name}</div>
              ))}
            </div>
          </div>

          {/* 2. Board of Directors */}
          <div className="mb-16">
            <h3 className="text-2xl font-black text-ywnLime mb-6 text-center">{isNe ? '२. कार्य-समिति' : '2. Board of Directors'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {boardTeam.map((member, i) => (
                <div key={i} className="bg-white/5 rounded-xl border border-white/10 p-4 md:p-6 text-center hover:border-ywnLime transition">
                  <Users className="w-8 h-8 md:w-10 md:h-10 mx-auto text-ywnLime opacity-50 mb-3" />
                  <h4 className="font-black text-base md:text-lg text-white mb-2">{member.name}</h4>
                  <span className="bg-ywnLime text-ywnTeal px-2 py-1 rounded text-[10px] md:text-xs font-bold uppercase">{isNe ? member.ne : member.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Executive Team */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-ywnLime rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
              <ShieldCheck className="absolute -right-5 -bottom-5 w-48 h-48 text-ywnTeal opacity-10" />
              <h3 className="text-2xl font-black text-ywnTeal mb-6 text-center relative z-10">{isNe ? '३. व्यवस्थापन टोली' : '3. Executive Team'}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative z-10">
                {executiveTeam.map((member, i) => (
                  <div key={i} className="bg-ywnTeal p-4 md:p-6 rounded-xl border border-white/20">
                    <h4 className="font-black text-lg md:text-xl text-ywnLime mb-1">{member.name}</h4>
                    <p className="text-white text-xs md:text-sm font-bold opacity-80">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}