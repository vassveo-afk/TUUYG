import { motion } from 'motion/react';
import { Feather, Wind, Droplets, Sparkles, Clock, Sun, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Feather,
    title: "Tissu Ultra Doux",
    description: "Microfibre premium qui donne l'impression d'un nuage contre votre peau."
  },
  {
    icon: Wind,
    title: "Respirant",
    description: "Régule la température pour vous garder au frais et à l'aise toute la nuit."
  },
  {
    icon: Sparkles,
    title: "Design Élégant",
    description: "De magnifiques motifs imprimés qui rehaussent la décoration de votre chambre."
  },
  {
    icon: Droplets,
    title: "Facile à Laver",
    description: "Lavable en machine et séchage rapide pour un entretien sans effort."
  },
  {
    icon: Clock,
    title: "Durable",
    description: "Conception durable faite pour résister à des années d'utilisation."
  },
  {
    icon: CheckCircle2,
    title: "Résistant aux Plis et à la Décoloration",
    description: "Reste comme neuf et éclatant lavage après lavage."
  },
  {
    icon: Sun,
    title: "Confort Toutes Saisons",
    description: "Poids parfait pour un sommeil douillet toute l'année."
  }
];

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-brand-bg relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-brand-text"
          >
            Pourquoi Nos Clients l'Adorent
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-text/70"
          >
            Chaque détail est conçu pour vous offrir l'ultime expérience de sommeil.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-brand-primary/10 transition-all duration-300 border border-brand-primary/10 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-brand-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-brand-text">{feature.title}</h3>
                <p className="text-brand-text/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
