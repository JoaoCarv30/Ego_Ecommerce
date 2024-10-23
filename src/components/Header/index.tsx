import React from 'react'

import logo from '../../assets/Zahrilogo.png'
import { IoCart } from "react-icons/io5";


const Header = () => {
  return (
    <header className='w-screen flex items-center justify-around bg-dark-blue text-white'>
 
      <img src={logo} alt="#" className='w-1/12' />

      <nav className='flex items-center justify-center gap-8'>
        <ul className='flex items-center justify-center gap-8 decoration-transparent text-xl font-bold'>
          <li>Home</li>
          <li>Produtos</li>
          <li>Contato</li>
        </ul>
        <div className='relative '>
          <IoCart className='text-3xl' />
          <span className='absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full'>0</span>

        </div>
      </nav>
    </header>
  )
}

export default Header