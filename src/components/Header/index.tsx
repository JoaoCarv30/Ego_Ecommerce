import React from 'react'

import logo from '../../assets/Zahrilogo.png'

const Header = () => {
  return (
    <header className='w-screen flex items-center justify-around bg-dark-blue text-white'>
 
      <img src={logo} alt="#" className='w-1/12' />

      <nav>
        <ul className='flex items-center justify-center gap-8 decoration-transparent text-xl font-bold'>
          <li>Home</li>
          <li>Produtos</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header