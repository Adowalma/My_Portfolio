import { useRef } from 'react'
import CustomHook from './CustomHook';

const Home = () => {

  const refTab = useRef();
  CustomHook(refTab);

  return (
    <section className='home' ref={refTab}>
      <div className="content">
        <div className='name'>
          Olá, sou a <span>ADOWALMA</span>
        </div>
        <div className='des'>
        Este portfólio é um convite para explorar minhas habilidades tecnológicas e uma jornada constante de aprendizado.
        Combinando design moderno e código eficiente, podemos transformar ideias em experiências digitais impactantes.
         {/* Descubra como posso ajudar a impulsionar seus projetos. */}
        </div>
        <a href="/CV_AdowalmaAdao.pdf" target="_blank" rel="noopener noreferrer">Baixar Currículo</a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="/avatar-removebg.png" alt="" />
          <div className="info">
            <div>Desenvolvedora</div>
            <div>Angolana</div>
            <div>__</div>
            <div>Feminina</div>
          </div>
        </div>
        </div> 
    </section>
  )
}

export default Home