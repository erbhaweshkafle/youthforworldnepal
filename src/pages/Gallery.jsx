import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { i18n } = useTranslation();
  const isNe = i18n.language === 'ne';

  // Array of 15 local image paths
  const localImages = Array.from({ length: 15 }, (_, i) => `${import.meta.env.BASE_URL}ywn${i + 11}.png`);

  return (
    <div className="bg-ywnTeal min-h-screen pb-32">
      <div className="relative text-white py-32 px-4 text-center border-b-8 border-ywnLime flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ywnTeal/85"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-ywnLime mb-4">{isNe ? 'हाम्रो ग्यालरी' : 'Field Gallery'}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {localImages.map((src, index) => (
            <div key={index} className="group overflow-hidden rounded-xl shadow-2xl bg-black/40 border border-white/10">
              <img src={src} alt={`Field Work ${index}`} className="w-full h-64 object-cover transform group-hover:scale-110 opacity-90 group-hover:opacity-100 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}