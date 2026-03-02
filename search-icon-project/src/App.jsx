import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function App() {
  const [showInput, setShowInput] = useState(false);

  return (
    <section
      className={`min-h-screen flex items-center justify-center transition-all duration-700 ${
        showInput ? "bg-zinc-900" : "bg-zinc-50"
      }`}
      onClick={() => setShowInput(false)}
    >
      <div
        className="flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex items-center bg-white shadow-xl border border-zinc-200/50 transition-all duration-500 ease-out ${
            showInput
              ? "w-80 px-5 h-16 rounded-2xl shadow-orange-500/10"
              : "w-20 h-20 rounded-full justify-center cursor-pointer hover:shadow-2xl hover:scale-110"
          }`}
          onClick={() => !showInput && setShowInput(true)}
        >
          <FaSearch
            className={`transition-all duration-300 ${
              showInput ? "text-zinc-400 text-xl" : "text-zinc-800 text-3xl"
            }`}
          />

          <input
            type="text"
            placeholder="Search items..."
            autoFocus
            className={`ml-3 bg-transparent border-none outline-none text-zinc-800 text-lg w-full transition-all duration-500 ${
              showInput ? "opacity-100 w-full" : "opacity-0 w-0 hidden"
            }`}
          />
        </div>

        <p
          className={`text-zinc-400 font-medium tracking-wide transition-all duration-500 ${
            showInput ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          Click to search
        </p>
      </div>
    </section>
  );
}

export default App;
