import { useState, useContext } from 'react';
import { FaSearch } from "react-icons/fa";
import { FetchApiContext } from '../../context/FetchApi'; // Certifique-se de que o caminho está correto

const SearchBar = () => {
  const [search, setSearch] = useState<string>('');
  const { setQuery } = useContext(FetchApiContext); // Usa o contexto para passar o valor de busca

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(search); // Atualiza o valor de pesquisa no contexto
  };


  return (
    <form className='w-screen flex flex-col items-center justify-center m-4' onSubmit={handleSearch}>
      <div className="flex">
  <input
    type="text"
    className="p-3 rounded-l-md border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-dark-blue"
    placeholder="Computador ..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <button
    type="submit"
    className="bg-dark-blue text-white px-4 py-3 rounded-r-md hover:bg-blue-700 transition-colors duration-200"
  >
    <FaSearch />
  </button>
</div>


    </form>
  );
};

export default SearchBar;
