import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const images = [
  {
    src: "https://i.ibb.co/1Gj7xmwV/Chat-GPT-Image-3-ao-t-2026-00-18-57.png",
    fallback: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200",
    alt: "Parure de lit Mauve / Lavande",
    span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
  },
  {
    src: "https://i.ibb.co/QvTWFGBG/Chat-GPT-Image-2-ao-t-2026-23-11-41.png",
    fallback: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200",
    alt: "Parure de lit Taupe",
    span: "col-span-1 row-span-2 md:col-span-1 md:row-span-2"
  },
  {
    src: "https://i.ibb.co/cXFMy0L5/Chat-GPT-Image-2-ao-t-2026-23-05-13.png",
    fallback: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
    alt: "Parure de lit Ivoire (Ivory)",
    span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1"
  },
  {
    src: "https://i.ibb.co/1tk6SFPy/Chat-GPT-Image-3-ao-t-2026-00-18-50.png",
    fallback: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800",
    alt: "Détails Parure Mauve",
    span: "col-span-2 row-span-1 md:col-span-2 md:row-span-1"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-32 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-brand-text"
          >
            Galerie de Style de Vie
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-text/70"
          >
            Découvrez comment notre literie de luxe transforme de vrais espaces.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group ${img.span} ${index === 0 ? 'col-span-2 md:col-span-2' : ''}`}
              onClick={() => setSelectedImage(img.fallback)} // using fallback for lightbox to ensure it loads
            >
              <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/10 transition-colors duration-500 z-10"></div>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = img.fallback;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-text/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
