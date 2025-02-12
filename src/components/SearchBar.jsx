import { useState, useRef } from "react";
import DomainCard from "./DomainCard";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const resultsRef = useRef(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchResults([]);

    setTimeout(() => {
      const mockResults = [
        { name: `${searchQuery}.com`, price: 9.99 },
        { name: `${searchQuery}.net`, price: 8.99 },
        { name: `${searchQuery}.org`, price: 7.99 },
        { name: `${searchQuery}.io`, price: 29.99 },
      ];
      setSearchResults(mockResults);
      setIsLoading(false);

      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-40 px-4 sm:px-6 lg:px-8 animated-background">
      <div className="w-full max-w-md space-y-8 bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-lg mb-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Busca tu Dominio!
          </h2>
        </div>
        <form onSubmit={handleSearch} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="search"
                name="search"
                type="text"
                required
                className=" font-display appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Introduce un dominio"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={isLoading}
            >
              {isLoading ? "Buscando..." : "Buscar"}
            </button>
          </div>
        </form>
      </div>

      <div ref={resultsRef} className="w-full max-w-md">
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="text-center text-white mb-8"
            >
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2">Cargando resultados</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {searchResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="space-y-4"
            >
              {searchResults.map((domain) => (
                <DomainCard
                  key={domain.name}
                  name={domain.name}
                  price={domain.price}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchBar;
