import { navigation } from "../constants";

const Navbar = () => {
  return (
    <div className="w-full z-10 px-[4rem] py-7 flex items-center justify-between bg-[#0F2028] text-white/70 p-4">
      <div className="flex items-center gap-3">
        <img src="./src/assets/Logomark.svg" alt="Logo mark" />
        <img src="./src/assets/Logotext.svg" alt="Logo text" />
      </div>
      <div>
        <ul className="flex gap-10">
          {navigation.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <button className="bg-transparent text-white/70 px-6 py-3 rounded-full border border-white/20">
          Sing in
        </button>
        <button className="bg-[#1D9B5E] text-white px-6 py-3 rounded-full border border-[#1D9B5E]">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
