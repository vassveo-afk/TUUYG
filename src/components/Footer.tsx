import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white/80 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-2xl text-white mb-6">LuxuryBed</h3>
            <p className="text-sm leading-relaxed mb-6">
              Apporter le confort d'une qualité hôtelière premium dans les foyers à travers le Maroc.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors hover:text-brand-text text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors hover:text-brand-text text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Nous Contacter</a></li>
              <li><a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Suivre la Commande</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Politiques</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Conditions de Service</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Retours et Remboursements</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Livraison</h4>
            <p className="text-sm leading-relaxed mb-4">
              Livraison gratuite dans toutes les grandes villes du Maroc. Paiement à la livraison disponible pour toutes les commandes.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} LuxuryBed. Tous droits réservés.</p>
          <div className="flex gap-4">
            <span>Fabriqué au Portugal</span>
            <span>•</span>
            <span>Qualité Premium</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
