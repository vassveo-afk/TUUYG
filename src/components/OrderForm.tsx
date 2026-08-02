import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    quantity: '1',
    color: 'Mauve',
    product: 'Parure de Lit de Luxe 4 Pièces',
    price: '299'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Note: Replace this URL with the actual Google Apps Script Web App URL.
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkadTruE52Bhwvr9FZ1BXGxP2kSmueZc1QJsTIh7GGDaOicweyWiLhkFUycRf6olTTSw/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // If the URL is just a placeholder, simulate a successful response
      if (GOOGLE_SCRIPT_URL.includes("YOUR_SCRIPT_ID")) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSuccess(true);
        setFormData({ ...formData, name: '', phone: '', city: '', quantity: '1', color: 'Mauve' });
      } else {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Often required for Google Apps Script to avoid CORS issues
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        
        // Since no-cors makes response opaque, we assume success if no error thrown
        setIsSuccess(true);
        setFormData({ ...formData, name: '', phone: '', city: '', quantity: '1', color: 'Mauve' });
      }
    } catch (error) {
      console.error("Submission failed", error);
      alert("Un problème est survenu. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-brand-bg relative" id="order-form">
      <div className="absolute inset-0 bg-brand-primary/5"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2rem] shadow-2xl border border-brand-primary/20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Form Info Side */}
            <div className="bg-brand-text text-white p-8 md:p-12 md:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold font-serif mb-4">Complétez Votre Commande</h3>
                <p className="text-white/70 mb-8">Remplissez le formulaire ci-dessous. Nous vous contacterons pour confirmer la livraison.</p>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/80">Produit</span>
                    <span className="font-semibold text-right">Parure de Lit 4 Pièces</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/80">Livraison</span>
                    <span className="font-semibold text-green-400">GRATUITE</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/80">Paiement</span>
                    <span className="font-semibold text-brand-primary">Paiement à la Livraison</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-6 border-t border-white/10">
                <div className="flex justify-between items-end">
                  <span className="text-lg">Total</span>
                  <span className="text-4xl font-bold font-serif">299 DH</span>
                </div>
              </div>
            </div>

            {/* Form Input Side */}
            <div className="p-8 md:p-12 md:col-span-3 relative">
              <AnimatePresence>
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold font-serif text-brand-text mb-4">Commande Confirmée !</h3>
                    <p className="text-brand-text/70 text-lg mb-8">
                      Merci pour votre commande. Nous vous appellerons sous peu pour confirmer votre adresse de livraison.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="bg-brand-bg text-brand-text border border-brand-primary/30 px-8 py-3 rounded-full font-medium hover:bg-brand-primary/10 transition-colors"
                    >
                      Passer une Autre Commande
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-brand-text/80">Nom Complet *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-brand-bg/50 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                        placeholder="ex. Hassan El Amrani"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-brand-text/80">Numéro de Téléphone *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-brand-bg/50 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                        placeholder="ex. 06 12 34 56 78"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="city" className="text-sm font-medium text-brand-text/80">Ville *</label>
                        <input 
                          type="text" 
                          id="city" 
                          name="city" 
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-brand-bg/50 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                          placeholder="ex. Casablanca"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="quantity" className="text-sm font-medium text-brand-text/80">Quantité</label>
                        <select 
                          id="quantity" 
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-brand-bg/50 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all appearance-none"
                        >
                          <option value="1">1 Parure (299 DH)</option>
                          <option value="2">2 Parures (598 DH)</option>
                          <option value="3">3 Parures (897 DH)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="color" className="text-sm font-medium text-brand-text/80">Couleur Préférée</label>
                        <div className="flex gap-4 items-center">
                          <select 
                            id="color" 
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                            className="flex-1 px-5 py-4 bg-brand-bg/50 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all appearance-none"
                          >
                            <option value="Mauve">Mauve / Lavande</option>
                            <option value="Taupe">Taupe</option>
                            <option value="Ivory">Ivoire (Ivory)</option>
                          </select>
                          <div className="w-14 h-14 shrink-0 rounded-lg overflow-hidden border border-brand-primary/30 shadow-sm">
                            <img 
                              src={
                                formData.color === 'Mauve' ? 'https://i.ibb.co/1Gj7xmwV/Chat-GPT-Image-3-ao-t-2026-00-18-57.png' : 
                                formData.color === 'Taupe' ? 'https://i.ibb.co/QvTWFGBG/Chat-GPT-Image-2-ao-t-2026-23-11-41.png' :
                                formData.color === 'Ivory' ? 'https://i.ibb.co/cXFMy0L5/Chat-GPT-Image-2-ao-t-2026-23-05-13.png' :
                                'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=200'
                              } 
                              alt={formData.color} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                        </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full mt-4 bg-brand-text text-white py-5 rounded-xl font-bold text-lg hover:bg-brand-secondary transition-colors duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-brand-text/10 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          Traitement...
                        </>
                      ) : (
                        <>
                          Confirmer Ma Commande
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-xs text-brand-text/50 mt-4 flex items-center justify-center gap-1">
                      <ShoppingBag className="w-3 h-3" />
                      100% Sécurisé. Payez uniquement à la livraison.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
