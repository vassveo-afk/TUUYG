import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, CheckCircle2, Loader2, ArrowRight, User, Phone, MapPin, Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OrderForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    quantity: '1',
    colors: ['Mauve'],
    sizes: ['Standard'],
    product: 'Parure de Lit de Luxe 4 Pièces'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Note: Replace this URL with the actual Google Apps Script Web App URL.
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkadTruE52Bhwvr9FZ1BXGxP2kSmueZc1QJsTIh7GGDaOicweyWiLhkFUycRf6olTTSw/exec";

  const calculateTotal = (qty: string) => {
    const q = parseInt(qty);
    if (q === 1) return 279;
    if (q === 2) return 489;
    if (q >= 3) return 649;
    return 279;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleQuantityChange = (delta: number) => {
    setFormData(prev => {
      const newQty = Math.max(1, Math.min(3, parseInt(prev.quantity) + delta));
      let newColors = [...prev.colors];
      while (newColors.length < newQty) newColors.push('Mauve');
      while (newColors.length > newQty) newColors.pop();
      let newSizes = [...prev.sizes];
      while (newSizes.length < newQty) newSizes.push('Standard');
      while (newSizes.length > newQty) newSizes.pop();
      return { ...prev, quantity: String(newQty), colors: newColors, sizes: newSizes };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = { ...formData, price: calculateTotal(formData.quantity).toString(), color: formData.colors.join(', '), size: formData.sizes.join(', ') };
      // If the URL is just a placeholder, simulate a successful response
      if (GOOGLE_SCRIPT_URL.includes("YOUR_SCRIPT_ID")) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSuccess(true);
        setFormData({ ...formData, name: '', phone: '', city: '', quantity: '1', colors: ['Mauve'], sizes: ['Standard'] });
        navigate('/thank-you');
      } else {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Often required for Google Apps Script to avoid CORS issues
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submitData)
        });
        
        // Since no-cors makes response opaque, we assume success if no error thrown
        setIsSuccess(true);
        setFormData({ ...formData, name: '', phone: '', city: '', quantity: '1', colors: ['Mauve'], sizes: ['Standard'] });
        navigate('/thank-you');
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
                  <span className="text-4xl font-bold font-serif">{calculateTotal(formData.quantity)} DH</span>
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
                    <div className="space-y-6">
                      {Array.from({ length: parseInt(formData.quantity) }).map((_, i) => (
                        <div key={i} className="space-y-3">
                          <label className="text-sm font-medium text-brand-text/80">
                            Couleur Préférée {parseInt(formData.quantity) > 1 ? `(Parure ${i + 1})` : ''} *
                          </label>
                          <div className="grid grid-cols-3 gap-3">
                            {[
                              { id: 'Mauve', name: 'Mauve', img: 'https://i.ibb.co/1Gj7xmwV/Chat-GPT-Image-3-ao-t-2026-00-18-57.png' },
                              { id: 'Taupe', name: 'Taupe', img: 'https://i.ibb.co/QvTWFGBG/Chat-GPT-Image-2-ao-t-2026-23-11-41.png' },
                              { id: 'Ivory', name: 'Ivoire', img: 'https://i.ibb.co/cXFMy0L5/Chat-GPT-Image-2-ao-t-2026-23-05-13.png' }
                            ].map(color => (
                              <button
                                key={color.id}
                                type="button"
                                onClick={() => {
                                  const newColors = [...formData.colors];
                                  newColors[i] = color.id;
                                  setFormData({...formData, colors: newColors});
                                }}
                                className={`relative rounded-xl border-2 overflow-hidden transition-all duration-300 aspect-[4/3] group ${
                                  formData.colors[i] === color.id 
                                    ? 'border-brand-secondary ring-4 ring-brand-secondary/20 shadow-md scale-[1.02]' 
                                    : 'border-transparent hover:border-brand-primary/30 opacity-80 hover:opacity-100 grayscale-[0.2]'
                                }`}
                              >
                                <img src={color.img} alt={color.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                                  <span className="text-white text-[10px] sm:text-xs font-semibold w-full text-center p-1.5 leading-tight">{color.name}</span>
                                </div>
                                {formData.colors[i] === color.id && (
                                  <div className="absolute top-1 right-1 bg-white rounded-full p-0.5 shadow-sm">
                                    <CheckCircle2 className="w-3 h-3 text-brand-secondary fill-white" />
                                  </div>
                                )}
                              </button>
                            ))}
                          </div>
                          
                          <div className="mt-4">
                            <label className="text-sm font-medium text-brand-text/80 block mb-2">
                              Taille {parseInt(formData.quantity) > 1 ? `(Parure ${i + 1})` : ''} *
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                              {['140 × 200 cm', '160 × 200 cm', 'Standard'].map(size => (
                                <button
                                  key={size}
                                  type="button"
                                  onClick={() => {
                                    const newSizes = [...formData.sizes];
                                    newSizes[i] = size;
                                    setFormData({...formData, sizes: newSizes});
                                  }}
                                  className={`px-3 py-2 rounded-xl border text-sm font-medium transition-all ${
                                    formData.sizes[i] === size 
                                      ? 'border-brand-secondary bg-brand-secondary/10 text-brand-secondary shadow-sm' 
                                      : 'border-brand-primary/20 text-brand-text/70 hover:border-brand-primary/40 hover:bg-brand-bg/50'
                                  }`}
                                >
                                  {size}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-brand-text/80">Nom Complet *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="w-5 h-5 text-brand-text/40" />
                        </div>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-11 pr-5 py-4 bg-brand-bg/50 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                          placeholder="ex. Hassan El Amrani"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-brand-text/80">Numéro de Téléphone *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="w-5 h-5 text-brand-text/40" />
                        </div>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-11 pr-5 py-4 bg-brand-bg/50 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                          placeholder="ex. 06 12 34 56 78"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                      <div className="space-y-2 sm:col-span-3">
                        <label htmlFor="city" className="text-sm font-medium text-brand-text/80">Ville *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <MapPin className="w-5 h-5 text-brand-text/40" />
                          </div>
                          <input 
                            type="text" 
                            id="city" 
                            name="city" 
                            required
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full pl-11 pr-5 py-4 bg-brand-bg/50 border border-brand-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                            placeholder="ex. Casablanca"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <label className="text-sm font-medium text-brand-text/80">Quantité</label>
                        <div className="flex items-center justify-between bg-brand-bg/50 border border-brand-primary/20 rounded-xl px-2 py-2">
                          <button 
                            type="button" 
                            onClick={() => handleQuantityChange(-1)}
                            className="p-2.5 bg-white rounded-lg shadow-sm border border-brand-primary/10 hover:bg-brand-bg text-brand-text/70 transition-colors disabled:opacity-50"
                            disabled={formData.quantity === '1'}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold text-lg text-brand-text px-2">{formData.quantity}</span>
                          <button 
                            type="button" 
                            onClick={() => handleQuantityChange(1)}
                            className="p-2.5 bg-white rounded-lg shadow-sm border border-brand-primary/10 hover:bg-brand-bg text-brand-text/70 transition-colors disabled:opacity-50"
                            disabled={formData.quantity === '3'}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
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
