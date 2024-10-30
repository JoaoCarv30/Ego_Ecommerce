import { useContext, useState } from "react";
import { FetchApiContext } from "../../context/FetchApi";
import loading from "../../assets/bouncing-circles.svg";



interface CardsProps {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  official_store_name: string;
  permalink: string;
  quantity?: number;
}




const Cards = () => {
  const { dataApi, setCartItems, cartItems, setCartQuantity, cartQuantity } = useContext(FetchApiContext);


  function formatPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }

  function handleAddToCart(item: CardsProps) {

    console.log("entrou no handleAddToCart")

    if (!cartItems.includes(item)) {
      setCartQuantity(cartQuantity + 1);
    }

    if (cartItems.length === 0) {
      setCartItems([...cartItems, item]);
    }else{
      cartItems.forEach((product) => {
        if (product.id === item.id) {
          console.log("entrou no if 1")
          if (product.quantity !== undefined) {
            console.log("entrou no if 2")
            product.quantity = product.quantity + 1;
          }
        }else{
          console.log("entrou no else")
          setCartItems([...cartItems, item]);
  
        }
      });
    }

    

   
    console.log(cartItems);

  
  }

  return (
    <section className=" h-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {dataApi.length > 0 ? (
          dataApi.map((item) => (
            <div key={item.id} className="p-4 bg-white text-black flex flex-col items-center justify-between rounded-md shadow-md relative overflow-hidden">
              <button onClick={()=> handleAddToCart(item)}>

              <span className="absolute  -top-2 -right-1 bg-dark-blue text-white w-10 h-8 flex items-center justify-center rounded-lg text-lg font-bold">+</span>
              </button>
              <a href={item.permalink} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                  alt={item.title}
                  className="w-full object-cover"
                />
              </a>
              <h1 className="text-gray-500 text-sm text-center mt-2">{item.title}</h1>
              <div className="flex items-center justify-between w-full mt-3">
                <h2 className="text-2xl font-bold">{formatPrice(item.price)}</h2>
                <p className="text-gray-500 text-sm">
                  {item.official_store_name ? item.official_store_name : "Desconhecido"}
                </p>
              </div>
            </div>
          ))
        ) : (
        <section className=" w-screen h-screen flex items-center justify-center">
           <img src={loading} alt="carregaomento" className="w-24" />

        </section>
        )}
      </div>
    </section>
  );
};

export default Cards;