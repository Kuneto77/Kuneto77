interface CityCardProps {
  img: string;
  label: string;
  city: string;
}

export default function CityCard({ img, label, city }: CityCardProps) {
  return (
    <div className="group relative h-[190px] lg:h-[220px] rounded-[24px] overflow-hidden cursor-pointer shadow-[0_12px_30px_rgba(0,0,0,0.5)] border border-white/5">
      <img src={img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={city} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#3d010c] via-[#3d010c]/40 to-transparent"></div>
      <div className="absolute bottom-[24px] left-[24px] right-[70px]">
        <div className="text-[11px] lg:text-[12px] text-white/70 font-bold tracking-[0.16em] mb-[4px]">{label}</div>
        <h3 className="text-[32px] lg:text-[34px] font-bold text-white leading-tight font-display tracking-tight drop-shadow-md">{city}</h3>
      </div>
      <div className="absolute bottom-[24px] right-[24px] w-[46px] h-[46px] rounded-full border border-white/40 flex items-center justify-center text-white text-[20px] group-hover:bg-[#e7c27d] group-hover:text-[#3d010c] group-hover:border-[#e7c27d] transition-all">
        <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  );
}
