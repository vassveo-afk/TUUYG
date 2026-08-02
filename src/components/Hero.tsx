import { motion } from 'motion/react';
import { ArrowRight, Check, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/20 text-brand-secondary text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-brand-secondary" />
              <span>Qualité Premium</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-brand-text">
              Transformez Votre Chambre en une Expérience d'Hôtel de Luxe
            </h1>
            <p className="text-lg text-brand-text/80 mb-8 leading-relaxed max-w-xl">
              Vivez un confort exceptionnel avec notre parure de lit 4 pièces premium. Tissu en microfibre doux, design élégant et finition de qualité hôtelière pour rendre chaque nuit luxueuse.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-10">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-brand-text">299 DH</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg text-brand-text/50 line-through">399 DH</span>
                  <span className="text-sm font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded">Économisez 100 DH</span>
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
                className="inline-flex justify-center items-center gap-2 bg-white text-brand-text border border-brand-primary/30 px-8 py-4 rounded-full font-medium hover:bg-brand-bg transition-colors duration-300"
              >
                Voir les Détails
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-brand-text/70">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-700" />
                </div>
                Paiement à la Livraison
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-700" />
                </div>
                Livraison Gratuite
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-700" />
                </div>
                Fabriqué au Portugal
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto"
          >
            <div className="absolute inset-0 bg-brand-primary/20 rounded-3xl transform rotate-3 scale-105 -z-10 blur-xl"></div>
            <div className="absolute inset-0 bg-brand-secondary/10 rounded-3xl transform -rotate-2 scale-105 -z-10"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
              <img
                src="https://i.ibb.co/cXFMy0L5/Chat-GPT-Image-2-ao-t-2026-23-05-13.png"
                alt="Luxury 4-Piece Bedding Set"
                className="w-full h-auto object-cover rounded-2xl aspect-[4/5]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
