import { useState, useContext } from 'react';
import { FetchApiContext } from "../../context/FetchApi";
import carrinhoVazio from '../../assets/carrinhoVazio.png';

const Cart = () => {

  const { cartItems } = useContext(FetchApiContext);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  


const totalCart = cartItems.reduce((acc, item) => acc + item.price * quantity, 0);

  return (
    <main className='flex flex-col w-screen h-[calc(100vh-125px)] overflow-hidden'>
      {/* Conteúdo da tabela */}
      <section className='flex-1  w-screen overflow-hidden'>
        <table className='table-auto w-full text-center border-collapse'>
          <thead>
            <tr className='bg-light-blue text-white font-bold text-sm sm:text-lg'>
              <th className='p-2'>Produto</th>
              <th className='p-2'>Preço</th>
              <th className='p-2'>Quantidade</th>
              <th className='p-2'>Subtotal</th>
              <th className='p-2'>Remover</th>
            </tr>
          </thead>
          <tbody>
           {cartItems.length > 0 ?  (
             cartItems.map((item)=> (
               <tr className='border-t'>
               <td className='p-2 flex flex-col sm:flex-row items-center justify-start gap-2 sm:gap-4'>
                 <img
                   src={item.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                   alt="Produto 1"
                   className='w-12 h-12 sm:w-16 sm:h-16 object-cover rounded'
                 />
                 <span className='text-sm sm:text-base'>{item.title}</span>
               </td>
               <td className='p-2 text-sm sm:text-base'>R$ {item.price}</td>
               <td className='p-2 flex items-center justify-center gap-2 text-sm sm:text-base'>
                 <button className='flex items-center justify-center'
                  
                   onClick={handleIncrement}
                 >
                   +
                 </button>
                 {quantity}
                 <button className='flex items-center justify-center'
                  
                   onClick={handleDecrement}
                 >
                   -
                 </button>
               </td>
               <td className='p-2 text-sm sm:text-base'>R$ {item.price * quantity}</td>
               <td className='p-2'>
                 <button className='bg-red-500 text-white px-2 sm:px-4 py-1 rounded hover:bg-red-600 transition'>
                   Remover
                 </button>
               </td>
             </tr>
            ))
           ) : <section className='flex items-center justify-center h-screen w-screen'>
           <img src={carrinhoVazio} alt="imagem carrinho vazio" />
            </section>} 
          </tbody>
        </table>
      </section>

      {/* Seção de total fixa no rodapé */}
      <section className='w-full fixed bottom-0 left-0 flex items-center justify-end bg-light-blue py-4 px-4'>
        <div className='text-sm sm:text-lg font-bold text-white'>
          <span>Total: </span>
          <span className='text-white font-bold text-2xl'>R$ {totalCart.toLocaleString(
            'pt-BR',
            {
              minimumFractionDigits: 2,
            }
          )}</span>
        </div>
      </section>
    </main>
  );
};

export default Cart;
