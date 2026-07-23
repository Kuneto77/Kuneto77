import { useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CityCard from './components/CityCard';
import ChatButton from './components/ChatButton';
import { hero, cityBurgas, cityVarna, cityShumen, cityNovPazar } from './lib/assets';
import { supabase } from './lib/supabase';

function App() {
  useEffect(() => {
    void supabase.auth.getSession();
  }, []);

  return (
    <main className="min-h-screen relative font-serif text-[#fbf3e6]">
      <div className="absolute inset-0 w-full h-screen">
        <img src={hero} className="w-full h-full object-cover" alt="Изглед към морето и града" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10">
        <Header />

        <div className="relative min-h-[690px] flex flex-col justify-end pb-[60px] lg:pb-[80px] pt-[108px] lg:pt-0 lg:h-[calc(100vh-110px)]">
          <div className="w-full px-[10px] lg:px-[8px] mb-[20px] z-20 flex justify-center pt-2 lg:pt-0">
            <SearchBar />
          </div>

          <div className="w-full z-10 px-[10px] lg:px-[8px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] lg:gap-[16px] max-w-[1220px] mx-auto">
              <CityCard img={cityBurgas} label="ВИЖ ГРАДА" city="Бургас" />
              <CityCard img={cityVarna} label="ВИЖ ГРАДА" city="Варна" />
              <CityCard img={cityShumen} label="ВИЖ ГРАДА" city="Шумен" />
              <CityCard img={cityNovPazar} label="ВИЖ ГРАДА" city="Нов пазар" />
            </div>
          </div>
        </div>
      </div>

      <ChatButton />
    </main>
  );
}

export default App;
