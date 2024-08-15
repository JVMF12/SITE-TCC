import React from 'react'
import video from '/video.png'
import HeaderComo from '../components/HeaderComo'

function Comousar() {
  return (
    <main className='bg-fundoSite min-h-screen font-openSans font-normal text-sm text-text'>
        <HeaderComo/>
        
            <h1 className='text-titulo font-bold text-center text-3xl pt-[2rem] md:pt-[3rem]'>Como usar</h1>
            <section className='flex px-inline mt-[1.5rem] md:justify-center'>
                <div className='border-solid border-bgCaixa border-[0.18rem] mr-inline rounded-[.5rem] md:max-w-[20rem]'>
                    <h2 className='text-titulo font-semibold text-sm text-center justify-center py-[.5rem]  px-[.5rem] md:text-lg'>Coloque a balança em uma superfície sólida e plana </h2>
                </div>
                <div className='border-solid border-bgCaixa border-[0.18rem] rounded-[.5rem] md:max-w-[20rem]'>
                    <h2 className='text-titulo font-semibold text-sm text-center justify-center py-[.5rem]  px-[.5rem] md:text-lg'>Baixe o aplicativo da balança na sua loja de aplicativos</h2>
                </div>
            </section>
            <section className='md:flex md:flex-col md:items-center'>
                <div className='md:flex md:justify-center border-solid border-bgCaixa border-[0.18rem] mt-[1.5rem] mx-[1rem] rounded-[.5rem]  md:max-w-[41.5rem]'>
                    <h2 className='text-titulo font-semibold text-sm text-center justify-center py-[.5rem]  px-[.5rem] md:text-lg'>Após seguir os passsos anteriores, basta criar uma conta no aplicativo e começar sua jornada na vida saúdavel, com o auxílio de uma excelente ferramenta</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='text-titulo font-bold text-center text-2xl my-[1.5rem]'>Tutorial</h1>
                    <img src={video} alt="imagem simulando a tela de um vídeo no youtube" className='pb-[3rem] w-[20rem] h-auto md:w-[35rem]'/>
                </div>
            </section>
            
    </main>
  )
}

export default Comousar