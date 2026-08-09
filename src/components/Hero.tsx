import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const images = [
  {
    src: "https://i.ibb.co/1Gj7xmwV/Chat-GPT-Image-3-ao-t-2026-00-18-57.png",
    alt: "Mauve / Lavande"
  },
  {
    src: "https://i.ibb.co/QvTWFGBG/Chat-GPT-Image-2-ao-t-2026-23-11-41.png",
    alt: "Taupe"
  },
  {
    src: "https://i.ibb.co/cXFMy0L5/Chat-GPT-Image-2-ao-t-2026-23-05-13.png",
    alt: "Ivoire (Ivory)"
  },
  {
    src: "https://i.ibb.co/1tk6SFPy/Chat-GPT-Image-3-ao-t-2026-00-18-50.png",
    alt: "Détails Mauve"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-brand-bg">
          <motion.img
            src="https://i.ibb.co/cXFMy0L5/Chat-GPT-Image-2-ao-t-2026-23-05-13.png"
            alt="Parure de lit de luxe 4 pièces"
            className="w-full h-full object-cover"
            animate={{
              scale: [1.05, 1.15, 1.05],
              x: ["0%", "-1%", "0%"],
              y: ["0%", "1%", "0%"]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200";
            }}
          />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-brand-primary/20 text-brand-secondary text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-brand-secondary" />
              <span>Qualité Premium</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-brand-text drop-shadow-sm">
              Transformez Votre Chambre en une Expérience d'Hôtel de Luxe
            </h1>
            
            <div className="relative max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-2xl font-semibold drop-shadow-md">{images[currentIndex].alt}</h3>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-8 bg-white' : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <p className="text-lg text-brand-text/90 mb-8 leading-relaxed max-w-xl font-medium">
              Vivez un confort exceptionnel avec notre parure de lit 4 pièces premium. Tissu en microfibre doux, design élégant et finition de qualité hôtelière pour rendre chaque nuit luxueuse.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-10">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-brand-text">279 DH</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg text-brand-text/70 line-through">399 DH</span>
                  <span className="text-sm font-medium text-green-800 bg-green-100/90 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm">Économisez 120 DH</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#order-form"
                className="inline-flex justify-center items-center gap-2 bg-brand-text text-white px-8 py-4 rounded-full font-medium hover:bg-brand-secondary transition-colors duration-300 shadow-lg shadow-brand-text/20"
              >
                Commander
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#details"
                className="inline-flex justify-center items-center gap-2 bg-white/90 backdrop-blur-md text-brand-text border border-brand-primary/30 px-8 py-4 rounded-full font-medium hover:bg-white transition-all duration-300 shadow-sm"
              >
                Voir les Détails
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-brand-text/80">
              <div className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/40">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-700" />
                </div>
                Paiement à la Livraison
              </div>
              <div className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/40">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-700" />
                </div>
                Livraison Gratuite
              </div>
              <div className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/40">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-700" />
                </div>
                Fabriqué au Portugal
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
