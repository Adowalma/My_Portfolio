import React, { useRef } from 'react'
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptates fugiat tenetur ducimus sapiente odit deserunt magnam accusantium saepe. Veniam vitae explicabo aut itaque dicta velit quod voluptates iusto suscipit.
        </div>
        <a href="/CV_AdowalmaAdao.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="/avatar-removebg.png" alt="" />
          <div className="info">
            <div>Developer</div>
            <div>Angolan</div>
            <div>27/06</div>
            <div>Female</div>
          </div>
        </div>
        </div> 
    </section>
  )
}

export default Home