import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal: () => void;
}

const NAV_LINKS = [
  { label: '티 가이드', href: '#tea-guide' },
  { label: '시그니처 메뉴', href: '#menu' },
  { label: '오시는 길', href: '#location' },
  { label: '매장 안내', href: '#store-info' },
];

export function Navbar({ onOpenContactModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-[#ECEAE4]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-serif-editorial text-xl font-semibold tracking-[0.14em] text-[#1D242B] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A80A0] rounded-sm"
        >
          TEA TIME
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav aria-label="주 메뉴" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#40454C] hover:text-[#1D242B] border-b border-transparent hover:border-[#1D242B] py-1 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A80A0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary outline pill action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenContactModal}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-[#22252A] border border-[#22252A] rounded-full hover:bg-[#22252A] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A80A0]"
          >
            <span>방문·문의 안내</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#22252A] rounded-full hover:bg-[#F5F4F0] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#ECEAE4] px-5 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base font-medium text-[#22252A] border-b border-[#F2EFE9] last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#22252A] border border-[#22252A] rounded-full hover:bg-[#22252A] hover:text-white transition-colors cursor-pointer"
            >
              <span>방문·문의 안내</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
