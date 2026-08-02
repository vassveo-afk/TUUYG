import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Amina B.",
    city: "Casablanca",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    text: "Absolument magnifique ! La qualité est bien meilleure que ce à quoi je m'attendais pour ce prix. Ma chambre ressemble à un hôtel 5 étoiles maintenant. Je recommande vivement !",
    date: "il y a 2 jours"
  },
  {
    name: "Youssef T.",
    city: "Rabat",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    text: "Très doux et confortable. Je l'ai déjà lavé deux fois et la couleur n'a pas du tout pâli. La livraison a été rapide et le paiement à la livraison a facilité les choses.",
    date: "il y a 1 semaine"
  },
  {
    name: "Salma K.",
    city: "Marrakech",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200",
    text: "J'ai acheté ça pour mon nouvel appartement et j'en suis amoureuse. Le tissu est premium et ne se froisse pas facilement. J'en achèterai bientôt d'une autre couleur.",
    date: "il y a 3 semaines"
  }
];

export default function Reviews() {
  return (
    <section className="py-20 md:py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-brand-text"
          >
            Adoré Par des Milliers
          </motion.h2>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
            Ne nous croyez pas sur parole. Voici ce que disent nos clients au Maroc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-brand-primary/10 relative"
            >
              <div className="flex text-yellow-400 mb-6 gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-brand-text/80 leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-primary/20"
                />
                <div>
                  <h4 className="font-bold text-brand-text">{review.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-brand-text/50">
                    <span>{review.city}</span>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
