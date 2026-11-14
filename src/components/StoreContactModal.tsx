import { useEffect, useState } from 'react';
import { Check, Clock, Copy, MapPin, Phone, X } from 'lucide-react';
import { STORE_INFO } from '../data/teaData';

interface StoreContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StoreContactModal({ isOpen, onClose }: StoreContactModalProps) {
  const [copied, setCopied] = useState<'phone' | 'address' | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async (text: string, type: 'phone' | 'address') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard fallback silent
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1D242B]/50 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="store-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-2xl p-7 sm:p-8 shadow-xl border border-[#ECE8DF]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#ECE8DF]">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#9E8B70]">TEA TIME</p>
            <h2
              id="store-modal-title"
              className="font-serif-editorial text-2xl font-semibold text-[#1D242B] mt-1"
            >
              티타임 매장 방문·문의 안내
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="창 닫기"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#52565E] hover:bg-[#F5F4F0] hover:text-[#1D242B] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#9E8B70] mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium text-[#7A7E85]">매장 위치</p>
                <p className="text-sm font-semibold text-[#1D242B] mt-0.5">{STORE_INFO.address}</p>
                <p className="text-xs text-[#6B6E75] mt-0.5">{STORE_INFO.addressSub}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(STORE_INFO.address, 'address')}
              className="text-xs font-medium text-[#7D6B52] hover:text-[#1D242B] inline-flex items-center gap-1 shrink-0 py-1 px-2 rounded hover:bg-[#F5F4F0] cursor-pointer"
            >
              {copied === 'address' ? (
                <>
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>복사됨</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>복사</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#9E8B70] mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium text-[#7A7E85]">전화번호</p>
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="text-sm font-semibold text-[#1D242B] tabular-nums hover:underline mt-0.5 block"
                >
                  {STORE_INFO.phone}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(STORE_INFO.phone, 'phone')}
              className="text-xs font-medium text-[#7D6B52] hover:text-[#1D242B] inline-flex items-center gap-1 shrink-0 py-1 px-2 rounded hover:bg-[#F5F4F0] cursor-pointer"
            >
              {copied === 'phone' ? (
                <>
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>복사됨</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>복사</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-[#9E8B70] mt-1 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-[#7A7E85]">영업시간</p>
              <p className="text-sm font-semibold text-[#1D242B] tabular-nums mt-0.5">
                {STORE_INFO.hours}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-[#F7F5F2] p-4 text-xs text-[#52565E] space-y-1.5">
            <p>
              <span className="font-semibold text-[#22252A]">주차 안내:</span> {STORE_INFO.parking}
            </p>
            <p>
              <span className="font-semibold text-[#22252A]">결제 혜택:</span> {STORE_INFO.payment}
            </p>
          </div>
        </div>

        <div className="mt-7 flex items-center gap-3">
          <a
            href="#location"
            onClick={onClose}
            className="flex-1 text-center py-3 px-5 rounded-full bg-[#22252A] text-white text-sm font-medium hover:bg-[#343940] transition-colors"
          >
            약도 및 경로 보기
          </a>
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="py-3 px-5 rounded-full border border-[#A89578] text-[#7D6B52] text-sm font-medium hover:bg-[#F7F5F2] transition-colors whitespace-nowrap"
          >
            전화 걸기
          </a>
        </div>
      </div>
    </div>
  );
}
