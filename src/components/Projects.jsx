import { useRef } from 'react'
import { listProjects } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonCircleQuestion, faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
import CustomHook from './CustomHook'

const Projects = () => {
 
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs); 
  
  return (
    <section className="projects" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        Meus projectos
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
      Cada projeto é um marco no processo de aprendizado, uma oportunidade de aplicar tecnologias e superar desafios reais, experimentando ideias e consolidando conhecimentos.
      </div>
      <div className="list">
        {
          listProjects.map((project, key)=>(
            <div className="item" key={key}>
              <div className="images" ref={(el) => el && refDivs.current.push(el)}>
                <img src={project.images} alt="" />
              </div>
              <div className="content" ref={(el) => el && refDivs.current.push(el)}>
                <h3>{project.name}</h3>
                <div className="des">{project.des}</div>
                <div className="mission">
                  <div>
                    <FontAwesomeIcon icon={faPersonCircleQuestion} />
                  </div>
                  <div>
                    <h4>Mission</h4>
                    <div>
                      {project.mission}
                    </div>
                  </div>
                  <div className='mission'>
                    <div className='de'>
                    <FontAwesomeIcon icon={faEarthAfrica} />
                    </div>
                  </div>
                  <div>
                    <h4>Languages</h4>
                    <div >
                      {project.language}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          )
        }
      </div>
    </section>
  )
}

export default Projects