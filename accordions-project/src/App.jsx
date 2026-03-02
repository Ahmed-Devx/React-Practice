import Accordion from "./Accordion";
import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/60">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500">
            Everything you need to know about modern web tech.
          </p>
        </div>

        <div className="space-y-2">
          {accordionData.map(({ title, content }, index) => (
            <Accordion key={index} title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
