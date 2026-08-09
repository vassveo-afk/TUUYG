import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Details from '../components/Details';
import Comparison from '../components/Comparison';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import OrderForm from '../components/OrderForm';
import Footer from '../components/Footer';
import Urgency from '../components/Urgency';

export default function Home() {
  return (
    <div className="font-sans bg-brand-bg text-brand-text min-h-screen pt-14">
      <Urgency />
      <main>
        <Hero />
        <TrustBadges />
        <Features />
        <Gallery />
        <Details />
        <Comparison />
        <Reviews />
        <FAQ />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}
