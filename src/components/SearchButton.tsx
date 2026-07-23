import type { ReactNode } from 'react';

type IconKind = 'city' | 'district' | 'property' | 'price' | 'area';

interface SearchButtonProps {
  icon: IconKind;
  label: string;
  value: ReactNode;
  className?: string;
  valueClassName?: string;
}

function SearchIcon({ icon }: { icon: IconKind }) {
  switch (icon) {
    case 'city':
      return (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      );
    case 'district':
      return (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 21V12h6v9" />
        </svg>
      );
    case 'property':
      return (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    case 'price':
      return (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
          <circle cx="9" cy="9" r="1.5" stroke="none" fill="currentColor" />
        </svg>
      );
    case 'area':
      return (
        <svg className="w-5 h-5 text-white transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="8" width="16" height="8" rx="1.5" strokeWidth="1.2" />
          <line x1="8" y1="8" x2="8" y2="11" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="12" y1="8" x2="12" y2="12" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="16" y1="8" x2="16" y2="11" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SearchButton({ icon, label, value, className = '', valueClassName = '' }: SearchButtonProps) {
  return (
    <button
      type="button"
      className={`relative flex items-center text-left shrink-0 h-[60px] transition-all duration-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#e7c27d]/50 ${className}`}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#d9a876] to-[#4d0517] p-[1px] mr-3 shrink-0">
        <div className="flex items-center justify-center w-full h-full rounded-full bg-[#4d0517]">
          <SearchIcon icon={icon} />
        </div>
      </div>
      <div className="flex flex-col justify-center min-w-0">
        <span className="text-[10px] tracking-widest text-white/70 uppercase mb-0.5 font-sans">{label}</span>
        <div className="flex items-center min-w-0">
          <span className={`text-[16px] text-white font-medium mr-4 whitespace-nowrap ${valueClassName}`}>{value}</span>
          <svg className="w-3 h-3 text-[#d9a876] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </button>
  );
}
