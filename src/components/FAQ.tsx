import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Le paiement à la livraison est-il disponible ?",
    answer: "Oui ! Nous offrons un paiement à la livraison à 100 % dans tout le Maroc. Vous ne payez que lorsque vous recevez votre commande."
  },
  {
    question: "Combien de pièces sont incluses ?",
    answer: "La parure comprend 4 pièces : 1 housse de couette, 1 drap plat et 2 taies d'oreiller assorties."
  },
  {
    question: "Est-ce lavable en machine ?",
    answer: "Absolument. Notre microfibre premium est entièrement lavable en machine. Nous recommandons un lavage à l'eau froide et un séchage à basse température pour de meilleurs résultats."
  },
  {
    question: "Combien de temps dure la livraison ?",
    answer: "La livraison prend généralement de 24 à 48 heures pour les grandes villes, et jusqu'à 72 heures pour les autres régions du Maroc."
  },
  {
    question: "Puis-je le retourner ?",
    answer: "Oui, nous offrons une politique de retour sans tracas. Si vous n'êtes pas satisfait de la qualité, vous pouvez le retourner dans les 7 jours suivant la livraison."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-brand-text"
          >
            Foire Aux Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-brand-primary/20 rounded-2xl overflow-hidden bg-brand-bg/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-brand-text">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-brand-secondary" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-brand-text/70 leading-relaxed border-t border-brand-primary/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
