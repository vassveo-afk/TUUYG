import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="font-sans bg-brand-bg text-brand-text min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-xl border border-brand-primary/20 p-8 md:p-12 max-w-lg w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </motion.div>
        
        <h1 className="text-3xl font-serif font-bold mb-4 text-brand-text">Merci pour votre commande !</h1>
        <p className="text-brand-text/70 mb-8 text-lg">
          Votre commande a été confirmée avec succès. Notre équipe vous contactera très prochainement pour confirmer la livraison.
        </p>

        {/* Facebook Pixel Tracking Code for Purchase could be triggered here or added in the index.html depending on how the user set it up, but a simple page load on this URL is usually enough for custom conversions */}

        <Link 
          to="/"
          className="inline-flex justify-center items-center gap-2 bg-brand-text text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-secondary transition-colors duration-300 w-full"
        >
          Retour à l'accueil
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}
