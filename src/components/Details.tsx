import { motion } from 'motion/react';
import { Package, Heart, Sparkles, CheckCircle } from 'lucide-react';

const detailsList = [
  "Parure de lit 4 pièces",
  "Microfibre premium",
  "Confort d'hôtel",
  "Lavable en machine",
  "Imprimé élégant",
  "Cadeau parfait",
  "Qualité du Portugal"
];

export default function Details() {
  return (
    <section className="py-20 md:py-32 bg-brand-primary/5 relative overflow-hidden" id="details">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 -skew-x-12 transform origin-top hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-text">
              Une Qualité Sans Compromis dans Chaque Détail
            </h2>
            <p className="text-lg text-brand-text/70 mb-10 leading-relaxed">
              Nous pensons que votre chambre doit être un sanctuaire. C'est pourquoi chaque élément de notre parure de lit est soigneusement conçu et minutieusement fabriqué pour offrir un confort inégalé et un style intemporel.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {detailsList.map((detail, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-brand-text font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-brand-secondary" />
                  </div>
                  {detail}
                </motion.div>
              ))}
            </div>

              <div className="mt-12 space-y-4">
                <div className="p-6 bg-white rounded-2xl shadow-lg border border-brand-primary/20 flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg mb-1">Que contient la boîte ?</h4>
                    <p className="text-brand-text/70 text-sm">Votre commande comprend 1 housse de couette, 1 drap plat et 2 taies d'oreiller assorties, joliment emballés.</p>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg border border-brand-primary/20 flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg mb-1">Dimensions disponibles (Taille)</h4>
                    <ul className="text-brand-text/70 text-sm space-y-1 list-disc list-inside">
                      <li>140 × 200 cm</li>
                      <li>160 × 200 cm</li>
                      <li>Standard</li>
                    </ul>
                  </div>
                </div>
              </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-brand-primary/20 rounded-[2.5rem] transform rotate-3 scale-105 -z-10"></div>
             <img 
               src="https://i.ibb.co/n8Qm1cM4/Chat-GPT-Image-2-ao-t-2026-23-10-02.png" 
               alt="Détails du Tissu" 
               className="w-full h-auto rounded-[2.5rem] shadow-2xl object-cover aspect-square"
               loading="lazy"
               onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800";
               }}
             />
             
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-primary/10 max-w-xs animate-bounce-slow hidden sm:block">
               <div className="flex items-center gap-3 mb-2">
                 <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                 <span className="font-bold text-brand-text">Apprécié par plus de 10 000 personnes</span>
               </div>
               <p className="text-sm text-brand-text/70">Nos clients à travers le Maroc dorment mieux avec notre literie.</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
