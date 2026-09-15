import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Concept from './components/Concept.jsx';
import Features from './components/Features.jsx';
import Price from './components/Price.jsx';
import TreatmentFlow from './components/TreatmentFlow.jsx';
import Products from './components/Products.jsx';
import Message from './components/Message.jsx';
import ShopInfo from './components/ShopInfo.jsx';
import ReservationCTA from './components/ReservationCTA.jsx';
import Footer from './components/Footer.jsx';
import salonData from './data/salonData.js';

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('concept');

  const sections = useMemo(
    () => [
      { id: 'concept', label: 'コンセプト' },
      { id: 'price', label: '料金' },
      { id: 'flow', label: '施術の流れ' },
      { id: 'products', label: '使用化粧品' },
      { id: 'shop', label: '店舗情報' },
      { id: 'contact', label: 'ご予約' },
    ],
    []
  );

  useEffect(() => {
    const navItems = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    navItems.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fadeItems = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
    setMobileNavOpen(false);
  };

  return (
    <div className="app-shell">
      <Header
        sections={sections}
        activeSection={activeSection}
        isOpen={mobileNavOpen}
        onToggle={() => setMobileNavOpen((value) => !value)}
        onNavigate={handleNavClick}
      />
      <main>
        <Hero onNavigate={handleNavClick} />
        <Concept />
        <Features features={salonData.features} />
        <Price campaign={salonData.campaign} />
        <TreatmentFlow steps={salonData.treatmentSteps} />
        <Products productInfo={salonData.productInfo} />
        <Message />
        <ShopInfo shop={salonData.shop} />
      </main>
      <ReservationCTA reservation={salonData.reservation} />
      <Footer shop={salonData.shop} />
    </div>
  );
}

export default App;
