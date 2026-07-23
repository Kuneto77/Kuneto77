import SearchButton from './SearchButton';

const priceValue = (
  <>
    от 200000 <span className="mx-2 text-white/30 text-sm">-</span> до 500000 €
  </>
);

const areaValue = (
  <>
    от 100 m² <span className="mx-2 text-white/30 text-sm">-</span> до 200 m²
  </>
);

function SearchAction() {
  return (
    <button className="flex items-center justify-center bg-gradient-to-r from-[#ebd095] via-[#dca368] to-[#c78945] text-[#331808] font-bold text-[17px] px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg tracking-wide shrink-0">
      <svg className="w-5 h-5 mr-2 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
      Търси
    </button>
  );
}

export default function SearchBar() {
  return (
    <div className="w-full max-w-[1240px] mx-auto">
      <div className="hidden lg:flex items-center justify-start p-0 w-full">
        <div className="flex flex-row items-center bg-[#4d0517] rounded-[50px] p-2 shadow-2xl overflow-x-auto no-scrollbar border border-[#7a1228] w-full">
          <SearchButton icon="city" label="Град" value="Бургас" className="pl-3 pr-4 relative" />
          <div className="w-[1px] h-8 bg-white/10 shrink-0" />
          <SearchButton icon="district" label="Квартал" value="Всички" className="pl-4 pr-4 relative" />
          <div className="w-[1px] h-8 bg-white/10 shrink-0" />
          <SearchButton icon="property" label="Вид имот" value="Апартамент" className="pl-4 pr-4 relative" />
          <div className="w-[1px] h-8 bg-white/10 shrink-0" />
          <SearchButton icon="price" label="Цена" value={priceValue} className="pl-4 pr-4 relative" />
          <div className="w-[1px] h-8 bg-white/10 shrink-0" />
          <SearchButton icon="area" label="Площ" value={areaValue} className="pl-4 pr-3 relative" />
          <div className="pl-2 shrink-0 ml-auto">
            <SearchAction />
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full max-w-[430px] mx-auto rounded-[28px] bg-[#4d0517]/96 border border-[#7a1228] shadow-2xl p-2 flex flex-col gap-2 backdrop-blur-sm">
        <SearchButton icon="city" label="Град" value="Бургас" className="w-full px-4 py-4 h-auto rounded-[22px] bg-[#4d0517] border border-[#7a1228]" />
        <div className="h-px bg-white/10 w-full" />
        <SearchButton icon="district" label="Квартал" value="Всички" className="w-full px-4 py-4 h-auto rounded-[22px] bg-[#4d0517] border border-[#7a1228]" />
        <div className="h-px bg-white/10 w-full" />
        <SearchButton icon="property" label="Вид имот" value="Апартамент" className="w-full px-4 py-4 h-auto rounded-[22px] bg-[#4d0517] border border-[#7a1228]" />
        <div className="h-px bg-white/10 w-full" />
        <SearchButton icon="price" label="Цена" value={priceValue} className="w-full px-4 py-4 h-auto rounded-[22px] bg-[#4d0517] border border-[#7a1228]" />
        <div className="h-px bg-white/10 w-full" />
        <SearchButton icon="area" label="Площ" value={areaValue} className="w-full px-4 py-4 h-auto rounded-[22px] bg-[#4d0517] border border-[#7a1228]" />
        <div className="w-full mt-1">
          <SearchAction />
        </div>
      </div>
    </div>
  );
}
