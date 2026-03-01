import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue((prev) => prev + value);
  };

  const calculate = () => {
    try {
      // eval() ki jagah Function() constructor zyada behtar/safe hai
      const result = new Function(`return ${inputValue}`)();
      setInputValue(String(result));
    } catch (error) {
      setInputValue("Error");
      setTimeout(() => setInputValue(""), 1500);
    }
  };

  const clear = () => setInputValue("");

  // Button Component for cleaner code
  const CalcButton = ({ label, onClick, className = "" }) => (
    <button
      type="button"
      onClick={onClick}
      className={`h-16 w-full flex items-center justify-center rounded-2xl text-xl font-semibold transition-all active:scale-95 ${className}`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-[2.5rem] shadow-2xl w-full max-w-[340px]">
        {/* Display Screen */}
        <div className="mb-6 p-4 text-right">
          <div className="text-neutral-500 text-sm h-6 overflow-hidden uppercase tracking-widest">
            {inputValue ? "Calculating..." : "Ready"}
          </div>
          <div className="text-white text-5xl font-light truncate mt-2 tracking-tighter">
            {inputValue || "0"}
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <CalcButton
            label="C"
            onClick={clear}
            className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white col-span-2"
          />
          <CalcButton
            label="/"
            onClick={() => display("/")}
            className="bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-white"
          />
          <CalcButton
            label="*"
            onClick={() => display("*")}
            className="bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-white"
          />

          {/* Row 2 */}
          <CalcButton
            label="7"
            onClick={() => display("7")}
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          />
          <CalcButton
            label="8"
            onClick={() => display("8")}
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          />
          <CalcButton
            label="9"
            onClick={() => display("9")}
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          />
          <CalcButton
            label="-"
            onClick={() => display("-")}
            className="bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-white"
          />

          {/* Row 3 */}
          <CalcButton
            label="4"
            onClick={() => display("4")}
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          />
          <CalcButton
            label="5"
            onClick={() => display("5")}
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          />
          <CalcButton
            label="6"
            onClick={() => display("6")}
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          />
          <CalcButton
            label="+"
            onClick={() => display("+")}
            className="bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-white"
          />

          {/* Row 4 */}
          <CalcButton
            label="1"
            onClick={() => display("1")}
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          />
          <CalcButton
            label="2"
            onClick={() => display("2")}
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          />
          <CalcButton
            label="3"
            onClick={() => display("3")}
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          />
          <CalcButton
            label="="
            onClick={calculate}
            className="bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 row-span-2 h-full"
          />

          {/* Row 5 */}
          <CalcButton
            label="0"
            onClick={() => display("0")}
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          />
          <CalcButton
            label="00"
            onClick={() => display("00")}
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          />
          <CalcButton
            label="."
            onClick={() => display(".")}
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
