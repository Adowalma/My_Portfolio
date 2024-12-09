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
        Este portfólio é um convite para explorar minhas habilidades tecnológicas e uma jornada constante de aprendizado. Descubra como posso ajudar a impulsionar seus projetos.
        {/* Combinando design moderno e código eficiente, podemos transformar ideias em experiências digitais impactantes. */}
         
        </div>
        <a href="https://www.canva.com/design/DAGXG_r2PIM/t5Zjq0jr-q8d17a3tdbJuw/view?utm_content=DAGXG_r2PIM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h72eac3e414" target="_blank" rel="noopener noreferrer">Ver Currículo</a>
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