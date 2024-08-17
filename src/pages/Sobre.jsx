import React from 'react';
import HeaderSobre from '../components/HeaderSobre';

export default function Sobre() {
  return (
    <div className='bg-fundoSite min-h-screen overflow-x-hidden'>
      <HeaderSobre />
      <section className='p-6 text-center'>
        <h1 className='uppercase text-center mt-4 pb-6 font-bold text-xl md:text-3xl text-botaoSelecionado'>Sobre nós</h1>
        <div className='flex flex-col items-center justify-center md:flex-row md:gap-4 lg:gap-14'>
          
          <section className='w-full max-w-full md:w-auto'>
            <div className='w-80 md:w-75 lg:w-96 p-8 h-auto flex flex-col justify-normal items-center bg-fundoHeader rounded-[8px] mt-10 text-white'>
              <img className='w-48 h-48' src="/pedroca.svg" alt="Pedro H. Gomes" />
              <p className='font-bold text-2xl pt-6 font-sans'>Pedro H. Gomes</p>
              <p className='text-xl'><span className='font-bold'>Idade:</span> 17 anos</p>
              <p className='text-xl'><span className='font-bold'>Formação:</span> Unasp- Técnico de Informática</p>
              <a className='pt-6' href="https://www.instagram.com/_phgomex?igsh=Z2puczV0bGFyamJu">
                <img src="/insta.svg" alt="Instagram" />
              </a>
            </div>
          </section>

          <section className='w-full max-w-full md:w-auto py-10'>
            <div className='w-80 md:w-65 lg:w-96 p-8 h-auto flex flex-col justify-normal items-center bg-fundoHeader rounded-[8px] mt-10 text-white'>
              <img className='w-48 h-48' src="/julia.svg" alt="Julia Schiavi" />
              <p className='font-bold text-2xl pt-6 font-sans'>Julia Schiavi</p>
              <p className='text-xl'><span className='font-bold'>Idade:</span> 18 anos</p>
              <p className='text-xl'><span className='font-bold'>Formação:</span> Unasp- Técnico de Informática</p>
              <a className='pt-6' href="https://www.instagram.com/juh_schiavi18?igsh=ZnVzMHZ1dWc2am4x&utm_source=qr">
                <img src="/insta.svg" alt="Instagram" />
              </a>
            </div>
          </section>

          <section className='w-full max-w-full md:w-auto'>
            <div className='w-80 md:w-55 lg:w-96 p-8 h-auto flex flex-col justify-normal items-center bg-fundoHeader rounded-[8px] mt-10 text-white'>
              <img className='w-48 h-48' src="/joao.svg" alt="João Victor Martins" />
              <p className='font-bold text-2xl pt-6 font-sans'>João Victor Martins</p>
              <p className='text-xl'><span className='font-bold'>Idade:</span> 17 anos</p>
              <p className='text-xl'><span className='font-bold'>Formação:</span> Unasp- Técnico de Informática</p>
              <a className='pt-6' href="https://www.instagram.com/jv.martins21?igsh=MW9hbmh0aDIzMHh2ZA==">
                <img src="/insta.svg" alt="Instagram" />
              </a>
            </div>
          </section>

        </div>
      </section>
    </div>
  );
}
