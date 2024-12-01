import { useRef } from 'react'
import { listSkills } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomHook from './CustomHook';

const Skills = () => {

  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs); 

  return (
    <section className="skills" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        Minha Caixa de Ferramentas
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
      {/* Com habilidade e prática, utilizo uma variedade de ferramentas e tecnologias para desenvolver projetos que unem funcionalidade e design. Confira algumas das principais áreas de atuação. */}
      {/* Tecnologias exploradas em projetos e estudos contínuos, aplicadas para criar soluções funcionais e criativas. */}
      Um conjunto de tecnologias exploradas e aplicadas em projetos, para criar soluções funcionais e criativas.
      </div>
      <div className="list">
        {listSkills.map((skills, key)=>(
          <div className="item" key={key} ref={(el) => el && refDivs.current.push(el)}>
            <FontAwesomeIcon icon={skills.icon}/>
            <h3>{skills.name}</h3>
            <div className="des">{skills.des}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills