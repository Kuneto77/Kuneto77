export default function ChatButton() {
  return (
    <button className="hidden lg:flex fixed bottom-8 right-8 bg-[#51000b]/90 backdrop-blur-md text-white px-6 py-4 rounded-full border border-white/20 shadow-2xl items-center gap-3 hover:scale-105 transition-transform z-50">
      <i className="far fa-comment-dots text-2xl"></i>
      <span className="font-bold">Чат с консултант</span>
    </button>
  );
}
