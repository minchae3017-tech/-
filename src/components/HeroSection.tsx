import { useState } from 'react';
import { ArrowRight, CupSoda, Phone } from 'lucide-react';
import { HERO_SLIDES } from '../data/teaData';

interface HeroSectionProps {
  onOpenContactModal: () => void;
}

function TeaTimeLogoBadge() {
  return (
    <div
      className="relative w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] lg:w-[380px] lg:h-[380px] rounded-full bg-[#FCFBF8] shadow-[0_24px_56px_rgba(32,58,84,0.22)] border border-white/80 flex items-center justify-center p-4 select-none"
      role="img"
      aria-label="티타임 카페 공식 로고 - A healing time for me 티타임"
    >
      <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="teaTimeTopArc" d="M 96 164 A 118 118 0 0 1 304 164" />
        </defs>

        {/* Curved Header Motto */}
        <text
          fill="#1B82C4"
          fontSize="19"
          fontWeight="600"
          letterSpacing="0.8"
          fontFamily="'Noto Sans KR', 'Plus Jakarta Sans', sans-serif"
        >
          <textPath href="#teaTimeTopArc" startOffset="50%" textAnchor="middle">
            A healing time for me
          </textPath>
        </text>

        {/* Left Leafy Branch */}
        <g fill="#1B82C4" stroke="#1B82C4" strokeLinecap="round">
          <path
            d="M 152 246 C 122 224, 96 190, 92 146"
            fill="none"
            strokeWidth="3.2"
          />
          <ellipse cx="116" cy="233" rx="14" ry="6.5" transform="rotate(-14 116 233)" />
          <ellipse cx="91" cy="212" rx="13" ry="6" transform="rotate(14 91 212)" />
          <ellipse cx="118" cy="197" rx="11" ry="5.5" transform="rotate(-38 118 197)" />
          <ellipse cx="78" cy="180" rx="13" ry="5.8" transform="rotate(24 78 180)" />
          <ellipse cx="107" cy="166" rx="10.5" ry="5.2" transform="rotate(-48 107 166)" />
          <ellipse cx="90" cy="138" rx="6.5" ry="12" transform="rotate(-14 90 138)" />
        </g>

        {/* Right Leafy Branch */}
        <g fill="#1B82C4" stroke="#1B82C4" strokeLinecap="round">
          <path
            d="M 248 246 C 278 224, 304 190, 308 146"
            fill="none"
            strokeWidth="3.2"
          />
          <ellipse cx="284" cy="233" rx="14" ry="6.5" transform="rotate(14 284 233)" />
          <ellipse cx="309" cy="212" rx="13" ry="6" transform="rotate(-14 309 212)" />
          <ellipse cx="282" cy="197" rx="11" ry="5.5" transform="rotate(38 282 197)" />
          <ellipse cx="322" cy="180" rx="13" ry="5.8" transform="rotate(-24 322 180)" />
          <ellipse cx="293" cy="166" rx="10.5" ry="5.2" transform="rotate(48 293 166)" />
          <ellipse cx="310" cy="138" rx="6.5" ry="12" transform="rotate(14 310 138)" />
        </g>

        {/* Center Cute Blue Teapot */}
        <g fill="#1B82C4">
          {/* Handle */}
          <path
            d="M 152 178 C 122 162, 118 214, 154 222"
            fill="none"
            stroke="#1B82C4"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Spout */}
          <path d="M 239 208 C 254 202, 263 185, 267 167 L 281 167 C 276 196, 263 221, 238 231 Z" />
          {/* Lid Knob */}
          <circle cx="200" cy="143" r="6.5" />
          {/* Lid Dome */}
          <path d="M 171 164 C 175 149, 225 149, 229 164 Z" />
          {/* Teapot Body */}
          <path d="M 150 174 C 150 163, 250 163, 250 174 C 254 206, 244 234, 224 241 L 176 241 C 156 234, 146 206, 150 174 Z" />
          {/* Base Rim */}
          <rect x="173" y="238" width="54" height="6" rx="3" />

          {/* Cute Eyes */}
          <circle cx="182" cy="199" r="3.4" fill="#FCFBF8" />
          <circle cx="218" cy="199" r="3.4" fill="#FCFBF8" />
          {/* Subtle Cute Mouth/Nose Mark */}
          <path
            d="M 197.5 208 L 200 211 L 202.5 208 M 200 211 L 200 214.5"
            fill="none"
            stroke="#FCFBF8"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
        </g>

        {/* Bottom Double-Bordered Nameplate: 티타임 */}
        <g>
          <rect
            x="114"
            y="262"
            width="172"
            height="48"
            rx="10"
            fill="none"
            stroke="#1B82C4"
            strokeWidth="2.5"
          />
          <rect x="119" y="267" width="162" height="38" rx="7" fill="#1B82C4" />
          <text
            x="200"
            y="293"
            textAnchor="middle"
            fill="#FCFBF8"
            fontSize="21"
            fontWeight="700"
            letterSpacing="6"
            fontFamily="'Noto Sans KR', sans-serif"
          >
            티타임
          </text>
        </g>
      </svg>
    </div>
  );
}

export function HeroSection({ onOpenContactModal }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const currentSlide = HERO_SLIDES[activeIndex];
  const isLogoSlide = activeIndex === 0;

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(115deg, #567FA6 0%, #78A1C4 42%, #ADC8DF 78%, #D4E1EA 100%)',
      }}
      aria-label="티타임 메인 소개"
    >
      {/* Subtle Warm Sunlight Wash to Give the Blue a Cozy, Warm Tone */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 76% 36%, rgba(255, 245, 228, 0.42) 0%, rgba(255, 242, 220, 0.14) 45%, rgba(255, 242, 220, 0) 75%)',
        }}
      />

      <div className="relative max-w-[1440px] mx-auto min-h-[540px] sm:min-h-[600px] lg:h-[640px] flex items-center">
        {/* Slide 2 Background Studio Photography */}
        {!isLogoSlide && (
          <div className="absolute inset-0">
            {!imgErrors[currentSlide.id] ? (
              <img
                key={currentSlide.id}
                src={currentSlide.image}
                alt={currentSlide.imageAlt}
                referrerPolicy="no-referrer"
                onError={() => handleImageError(currentSlide.id)}
                className="w-full h-full object-cover object-center lg:object-right transition-opacity duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#648BB0] via-[#89AECB] to-[#C8DAE8]" />
            )}

            {/* Measured Warm-Blue Contrast Scrim for Left Typography Legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(64, 96, 128, 0.82) 0%, rgba(88, 121, 152, 0.56) 46%, rgba(182, 206, 224, 0.08) 84%)',
              }}
            />
          </div>
        )}

        {/* Main Hero Content Container */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Editorial Typography */}
            <div className="lg:col-span-6 xl:col-span-7 max-w-xl">
              <p className="text-xs sm:text-sm font-medium tracking-[0.22em] text-white/95 mb-5">
                {currentSlide.kicker}
              </p>

              <h1 className="font-serif-editorial text-white font-normal leading-[1.22] tracking-tight text-balance">
                <span className="block text-[clamp(2rem,3.6vw,3.1rem)] mb-1 opacity-95">
                  {currentSlide.brandTitle}
                </span>
                <span className="block text-[clamp(2.15rem,4vw,3.5rem)]">
                  {currentSlide.headline}
                </span>
              </h1>

              <p className="mt-5 text-sm sm:text-base text-white/95 leading-relaxed max-w-md">
                {currentSlide.subtitle}
              </p>

              <div className="mt-8">
                <a
                  href={currentSlide.ctaTarget}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FCFBF8] text-[#1E354D] text-sm font-semibold hover:bg-white transition-colors duration-150 whitespace-nowrap shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>{currentSlide.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Tea Time Cafe Logo Emblem (First Page) */}
            {isLogoSlide && (
              <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end lg:pr-10">
                <TeaTimeLogoBadge />
              </div>
            )}
          </div>
        </div>

        {/* Bottom-Left Slide Indicators */}
        <div className="absolute bottom-7 left-6 sm:left-10 lg:left-[max(2.5rem,calc((100%-1200px)/2+2.5rem))] z-10 flex items-center gap-1">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${index + 1}번 배너 보기: ${slide.headline}`}
                aria-current={isActive ? 'true' : undefined}
                className="p-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
              >
                <span
                  className={`block w-2.5 h-2.5 rounded-full transition-all duration-150 ${
                    isActive
                      ? 'border-2 border-white bg-transparent scale-110'
                      : 'bg-white/45 hover:bg-white/75'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Bottom-Right Stacked Quick Action Buttons */}
        <div className="hidden md:flex flex-col gap-2.5 absolute bottom-8 right-8 z-10">
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#DCE6EE]/90 backdrop-blur-sm border border-white/50 text-[#1B2D3F] text-sm font-medium shadow-sm hover:bg-white transition-colors duration-150 whitespace-nowrap"
          >
            <CupSoda className="w-4 h-4" aria-hidden="true" />
            <span>추천 메뉴 바로가기</span>
          </a>
          <button
            type="button"
            onClick={onOpenContactModal}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#22252A] text-white text-sm font-medium shadow-md hover:bg-[#343940] transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>매장 전화·영업시간</span>
          </button>
        </div>
      </div>
    </section>
  );
}
