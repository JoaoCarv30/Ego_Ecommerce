import { createContext, ReactNode, useEffect, useState } from "react";

interface FetchApiProviderProps {
  children: ReactNode;
}

interface FetchApiContextProps {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  official_store_name: string;
  permalink: string;
}

interface FetchApiContextType {
  dataApi: FetchApiContextProps[];
  setQuery: (query: string) => void; // Função para atualizar a query
}

export const FetchApiContext = createContext({} as FetchApiContextType);

export const FetchApiProvider = ({ children }: FetchApiProviderProps) => {
  const [dataApi, setDataApi] = useState<FetchApiContextProps[]>([]);
  const [query, setQuery] = useState<string>(''); // Estado para armazenar a pesquisa

  useEffect(() => {
   
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=all`) // Usa o valor de query na URL
        .then((response) => response.json())
        .then((data) => setDataApi(data.results))
        .catch((error) => console.error(error));

  }, []); // Atualiza sempre que a query mudar

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`) // Usa o valor de query na URL
        .then((response) => response.json())
        .then((data) => setDataApi(data.results))
        .catch((error) => console.error(error));

  }, [query]); // Atualiza sempre que a query mudar

  return (
    <FetchApiContext.Provider value={{ dataApi, setQuery }}>
      {children}
    </FetchApiContext.Provider>
  );
};
