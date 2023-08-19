function Dbuttons({ ios, mac }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 m-auto xl:flex-row ">
      <button className="px-4 py-3 font-bold text-white shadow-sm bg-strongCyan rounded-full font-bai shadow-shadowCyan hover:bg-emerald-500 max-w-[308px] w-full text-xl xl:max-w-[229px]">
        {ios}
      </button>
      <button className="px-4 py-3 font-bold text-white shadow-sm bg-ligthBlue rounded-full font-bai shadow-shadowBlue max-w-[308px] w-full text-xl xl:max-w-[229px] hover:bg-blue-400">
        {mac}
      </button>
    </div>
  );
}

export default Dbuttons;
