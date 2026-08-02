import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const comparisonData = [
  { feature: "Tissu Doux", ours: true, others: false, othersLabel: "Polyester Bon Marché" },
  { feature: "Résistant à la Décoloration", ours: true, others: false },
  { feature: "Finition de Luxe", ours: true, others: false },
  { feature: "Confort d'Hôtel", ours: true, others: false }
];

export default function Comparison() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-brand-text"
          >
            Voyez la Différence
          </motion.h2>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
            Pourquoi vous contenter de moins quand vous pouvez vivre le vrai luxe ?
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-bg rounded-3xl overflow-hidden shadow-sm border border-brand-primary/20"
        >
          <div className="grid grid-cols-3 bg-brand-primary/10 p-6 sm:p-8 border-b border-brand-primary/20">
            <div className="col-span-1">
              <span className="font-serif font-bold text-lg text-brand-text/50">Caractéristique</span>
            </div>
            <div className="col-span-1 text-center">
              <span className="font-serif font-bold text-xl text-brand-text">Notre Produit</span>
            </div>
            <div className="col-span-1 text-center">
              <span className="font-serif font-bold text-lg text-brand-text/50">Autre Literie</span>
            </div>
          </div>

          <div className="divide-y divide-brand-primary/10">
            {comparisonData.map((row, index) => (
              <div key={index} className="grid grid-cols-3 p-6 sm:p-8 items-center hover:bg-white/50 transition-colors">
                <div className="col-span-1">
                  <span className="font-medium text-brand-text">{row.feature}</span>
                </div>
                <div className="col-span-1 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-1">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  {row.othersLabel && (
                    <span className="text-xs text-brand-text/50 font-medium">{row.othersLabel}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
