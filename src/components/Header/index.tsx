import { useContext } from 'react';
import { FetchApiContext } from '../../context/FetchApi';

import logo from '../../assets/Zahrilogo.png'
import { IoCart } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Header = () => {

  const { cartQuantity } = useContext(FetchApiContext);

  return (
    <header className='w-screen flex items-center justify-around bg-dark-blue text-white'>

      <Link to='/'>
      <img src={logo} alt="#" className='w-3/12' />
      </Link>

      <nav className='flex items-center justify-center gap-8'>
       
        <Link to='/cart' className='p-4'>
          <div className='relative '>
            <IoCart className='text-3xl' />
            <span className='absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full'>{cartQuantity}</span>

          </div>
        </Link>
      </nav>
    </header>
  )
}

export default Header