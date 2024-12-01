import React, { useRef } from 'react'
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
        This is my skills
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro temporibus vel animi mollitia, sequi quaerat libero.
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