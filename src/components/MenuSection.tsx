import { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { MENU_ITEMS, type MenuItem } from '../data/teaData';

export type MenuFilter = 'all' | 'straight' | 'milk' | 'recommended';

interface MenuSectionProps {
  activeFilter: MenuFilter;
  onFilterChange: (filter: MenuFilter) => void;
}

const FILTER_TABS: { id: MenuFilter; label: string }[] = [
  { id: 'all', label: '전체 메뉴' },
  { id: 'straight', label: '스트레이트티' },
  { id: 'milk', label: '밀크티' },
  { id: 'recommended', label: '추천 티' },
];

export function MenuSection({ activeFilter, onFilterChange }: MenuSectionProps) {
  const [selectedTeaId, setSelectedTeaId] = useState<string>('darjeeling');

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeFilter === 'straight') return item.category === 'straight';
    if (activeFilter === 'milk') return item.category === 'milk';
    if (activeFilter === 'recommended') return item.recommended;
    return true;
  });

  const straightItems = filteredItems.filter((item) => item.category === 'straight');
  const milkItems = filteredItems.filter((item) => item.category === 'milk');

  const selectedTea: MenuItem =
    filteredItems.find((item) => item.id === selectedTeaId) ??
    filteredItems[0] ??
    MENU_ITEMS[0];

  const renderMenuGroup = (title: string, subtitle: string, items: MenuItem[]) => {
    if (items.length === 0) return null;
    return (
      <div>
        <div className="flex items-baseline justify-between pb-3 border-b border-[#22252A]">
          <h3 className="font-serif-editorial text-xl text-[#1D242B] font-semibold">{title}</h3>
          <span className="text-xs text-[#7A7E85]">{subtitle}</span>
        </div>

        <div>
          {items.map((item) => {
            const isSelected = item.id === selectedTea.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedTeaId(item.id)}
                className={`w-full text-left py-4 px-3 -mx-3 rounded-xl border-b border-dashed border-[#E3DFD6] last:border-b-0 flex items-start justify-between gap-4 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E8B70] ${
                  isSelected ? 'bg-[#F7F5F2]' : 'hover:bg-[#FAF9F6]'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-base font-semibold text-[#1D242B]">{item.name}</span>
                    {item.recommended && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#9E7B42]">
                        <Star className="w-3.5 h-3.5 fill-[#C99B49] text-[#C99B49]" aria-hidden="true" />
                        <span>추천</span>
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#5A5E66] leading-relaxed mt-1">{item.description}</p>
                </div>

                <span className="text-base font-semibold text-[#2A5A82] tabular-nums whitespace-nowrap shrink-0 pt-0.5">
                  {item.price}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="menu" className="w-full bg-white py-20 lg:py-24 border-t border-[#F0EDE6]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header + Segmented Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#9E8B70]">
              MENU &amp; RECOMMENDATION
            </p>
            <h2 className="font-serif-editorial text-3xl sm:text-[34px] text-[#1D242B] mt-2">
              티타임 메뉴판 및 추천 티
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="메뉴 카테고리 필터"
            className="inline-flex items-center gap-1 p-1 bg-[#F4F2ED] rounded-full self-start md:self-auto"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => onFilterChange(tab.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#22252A] text-white shadow-sm'
                      : 'text-[#52565E] hover:text-[#1D242B]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Board Grid + Tasting Spotlight Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Editorial Menu List */}
          <div className="lg:col-span-7 space-y-10">
            {renderMenuGroup('Straight Tea · 스트레이트티', '찻잎 본연의 향과 맑은 맛', straightItems)}
            {renderMenuGroup('Milk Tea · 밀크티', '부드럽고 진한 밀크티 컬렉션', milkItems)}
          </div>

          {/* Right: Warm Cream Selected Tea Tasting Note Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-[#F7F5F2] p-8 sm:p-10">
              <div className="flex items-center gap-2 text-xs text-[#8C7A60] font-medium">
                <span>{selectedTea.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedTea.styleTag}</span>
                {selectedTea.recommended && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#9E7B42]">시그니처 추천</span>
                  </>
                )}
              </div>

              <div className="flex items-baseline justify-between gap-4 mt-3 pb-6 border-b border-[#E6E1D8]">
                <div>
                  <h3 className="font-serif-editorial text-2xl sm:text-[28px] font-semibold text-[#1D242B]">
                    {selectedTea.name}
                  </h3>
                  <p className="text-xs text-[#7A7E85] mt-1">{selectedTea.englishName}</p>
                </div>
                <span className="text-xl font-semibold text-[#2A5A82] tabular-nums shrink-0">
                  {selectedTea.price}
                </span>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <h4 className="text-xs font-semibold text-[#8C7A60] tracking-wider mb-1.5">
                    테이스팅 노트
                  </h4>
                  <p className="text-[15px] text-[#3B3F46] leading-relaxed">
                    {selectedTea.tastingNote}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-[#8C7A60] tracking-wider mb-1.5">
                    추천 즐기는 법
                  </h4>
                  <p className="text-[15px] text-[#52565E] leading-relaxed">
                    {selectedTea.servingTip}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E6E1D8] flex items-center justify-between gap-4">
                <span className="text-xs text-[#6B6F76]">
                  메뉴를 선택해 테이스팅 노트를 확인하세요
                </span>
                <a
                  href="#location"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#A89578] text-[#7D6B52] text-xs font-medium hover:bg-[#8E7B60] hover:text-white hover:border-[#8E7B60] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>오시는 길</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
