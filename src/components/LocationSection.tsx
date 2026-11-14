import { useState } from 'react';
import { Check, Copy, MapPin, Navigation, Phone } from 'lucide-react';
import { ROUTE_STEPS, STORE_INFO } from '../data/teaData';

export function LocationSection() {
  const [showWalkingRoute, setShowWalkingRoute] = useState(true);
  const [copiedField, setCopiedField] = useState<'address' | 'phone' | null>(null);

  const handleCopy = async (text: string, field: 'address' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard fallback silent
    }
  };

  return (
    <section id="location" className="w-full bg-[#F8F6F2] py-20 lg:py-28 border-t border-[#EAE6DD]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Top Row: Map + Location Address (Matching Screenshot 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clean Pastel Street Map of Daegu Gongpyeong-ro */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#E6E1D6] bg-[#FAF8F4] shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <svg
                  viewBox="0 0 600 450"
                  className="w-full h-full block"
                  role="img"
                  aria-label="대구광역시 중구 공평로 20 티타임 카페 약도 및 중앙로역 도보 경로"
                >
                  {/* Map Background */}
                  <rect width="600" height="450" fill="#F4F1EA" />

                  {/* Building Footprints */}
                  <g fill="#EAE5DA">
                    <rect x="28" y="25" width="95" height="68" rx="6" />
                    <rect x="145" y="20" width="110" height="72" rx="6" />
                    <rect x="282" y="28" width="125" height="65" rx="6" />
                    <rect x="435" y="25" width="135" height="70" rx="6" />

                    <rect x="24" y="128" width="88" height="86" rx="6" />
                    <rect x="142" y="128" width="115" height="92" rx="6" />
                    <rect x="290" y="128" width="118" height="84" rx="6" />
                    <rect x="436" y="130" width="132" height="88" rx="6" />

                    <rect x="28" y="248" width="94" height="90" rx="6" />
                    <rect x="150" y="252" width="112" height="82" rx="6" />
                    <rect x="294" y="246" width="115" height="92" rx="6" />
                    <rect x="440" y="250" width="128" height="86" rx="6" />

                    <rect x="34" y="366" width="118" height="62" rx="6" />
                    <rect x="180" y="368" width="142" height="60" rx="6" />
                    <rect x="352" y="364" width="210" height="64" rx="6" />
                  </g>

                  {/* 2.28 Memorial Park Subtle Green Block */}
                  <rect x="436" y="130" width="132" height="88" rx="8" fill="#E3EDE2" />
                  <text
                    x="502"
                    y="178"
                    textAnchor="middle"
                    fill="#5F7C5D"
                    fontSize="11"
                    fontWeight="600"
                  >
                    2·28기념중앙공원
                  </text>

                  {/* Roads */}
                  <g stroke="#FFFFFF" strokeLinecap="round" fill="none">
                    {/* Gukchaebosang-ro */}
                    <path d="M 0 110 L 600 110" strokeWidth="18" />
                    {/* Gongpyeong-ro (vertical) */}
                    <path d="M 272 0 L 272 450" strokeWidth="16" />
                    {/* Dongseong-ro */}
                    <path d="M 126 0 L 126 450" strokeWidth="14" />
                    {/* Jungang-daero (Subway Line 1 corridor) */}
                    <path d="M 0 350 L 600 315" strokeWidth="20" />
                    {/* Side street */}
                    <path d="M 0 232 L 600 232" strokeWidth="12" />
                    <path d="M 420 0 L 420 450" strokeWidth="14" />
                  </g>

                  {/* Road Labels */}
                  <text x="195" y="114" fill="#7D786E" fontSize="11" fontWeight="500">
                    국채보상로
                  </text>
                  <text x="242" y="295" fill="#7D786E" fontSize="11" fontWeight="500">
                    공평로
                  </text>
                  <text x="86" y="210" fill="#7D786E" fontSize="11" fontWeight="500">
                    동성로
                  </text>

                  {/* Subway Line 1 Green Line (Matching Screenshot 3's crisp green transit line) */}
                  <path
                    d="M 0 350 L 600 315"
                    stroke="#30A65B"
                    strokeWidth="3.5"
                    fill="none"
                  />
                  <rect x="64" y="330" width="112" height="24" rx="12" fill="#30A65B" />
                  <text
                    x="120"
                    y="346"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="700"
                  >
                    1호선 중앙로역
                  </text>

                  {/* Optional Walking Route Highlight */}
                  {showWalkingRoute && (
                    <g>
                      <path
                        d="M 120 330 L 126 232 L 272 232 L 272 178"
                        stroke="#2563EB"
                        strokeWidth="3"
                        strokeDasharray="6 5"
                        fill="none"
                      />
                      <circle cx="120" cy="330" r="5" fill="#2563EB" />
                      <rect x="148" y="205" width="96" height="22" rx="11" fill="#1E3A5F" />
                      <text
                        x="196"
                        y="220"
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="10.5"
                        fontWeight="600"
                      >
                        도보 약 10분
                      </text>
                    </g>
                  )}

                  {/* Nearby Landmarks */}
                  <g fontSize="10.5" fill="#6E6A61" fontWeight="500">
                    <text x="348" y="64" textAnchor="middle">
                      교동 · 공평네거리
                    </text>
                    <text x="200" y="176" textAnchor="middle">
                      동성로 상권
                    </text>
                    <text x="352" y="294" textAnchor="middle">
                      삼덕동 방면
                    </text>
                  </g>

                  {/* Tea Time Store Pin (Vivid Green Pin Matching Screenshot 3) */}
                  <g transform="translate(272, 168)">
                    <ellipse cx="0" cy="4" rx="12" ry="4" fill="rgba(0,0,0,0.12)" />
                    <path
                      d="M 0 0 C -12 -14 -18 -24 -18 -34 C -18 -44 -10 -52 0 -52 C 10 -52 18 -44 18 -34 C 18 -24 12 -14 0 0 Z"
                      fill="#00B865"
                    />
                    <circle cx="0" cy="-34" r="6.5" fill="#FFFFFF" />
                    <rect x="-52" y="10" width="104" height="24" rx="6" fill="#FFFFFF" stroke="#E2DDD3" />
                    <text
                      x="0"
                      y="26"
                      textAnchor="middle"
                      fill="#1D242B"
                      fontSize="11.5"
                      fontWeight="700"
                    >
                      티타임 (공평로 20)
                    </text>
                  </g>
                </svg>
              </div>

              {/* Map Footer Bar */}
              <div className="px-5 py-3.5 bg-white border-t border-[#EAE6DD] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[#6B6F76]">
                  대구 중구 공평로 20 1층 · 중앙로역 도보 10분
                </span>
                <button
                  type="button"
                  onClick={() => setShowWalkingRoute((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#F4F2ED] text-[#22252A] hover:bg-[#E7E3DA] transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{showWalkingRoute ? '도보 경로 숨기기' : '중앙로역 도보 경로 보기'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: LOCATION / 오시는길 Editorial Block (Matching Screenshot 3) */}
          <div className="lg:col-span-6">
            <p className="text-xs font-medium tracking-[0.2em] text-[#5B5852]">LOCATION</p>
            <h2 className="font-serif-editorial text-4xl sm:text-[44px] text-[#22252A] font-normal mt-2">
              오시는길
            </h2>

            {/* Beige Icon Box + Address Lockup (Matching Screenshot 3) */}
            <div className="mt-8 flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#BFB199] text-white flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-serif-editorial text-xl sm:text-2xl text-[#1D242B]">
                    {STORE_INFO.address}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleCopy(STORE_INFO.address, 'address')}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#7D6B52] hover:text-[#1D242B] underline underline-offset-4 cursor-pointer"
                  >
                    {copiedField === 'address' ? (
                      <>
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>복사됨</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>주소 복사</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm text-[#6B6E75] mt-1">{STORE_INFO.addressSub}</p>
              </div>
            </div>

            {/* Clean Step-by-Step Route Instructions from Daegu University */}
            <div className="mt-8 pt-7 border-t border-[#E4DFD5] space-y-4">
              {ROUTE_STEPS.map((step) => (
                <div key={step.number} className="flex items-baseline gap-4">
                  <span className="text-xs font-semibold text-[#9E8B70] tabular-nums shrink-0">
                    {step.number}.
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-[15px] font-semibold text-[#22252A]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#5A5E66] leading-relaxed mt-0.5">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Store Information Strip (#store-info) */}
        <div
          id="store-info"
          className="mt-16 pt-10 border-t border-[#E4DFD5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-xl p-6 border border-[#EAE6DD]">
            <p className="text-xs font-semibold text-[#9E8B70]">전화번호</p>
            <div className="mt-2 flex items-center justify-between gap-2">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="text-base font-semibold text-[#1D242B] tabular-nums hover:underline"
              >
                {STORE_INFO.phone}
              </a>
              <button
                type="button"
                onClick={() => handleCopy(STORE_INFO.phone, 'phone')}
                aria-label="전화번호 복사"
                className="p-2 rounded-lg text-[#6B6F76] hover:bg-[#F4F2ED] hover:text-[#1D242B] transition-colors cursor-pointer"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-[#009E56]" aria-hidden="true" />
                ) : (
                  <Phone className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#EAE6DD]">
            <p className="text-xs font-semibold text-[#9E8B70]">영업시간</p>
            <p className="mt-2 text-base font-semibold text-[#1D242B] tabular-nums">
              매일 13:00 ~ 21:00
            </p>
            <p className="mt-1 text-xs text-[#6B6E75] tabular-nums">라스트오더 20:30</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#EAE6DD]">
            <p className="text-xs font-semibold text-[#9E8B70]">주차 안내</p>
            <p className="mt-2 text-base font-semibold text-[#1D242B]">주차장 없음</p>
            <p className="mt-1 text-xs text-[#6B6E75]">인근 공평로 공영주차장 이용 권장</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#EAE6DD]">
            <p className="text-xs font-semibold text-[#9E8B70]">결제 혜택</p>
            <p className="mt-2 text-base font-semibold text-[#1D242B]">
              민생 회복 소비 쿠폰 사용 가능
            </p>
            <p className="mt-1 text-xs text-[#6B6E75]">매장 방문 결제 시 적용</p>
          </div>
        </div>
      </div>
    </section>
  );
}
