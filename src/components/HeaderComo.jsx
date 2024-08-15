import React, {useState} from 'react'
import Logo from '/LOGO.svg'
import { Link } from 'react-router-dom'

export default function HeaderComo() {
  return (
    <header className='w-full bg-fundoHeader px-4 py-2 flex items-center justify-between overflow-x-auto'>

        <Link to='/' className='flex-shrink-0'>
           <img src={Logo} alt="Logo da NutriScale" className='w-12 h-8 md:w-20 md:h-12 mr-3 md:mr-auto'/>
        </Link>

        <nav className='flex-grow hidden md:inline'>
            <ul className='flex md:justify-end space-x-4 md:space-x-6 text-xs md:text-base uppercase text-naoSelecionado font-bold'>
                <li className='flex '>
                    <Link to="/">Home</Link>
                </li>
                <li className= 'whitespace-nowrap text-botaoSelecionado underline decoration-botaoSelecionado decoration-2'>
                    <Link to="/comousar">Como Usar</Link>
                </li>
                <li>
                    <Link to="/materiais">Materiais</Link>
                </li>
                <li className=''>
                    <Link to="/referencias">Referências</Link>
                </li>
                <li className='whitespace-nowrap'>
                    <Link to="/sobre">Sobre nós</Link>
                </li>
            </ul>
        </nav>

        {/*Menu Hamburgui kkkkkacabapeloamor*/}
        <button className='space-y-1 group md:hidden'>
            <div className='w-6 h-1 bg-white'></div>
            <div className='w-6 h-1 bg-white'></div>
            <div className='w-6 h-1 bg-white'></div>

            {/* menu */}
            <ul className='bg-fundoHeader w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end text-naoSelecionado'>
                <button className='px-10 py-8 relative ml-auto'>
                    <div className='w-6 h-1 rotate-45 absolute bg-white'></div>
                    <div className='w-6 h-1 -rotate-45 absolute bg-white'></div>
                </button>
                <li className='flex justify-center w-full '>
                    <Link to="/">Home</Link>
                </li>
                <li className= 'whitespace-nowrap text-botaoSelecionado'>
                    <Link to="/comousar">Como Usar</Link>
                </li>
                <li>
                    <Link to="/materiais">Materiais</Link>
                </li>
                <li className=''>
                    <Link to="/referencias">Referências</Link>
                </li>
                <li className='whitespace-nowrap'>
                    <Link to="sobre">Sobre nós</Link>
                </li>
            </ul>
        </button>
        
    </header>
  )
}