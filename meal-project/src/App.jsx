import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
          Seafood <span className="text-orange-500">Delights</span>
        </h1>
        <p className="text-slate-500 max-w-md mx-auto">
          Explore the finest seafood recipes from around the world, curated just
          for you.
        </p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map(({ strMeal, strMealThumb, idMeal }) => (
            <article
              key={idMeal}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={strMealThumb}
                  alt={strMeal}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                  #{idMeal}
                </div>
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold text-slate-800 truncate mb-2 group-hover:text-orange-500 transition-colors">
                  {strMeal}
                </h2>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                    Seafood
                  </span>
                  <button className="text-orange-500 font-semibold text-sm hover:underline">
                    View Recipe →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
