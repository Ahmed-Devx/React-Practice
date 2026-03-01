import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-700 w-full max-w-sm text-center transform transition-all hover:scale-105">
        <h2 className="text-slate-400 uppercase tracking-widest text-sm font-semibold mb-2">
          Current Tally
        </h2>

        <h1 className="text-7xl font-bold text-white mb-8 transition-all duration-300">
          {count}
        </h1>

        <div className="flex gap-4 justify-center">
          <button
            onClick={decrement}
            className="w-16 h-16 flex items-center justify-center bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl text-2xl font-bold hover:bg-red-500 hover:text-white transition-all active:scale-90"
          >
            -
          </button>

          <button
            onClick={reset}
            className="px-6 py-4 bg-slate-700 text-slate-300 rounded-2xl font-medium hover:bg-slate-600 hover:text-white transition-all active:scale-95"
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="w-16 h-16 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-2xl text-2xl font-bold hover:bg-emerald-500 hover:text-white transition-all active:scale-90"
          >
            +
          </button>
        </div>

        <p className="mt-8 text-slate-500 text-xs italic">
          Built with React & Tailwind
        </p>
      </div>
    </div>
  );
}

export default App;
