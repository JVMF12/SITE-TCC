import React from 'react'
import Balanca from '/balança.svg'
import HeaderHome from '../components/HeaderHome'

export default function Home() {
  return (
    <div className='bg-fundoSite min-h-screen'>
        <HeaderHome/>
        <main className='mt-16 md:mt-12 overflow-x-hidden font-openSans'>
        <section className='flex justify-center items-center font-anton md:ml-7 '>
            <div className='flex flex-col p-4 space-y-2 justify-center items-center'>
                <h1 className='text-botaoSelecionado text-5xl md:text-8xl tracking-ultraWidest justify-center ml-4 '>NutriScale</h1>
                <h3 className='text-black mt-2 text-[0.9rem] font-bold font-openSans md:text-2xl'>A balança inteligente para controle alimentar</h3>
            </div>
         </section>

         <div className='"mt-5 p-6 flex'>
               <img src={Balanca} alt="Ilustração de uma balança de alimentos" className='mx-auto mb-3 md:w-120 md:h-80'/>
         </div>

        <section className='flex flex-col items-center justify-center'>
            <h2 className='uppercase text-center mt-4 mb-7 font-bold text-xl md:text-3xl text-botaoSelecionado'>
                Porquê nos escolher?
            </h2>

            <div className='flex flex-col md:flex-row p-3 md:gap-10 w-80 md:max-w-4xl md:w-[800px]  mb-10 ml-4 md:ml-2 text-white'>
                <div className='mb-10 md:flex-1 md:h-[225px] border border-fundoHeader bg-fundoHeader rounded-custom p-5 md:flex md:items-center md:justify-center'>
                    <p className='text-xs md:text-base text-justify md:text-left'>
                        Descubra uma nova maneira de monitorar sua saúde com essa balança inteligente conectada ao aplicativo exclusivo, oferecendo análises precisas e insights personalizados em tempo real.
                    </p>
                </div>

                <div className='md:flex-1 md:h-[225px] border border-fundoHeader bg-fundoHeader rounded-custom p-5 md:flex md:items-center md:justify-center'>
                    <p className='text-xs md:text-base text-justify md:text-left'>
                        Seja para controlar calorias, analisar nutrientes ou simplesmente manter o equilíbrio, essa ferramenta é a melhor aliada para seu bem-estar diário.
                    </p>
                </div>
            </div>
        </section>

        <section className='flex flex-col items-center justify-center'>
            <h2 className='uppercase text-center mt-4 mb-7 font-bold text-xl md:text-3xl text-botaoSelecionado'>Qual nosso objetivo?</h2>

            <div  className='flex flex-col md:flex-row p-3 md:gap-10 w-80 md:max-w-4xl md:w-[800px]  mb-10 ml-4 md:ml-2 text-white'>
                <div className='mb-10 md:flex-1 md:h-[225px] border border-fundoHeader bg-fundoHeader rounded-custom md:flex md:items-center md:justify-center'>
                    <p className='m-5 text-xs md:text-base text-justify md:text-left'>O objetivo da NutriScale é auxiliar todas as pessoas na sua jornada rumo à alimentação saudável e balanceada, pois acreditamos que uma boa dieta é a chave para uma qualidade de vida melhor para todos. </p>
                </div>

                <div className='md:flex-1 md:h-[225px] border border-fundoHeader bg-fundoHeader rounded-custom md:flex md:items-center md:justify-center'>
                    <p className='m-5 text-xs md:text-base text-justify md:text-left'>Nós iremos te ajudar a manter o controle da sua alimentação e também a variá-la, de acordo com as necessidades da dieta que você estiver seguindo. </p>
                </div>
            </div>
          
        </section>
   
        </main>
    </div>
  )
}