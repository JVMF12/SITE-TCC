import React from 'react'
import HeaderRefer from '../components/HeaderRefer'

export default function Referencias() {
  return (
    <div className='bg-fundo min-h-screen overflow-auto md:overflow-hidden'>
        <HeaderRefer/>

        <main className='text-white'>
            <h1 className='text-center mt-8 pb-6 font-bold text-3xl md:text-4xl text-botaoSelecionado font-barlow md:mt-10'>Referências</h1>
            
            <section className='mt-2 font-openSans text-base ml-7 md:ml-12 text-justify max-w-fit md:mr-12 md:text-xl md:mt-4 mr-8 text-white md:flex'>
                <div className = 'mt-6 text-center border-4 border-titulo rounded-[0.75rem] md:mr-20 md:ml-32 md:w-[26.688rem]'>
                  <h2 className='mt-5'>Importância do planejamento alimentar para o emagrecimento</h2>
                  <button className='border-2 border-titulo mt-4 mb-5 px-6 rounded-[0.75rem]'>Abrir</button>
                </div>
                <div className='mt-6 text-center border-4 border-titulo rounded-[0.75rem] md:ml-24 md:w-[26.688rem] '>
                  <h2 className='mt-5'>Bons e variados hábitos de alimentação</h2>
                  <button className='border-2 border-titulo mt-4 mb-5 px-6 md:px-7 md:mt-10 rounded-[0.75rem]'>Abrir</button>
                </div>
            </section>

            <section className='mt-2 font-openSans text-base ml-7 text-justify max-w-fit md:mr-12 md:text-xl md:mt-8 mr-8 text-white md:flex md:justify-center md:'>
              <div className='mt-6 text-center border-4 border-titulo rounded-[0.75rem] mb-2 md:w-[26.688rem] items-center'>
                <h2 className='mt-5'>Importância da dieta saudável na melhora da qualidade de vida</h2>
                <button className='border-2 border-titulo mt-4 mb-5 px-6 rounded-[0.75rem]'>Abrir</button>
              </div>
            </section>
        </main>
    </div>
  )
}