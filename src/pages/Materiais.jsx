import React from 'react'
import arduino from '/arduino.png'
import clcarga from '/clcarga.png'
import lcd from '/LCD.png'
import modulo from '/modulo.png'
import protoboard from '/protoboard.png'
import workplate from '/workplate.png'
import HeaderMateriais from '../components/HeaderMateriais'

function Materiais() {
  return (
    <div>
      <HeaderMateriais/>
      <main className='bg-fundoSite font-openSans font-normal text-sm text-text md:flex md:flex-col md:items-center'>
      
      <h1 className=' text-titulo font-bold text-center pt-[2rem] md:text-4xl text-xl font-subtitulo'>Materiais</h1>
      <section className='border-solid border-bgCaixa border-[0.225rem]  mx-box mb-bottom mt-top rounded-customPedro md:flex md:w-[50rem] sm:max-w-[47rem]'>
        <div className='flex flex-col items-center md:justify-center md:px-inline md:w-[15rem]'>
          <h2 className='text-titulo font-semibold pt-top text-xl font-subtitulo mb-2 md:hidden'>Arduino</h2>
          <img src={arduino} alt="imagem de uma peça arduino" className='my-inline  md:h-[7rem] md:w-[10rem]'/>
          <h2 className='text-titulo font-semibold pt-top text-xl font-subtitulo mb-2 hidden md:block'>Arduino</h2>
        </div>
        <div className='bg-bgCaixa rounded-b-[.92rem] flex flex-col items-center md:rounded-r-[.92rem] md:rounded-l-none md:flex md:flex-col md:justify-center md:max-w-[32.5rem] md:py-desk md:px-desk text-white'>
          <p className='mb-bottom pt-top flex text-justify p-inline '>O Arduino é uma plataforma eletrónica de código aberto que permite integrar hardware e software de forma fácil para desenvolver projetos eletrónicos.</p>
          <p className='pb-top'>Preço: R$ 249,00</p>
        </div>
        
      </section>

      <section className='border-solid border-bgCaixa border-[0.225rem] mx-box mb-bottom mt-top rounded-customPedro md:flex md:w-[50rem] sm:max-w-[47rem]'>
        <div className='flex flex-col items-center md:justify-center md:px-inline md:w-[15rem]'>
          <h2 className='text-titulo font-semibold pt-top text-xl md:text-center font-subtitulo mb-2 md:hidden'>Célula de carga</h2>          
          <img src={clcarga} alt="imagem de uma célula de carga" className='my-inline '/>
          <h2 className='text-titulo font-semibold pt-top text-xl md:text-center font-subtitulo mb-2 hidden md:block'>Célula de carga</h2>
        </div>
        <div className='bg-bgCaixa rounded-b-[.92rem] flex flex-col items-center md:rounded-r-[.92rem] md:rounded-l-none md:flex md:flex-col md:justify-center md:max-w-[32.5rem] md:py-desk md:px-desk text-white'>
          <p className='mb-bottom flex text-justify pt-top p-inline'>Célula de carga é um sensor eletromecânico que mede força ou massa. É um transdutor de força que converte a carga que atua sobre ele numa saída elétrica mensurável.
          </p>
          <p className='pb-top'>Preço: R$ 7,90</p>
        </div>
      </section>

      <section className='border-solid border-bgCaixa border-[0.225rem] mx-box mb-bottom mt-top rounded-customPedro md:flex md:w-[50rem] sm:max-w-[47rem]'>
        <div className='flex flex-col items-center md:justify-center md:px-inline md:w-[15rem]'>
          <h2 className='text-titulo font-semibold pt-top text-xl md:text-center font-subtitulo mb-2 md:hidden'>Módulo HX711</h2>
          <img src={modulo} alt="imagem de um módulo hx711" className='my-inline '/>
          <h2 className='text-titulo font-semibold pt-top text-xl md:text-center font-subtitulo mb-2 hidden md:block'>Módulo HX711</h2>
        </div>
        <div className='bg-bgCaixa rounded-b-[.92rem] flex flex-col items-center md:rounded-r-[.92rem] md:rounded-l-none md:flex md:flex-col md:justify-center md:max-w-[32.5rem] md:py-desk md:px-desk text-white'>
          <p className='mb-bottom flex text-justify pt-top p-inline'>Módulo conversor e amplificador de 24 bits, geralmente utilizado para amplificar sinais de células de carga, possibilitando a leitura através de um microntrolador como PIC, Arduino, Rasberry Pi, entre outros.</p>
          <p className='pb-top'>Preço: R$ 5,90</p>
        </div>
      </section>

      <section className='border-solid border-bgCaixa border-[0.225rem] mx-box mb-bottom mt-top rounded-customPedro md:flex md:w-[50rem] sm:max-w-[47rem]'>
        <div className='flex flex-col items-center md:justify-center md:px-inline md:w-[15rem]'>
          <h2 className='text-titulo font-semibold pt-top text-xl md:text-center font-subtitulo mb-2 md:hidden'>Protoboard</h2>
          <img src={protoboard} alt="imagem de uma protoboard" className='my-inline '/>
          <h2 className='text-titulo font-semibold pt-top text-xl md:text-center font-subtitulo mb-2 hidden md:block'>Protoboard</h2>
        </div>
        <div className='bg-bgCaixa rounded-b-[.92rem] flex flex-col items-center md:rounded-r-[.92rem] md:rounded-l-none md:flex md:flex-col md:justify-center md:max-w-[32.5rem] md:py-desk md:px-desk text-white'>
          <p className='mb-bottom flex text-justify pt-top p-inline'>Protoboard é uma placa de ensaio que serve como um protótipo de um aparelho eletrônico, com uma matriz de contatos que possibilita construir circuitos de teste sem que haja necessidade de solda e, assim, garantindo segurança e agilidade em diferentes atividades.</p>
          <p className='pb-top'>Preço: R$ 7,50</p>
        </div>
      </section>

      <section className='border-solid border-bgCaixa border-[0.225rem] mx-box mb-bottom mt-top rounded-customPedro md:flex md:w-[50rem] sm:max-w-[47rem]'>
        <div className='flex flex-col items-center md:justify-center md:px-inline md:w-[15rem]'>
          <h2 className='text-titulo font-semibold pt-top text-xl md:text-center font-subtitulo mb-2 md:hidden'>Workplate</h2>
          <img src={workplate} alt="imagem de uma workplate" className='my-inline '/>
          <h2 className='text-titulo font-semibold pt-top text-xl md:text-center font-subtitulo mb-2 hidden md:block'>Workplate</h2>
        </div>
        <div className='bg-bgCaixa rounded-b-[.92rem] flex flex-col items-center md:rounded-r-[.92rem] md:rounded-l-none md:flex md:flex-col md:justify-center md:max-w-[32.5rem] md:py-desk md:px-desk text-white'>
          <p className='mb-bottom flex text-justify pt-top p-inline'>A WorkPlate 400 é uma base de trabalho para montar sua placa Arduino junto a uma protoboard de 400 furos, criando assim um ambiente ideal para o desenvolvimento de projetos de uma forma prática e dinâmica.</p>
          <p className='pb-top'>Preço: R$ 14,90</p>
        </div>
      </section>

      <section className='border-solid border-bgCaixa border-[0.225rem] mx-box mt-top rounded-customPedro md:flex md:w-[50rem] sm:max-w-[47rem] md:mb-bottom'>
        <div className='flex flex-col items-center md:justify-center md:px-inline md:w-[15rem]'>
          <h2 className='text-titulo font-semibold pt-top text-xl md:text-center font-subtitulo mb-2 md:hidden'>Display LCD</h2>
          <img src={lcd} alt="imagem de um display lcd" className='my-inline '/>
          <h2 className='text-titulo font-semibold pt-top text-xl md:text-center font-subtitulo mb-2 hidden md:block'>Display LCD</h2>
        </div>
        <div className='bg-bgCaixa rounded-b-[.92rem] flex flex-col items-center md:rounded-r-[.92rem] md:rounded-l-none md:flex md:flex-col md:justify-center md:max-w-[32.5rem] md:py-desk md:px-desk text-white'>
          <p className='mb-bottom flex text-justify pt-top p-inline'>O display LCD 16x2 é um pequeno e versátil ecrã de cristal líquido (LCD) com 16 colunas e 2 linhas para escrever. É utilizado para projetos de programação, como robótica e automação residencial, e é compatível com vários sistemas microcontroladores, como Arduino, PIC e Atmel.</p>
          <p className='pb-top'>Preço: R$ 23,90</p>
        </div>
      </section>
    </main>
    </div>
    
  )
}

export default Materiais