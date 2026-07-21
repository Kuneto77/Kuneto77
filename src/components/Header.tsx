import { logo, navAsset } from '../lib/assets';

export default function Header() {
  return (
    <header className="relative h-[110px] lg:h-[118px]">
      <div className="absolute inset-0 z-30 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center">
          <img
            src={logo}
            className="h-[210px] lg:h-[255px] w-auto object-contain -ml-12 lg:-ml-16 relative z-50"
            alt="Недвижими имоти Надежда"
          />
        </div>
        <div className="nav-wrap z-40 -ml-28 lg:-ml-40 scale-[0.95] lg:scale-[1.2] origin-left mt-[68px] lg:mt-[84px] flex-1 flex justify-end">
          <img className="nav-img !w-auto !max-w-none" src={navAsset} alt="Навигация" style={{ marginRight: '-48px' }} />
        </div>
        <div className="lg:hidden">
          <i className="fas fa-bars text-white text-2xl"></i>
        </div>
      </div>
    </header>
  );
}
