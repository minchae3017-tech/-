import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SignatureStyleSection } from './components/SignatureStyleSection';
import { MenuSection, type MenuFilter } from './components/MenuSection';
import { LocationSection } from './components/LocationSection';
import { StoreContactModal } from './components/StoreContactModal';
import { STORE_INFO } from './data/teaData';

export default function App() {
  const [menuFilter, setMenuFilter] = useState<MenuFilter>('all');
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleSelectCategoryAndScroll = (category: 'straight' | 'milk') => {
    setMenuFilter(category);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#22252A]">
      <Navbar onOpenContactModal={() => setContactModalOpen(true)} />

      <main className="flex-1">
        <HeroSection onOpenContactModal={() => setContactModalOpen(true)} />
        <SignatureStyleSection onSelectCategoryAndScroll={handleSelectCategoryAndScroll} />
        <MenuSection activeFilter={menuFilter} onFilterChange={setMenuFilter} />
        <LocationSection />
      </main>

      <footer className="bg-white border-t border-[#ECEAE4] py-10">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-serif-editorial text-lg font-semibold tracking-[0.14em] text-[#1D242B]">
              TEA TIME
            </span>
            <p className="text-xs text-[#6B6E75] mt-1.5">
              {STORE_INFO.address} · {STORE_INFO.phone} · {STORE_INFO.hours}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#52565E]">
            <a href="#tea-guide" className="hover:text-[#1D242B] transition-colors">
              티 가이드
            </a>
            <a href="#menu" className="hover:text-[#1D242B] transition-colors">
              시그니처 메뉴
            </a>
            <a href="#location" className="hover:text-[#1D242B] transition-colors">
              오시는 길
            </a>
            <a href="#store-info" className="hover:text-[#1D242B] transition-colors">
              매장 안내
            </a>
          </div>
        </div>
      </footer>

      <StoreContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
