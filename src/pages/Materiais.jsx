import React, { useState, useEffect } from 'react'
import arduino from '/arduino.png'
import clcarga from '/clcarga.png'
import lcd from '/LCD.png'
import modulo from '/modulo.png'
import protoboard from '/protoboard.png'
import workplate from '/workplate.png'
import HeaderMateriais from '../components/HeaderMateriais'


const Material = ({imagem, nome, descricao, preco}) => (
  <div className='group cursor-default bg-fundoHeader w-72 h-80 shadow-md rounded-md overflow-hidden'>
    <div className = 'h-40 relative overflow-hidden'>
      <img src={imagem} alt={nome} className='absolute top-0 left-0 h-full w-full object-contain bg-white' />
    </div>
    <div className='p-5 text-white'>
      <h2 className='text-xl font-bold'>{nome}</h2>
      <p className='text-base pb-3'>{descricao}</p>
      <p className='text-lg font-semibold text-titulo'>{preco}</p>
    </div>
  </div>
);

const DesktopPecas = () => {  
  const produtos = [
    {imagem: "/arduino.png", nome: "Arduino Uno R3", descricao: "Placa de Desenvolvimento", preco: "R$ 249,00"},
    {imagem: "/clcarga.png", nome: "Célula de Carga", descricao: "Sensor de Peso", preco: "R$ 7,90"},
    {imagem: "/modulo.png", nome: "Módulo HX711", descricao: "Módulo que amplifica sinal da célula de carga", preco: "R$ 5,90"},
    {imagem: "protoboard.png", nome: "Protoboard", descricao: "Placa de ensaio.", preco: "R$ 7,50"}, 
    {imagem: "/workplate.png", nome: "Workplate", descricao: "Base de Trabalho", preco: "R$14,90"},
    {imagem: "/LCD.png", nome: "Display LCD", descricao: "Display que mostra o peso", preco: "R$ 23,90"},
    {imagem: "/BluetoothHC05.png", nome: "Módulo Bluetooth HC-05", descricao: "Conecta o arduino e dispositivos bluetooth", preco: "R$ 31,25"}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProducts = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (produtos.length - visibleProducts + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? produtos.length - visibleProducts: prevIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section>
      <div className='mx-10 mt-10 mb-14 hidden lg:flex lg:items-center lg:flex-col lg:gap-8 lg:p-8'>
        <div className='relative flex items-center justify-center'>
          <button onClick={prevSlide} className=' px-4 py-2 rounded-full flex items-center justify-center relative z-10'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap = "round" strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path>
            </svg>
          </button>

          <div className='flex overflow-hidden space-x-4 gap-5'>
            {produtos.slice(currentIndex, currentIndex + visibleProducts).map((produto, index) => (
              <Material
                key={index}
                imagem={produto.imagem}
                nome = {produto.nome}
                descricao = {produto.descricao}
                preco = {produto.preco}
              />
            ))}
          </div>
          <button onClick={nextSlide} className= 'px-4 py-2 rounded-full flex items-center justify-center relative z-10'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d = "M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}


function Materiais() {
  return (
    <div>
      <HeaderMateriais/>
      <main className='bg-fundoSite font-openSans font-normal text-sm text-text md:flex md:flex-col md:items-center'>
      
      <h1 className=' text-titulo font-bold text-center pt-[2rem] md:text-4xl text-3xl font-subtitulo'>Materiais</h1>
      
      <DesktopPecas />
    </main>
    </div>
    
  )
}

export default Materiais