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

  console.log(search);

  return (
    <form className='w-screen flex flex-col items-center justify-center m-4' onSubmit={handleSearch}>
      <h1 className='m-2'>Pesquise os melhores produtos pelo melhor preço</h1>
      <div>
        <input
          type="text"
          className='p-2 rounded-r-md border border-r-0 w-64'
          placeholder='Computador ...'
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Atualiza o estado local
        />
        <button type="submit" className='bg-dark-blue text-white p-3 rounded-r-md'>
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
