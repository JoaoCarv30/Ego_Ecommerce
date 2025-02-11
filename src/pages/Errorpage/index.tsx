import error404 from "../../assets/4.svg"
import { Link } from 'react-router-dom'
const Errorpage = () => {
  return (
    <section className='w-screen h-screen overflow-hidden flex items-center justify-center flex-col'>
      
        <h1 className='font-bold text-2xl'>Página não encontrada !</h1>
        <p className='text-gray-500 mt-10'>Voltar para a página <Link to= "/" > <strong>Principal</strong></Link>.</p>
    <img src={error404} alt="Error" className='w-6/12' />

      </section>
  )
}

export default Errorpage