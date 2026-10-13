import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { FeaturesSection } from './components/FeaturesSection';
import { TiersSection } from './components/TiersSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { LegalViewer } from './components/LegalViewer';
import { Footer } from './components/Footer';
import { PreLaunchChecklistModal } from './components/PreLaunchChecklistModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

  // Sync with browser hash for deep-linking (e.g. for Google Play review links)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'termeni' || hash === 'terms') {
        setCurrentPage('terms');
      } else if (hash === 'confidentialitate' || hash === 'privacy') {
        setCurrentPage('privacy');
      } else if (hash === 'cookie' || hash === 'cookies') {
        setCurrentPage('cookies');
      } else if (hash === 'contact' || hash === 'asistenta') {
        setCurrentPage('contact');
      } else if (hash === 'checklist') {
        setIsChecklistOpen(true);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.history.pushState(null, '', '#');
    } else if (page === 'terms') {
      window.history.pushState(null, '', '#termeni');
    } else if (page === 'privacy') {
      window.history.pushState(null, '', '#confidentialitate');
    } else if (page === 'cookies') {
      window.history.pushState(null, '', '#cookie');
    } else if (page === 'contact') {
      window.history.pushState(null, '', '#contact');
    } else if (page === 'checklist') {
      setIsChecklistOpen(true);
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bar Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenChecklist={() => setIsChecklistOpen(true)}
      />

      {/* Main Page Rendering */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <HeroSection
              onNavigate={navigateTo}
              onOpenChecklist={() => setIsChecklistOpen(true)}
            />
            <DisclaimerBanner />
            <FeaturesSection />
            <TiersSection />
            <FaqSection />
            <ContactSection />
          </>
        )}

        {currentPage === 'terms' && (
          <LegalViewer
            initialDocId="terms"
            onNavigate={navigateTo}
            onOpenChecklist={() => setIsChecklistOpen(true)}
          />
        )}

        {currentPage === 'privacy' && (
          <LegalViewer
            initialDocId="privacy"
            onNavigate={navigateTo}
            onOpenChecklist={() => setIsChecklistOpen(true)}
          />
        )}

        {currentPage === 'cookies' && (
          <LegalViewer
            initialDocId="cookies"
            onNavigate={navigateTo}
            onOpenChecklist={() => setIsChecklistOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <div className="pt-6">
            <ContactSection />
            <FaqSection />
          </div>
        )}
      </main>

      {/* Global Quiet Professional Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenChecklist={() => setIsChecklistOpen(true)}
      />

      {/* Pre-launch checklist modal for developer confirmation */}
      <PreLaunchChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />
    </div>
  );
}
