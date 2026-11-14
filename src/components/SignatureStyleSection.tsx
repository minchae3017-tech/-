import { useState } from 'react';
import { ArrowRight, Check, Coffee } from 'lucide-react';
import { TEA_STYLES, type TeaStyleItem } from '../data/teaData';

interface SignatureStyleSectionProps {
  onSelectCategoryAndScroll: (category: 'straight' | 'milk') => void;
}

export function SignatureStyleSection({ onSelectCategoryAndScroll }: SignatureStyleSectionProps) {
  const [selectedId, setSelectedId] = useState<TeaStyleItem['id']>('straight');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const activeStyle = TEA_STYLES.find((item) => item.id === selectedId) ?? TEA_STYLES[0];

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="tea-guide" className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Vertical Selector List (Matching Screenshot 2) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#9E8B70]">
                TEA TIME SIGNATURE
              </p>
              <h2 className="font-serif-editorial text-2xl sm:text-[28px] text-[#1D242B] mt-2">
                차의 종류와 특징 비교
              </h2>
            </div>

            <div className="border-t border-[#ECE8DF]">
              {TEA_STYLES.map((style) => {
                const isSelected = style.id === activeStyle.id;
                return (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setSelectedId(style.id)}
                    aria-pressed={isSelected}
                    className={`w-full flex items-center justify-between gap-4 py-5 px-2 border-b border-[#ECE8DF] text-left transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E8B70] ${
                      isSelected ? 'bg-[#FAF9F6]' : 'hover:bg-[#FAF9F6]/60'
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-[#EFECE5]">
                        {!imgErrors[style.id] ? (
                          <img
                            src={style.image}
                            alt={style.title}
                            referrerPolicy="no-referrer"
                            onError={() => handleImageError(style.id)}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#9E8B70]">
                            <Coffee className="w-5 h-5" aria-hidden="true" />
                          </div>
                        )}
                        {isSelected && (
                          <div className="absolute inset-0 bg-[#1D242B]/55 flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" aria-hidden="true" />
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <span
                          className={`block text-base sm:text-lg truncate ${
                            isSelected
                              ? 'font-semibold text-[#1D242B]'
                              : 'font-medium text-[#52565E]'
                          }`}
                        >
                          {style.title}
                        </span>
                        <span className="block text-xs text-[#7D8087] mt-0.5 truncate">
                          {style.englishTitle}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <ArrowRight
                        className="w-4 h-4 text-[#1D242B] shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center Column: Featured Visual Portrait Card */}
          <div className="lg:col-span-4 flex items-stretch">
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#ECE8DF] aspect-[3/4] lg:aspect-auto lg:min-h-[500px]">
              {!imgErrors[activeStyle.id] ? (
                <img
                  key={activeStyle.id}
                  src={activeStyle.image}
                  alt={activeStyle.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(activeStyle.id)}
                  className="w-full h-full object-cover transition-opacity duration-200"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#EDE9DF] to-[#DFD8CA] text-[#5C5343]">
                  <Coffee className="w-10 h-10 mb-3 opacity-70" aria-hidden="true" />
                  <p className="font-serif-editorial text-lg font-semibold">{activeStyle.title}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Warm Cream Editorial Description Card (Matching Screenshot 2) */}
          <div className="lg:col-span-4 flex items-stretch">
            <div className="w-full rounded-2xl bg-[#F7F5F2] p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-[#8C7A60] tracking-wide">
                  {activeStyle.meta}
                </p>
                <h3 className="font-serif-editorial text-2xl sm:text-[28px] font-semibold text-[#1D242B] mt-2">
                  {activeStyle.title}
                </h3>

                <div className="mt-7 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#2C3138] mb-1.5">특징</h4>
                    <p className="text-[15px] text-[#52565E] leading-relaxed">
                      {activeStyle.feature}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#E6E1D8]">
                    <h4 className="text-sm font-semibold text-[#2C3138] mb-1.5">장점</h4>
                    <p className="text-[15px] text-[#52565E] leading-relaxed">
                      {activeStyle.benefit}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={() => onSelectCategoryAndScroll(activeStyle.menuCategory)}
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-[#A89578] text-[#7D6B52] text-sm font-medium hover:bg-[#8E7B60] hover:text-white hover:border-[#8E7B60] transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E8B70]"
                >
                  <span>VIEW MORE</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
