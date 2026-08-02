import { Truck, ShieldCheck, Award, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

const badges = [
  {
    icon: Truck,
    title: "Livraison Rapide",
    description: "Livraison gratuite partout au Maroc"
  },
  {
    icon: CreditCard,
    title: "Paiement à la Livraison",
    description: "Payez à la réception"
  },
  {
    icon: Award,
    title: "Qualité Premium",
    description: "Microfibre luxueuse"
  },
  {
    icon: ShieldCheck,
    title: "Commande Sécurisée",
    description: "100% satisfait ou remboursé"
  }
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-y border-brand-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-brand-secondary" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-brand-text mb-1">{badge.title}</h3>
                <p className="text-sm text-brand-text/70">{badge.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
