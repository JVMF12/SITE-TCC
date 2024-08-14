import React from 'react'
import HeaderRefer from '../components/HeaderRefer'

export default function Referencias() {
  return (
    <div className='bg-fundoSite min-h-screen'>
        <HeaderRefer/>

        <main className=''>
            <h1 className='uppercase text-center mt-8 pb-6 font-bold text-xl md:text-3xl text-botaoSelecionado font-openSans md:mt-10'>Referências</h1>
            
            <section className='mt-2 font-openSans text-base ml-7 md:ml-12 text-justify max-w-fit md:mr-12 md:text-xl md:mt-4 mr-8'>
                <p className='md:mb-2'>Se você está em busca de uma alimentação saudável e balanceada, ou se quer apenas ter controle da dieta que está seguindo no momento, a nossa balança é perfeita para você!</p>
                <br />
                <p className='md:mb-2'>- Seguir uma dieta saudável e balanceada é de extrema importância para pessoas que estão buscando a hipertrofia ou apenas uma melhora na qualidade de vida. Nossa balança irá te ajudar nessa jornada!</p>
                <br />
                <p className='md:mb-2'>- Estudos mostram que é de extrema importância ter algo para te auxiliar ou acompanhar na sua dieta, o que é feito por nossa balança;</p>
                <br />
                <p className='md:mb-2'>- A balança oferece sugestões de novos alimentos para sua dieta, criando bons e variados hábitos de alimentação;</p>
                <br />
                <p className='md:mb-2'>- Nossos planos alimentares são fracionados entre 5 e 6 refeições, quantidade ideal de refeições para uma alimentação balanceada.</p>
            </section>

            <br />
            <br />
        </main>
    </div>
  )
}