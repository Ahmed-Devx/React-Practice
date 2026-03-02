import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-none">
      <button
        className="w-full py-6 flex justify-between items-center text-left transition-all group"
        onClick={() => setIsActive(!isActive)}
      >
        <span
          className={`text-lg font-semibold transition-colors ${
            isActive
              ? "text-blue-600"
              : "text-slate-800 group-hover:text-blue-500"
          }`}
        >
          {title}
        </span>

        <HiChevronDown
          className={`text-2xl text-slate-400 transition-transform duration-300 ${
            isActive ? "rotate-180 text-blue-600" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isActive ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border-l-4 border-blue-500">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
