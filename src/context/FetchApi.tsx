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
  quantity?: number; // Adicionamos a quantidade aqui
}

interface FetchApiContextType {
  dataApi: FetchApiContextProps[];
  setQuery: (query: string) => void; // Função para atualizar a query
  setCartItems: (cartItems: FetchApiContextProps[]) => void;
  cartItems: FetchApiContextProps[];
  cartQuantity: number;
  setCartQuantity: (cartQuantity: number) => void;
}

export const FetchApiContext = createContext({} as FetchApiContextType);

export const FetchApiProvider = ({ children }: FetchApiProviderProps) => {




  const [dataApi, setDataApi] = useState<FetchApiContextProps[]>([]);
  const [query, setQuery] = useState<string>(''); // Estado para armazenar a pesquisa
  const [cartItems, setCartItems] = useState<FetchApiContextProps[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=celular`) // Busca por celular
      .then((response) => response.json())
      .then((data) => {
        setDataApi(data.results); 
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);


  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`) // Usa o valor de query na URL
        .then((response) => response.json())
        .then((data) => setDataApi(data.results))
        .catch((error) => console.error(error));
        console.log(dataApi)


  }, [query]); // Atualiza sempre que a query mudar




  return (
    <FetchApiContext.Provider value={{ dataApi, setQuery, setCartItems, cartItems, cartQuantity, setCartQuantity }}>
      {children}
    </FetchApiContext.Provider>
  );
};
