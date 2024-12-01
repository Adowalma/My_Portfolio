import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from "@fortawesome/free-brands-svg-icons"
import { Project1, Project2, Project3 } from "../assets/images"


export const listNav = (['home', 'skills', 'projects', 'contacts'])

export const listSkills = [
  {
    name: 'HTML',
    des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptates fugiat tenetur ducimus sapiente odit deserunt magnam accusantium saepe. Veniam vitae explicabo aut itaque dicta velit quod voluptates iusto suscipit.',
    icon: faHtml5
  },
  {
    name: 'Css',
    des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptates fugiat tenetur ducimus sapiente odit deserunt magnam accusantium saepe. Veniam vitae explicabo aut itaque dicta velit quod voluptates iusto suscipit.',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptates fugiat tenetur ducimus sapiente odit deserunt magnam accusantium saepe. Veniam vitae explicabo aut itaque dicta velit quod voluptates iusto suscipit.',
    icon: faJs
  },
  {
    name: 'ReactJs',
    des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptates fugiat tenetur ducimus sapiente odit deserunt magnam accusantium saepe. Veniam vitae explicabo aut itaque dicta velit quod voluptates iusto suscipit.',
    icon: faReact
  },
  {
    name: 'VueJS',
    des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptates fugiat tenetur ducimus sapiente odit deserunt magnam accusantium saepe. Veniam vitae explicabo aut itaque dicta velit quod voluptates iusto suscipit.',
    icon: faVuejs
  },
  {
    name: 'Laravel',
    des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptates fugiat tenetur ducimus sapiente odit deserunt magnam accusantium saepe. Veniam vitae explicabo aut itaque dicta velit quod voluptates iusto suscipit.',
    icon: faLaravel
  },
]

export const listProjects = [
  {
    name:'Sistema de alarme Monitorado + E-commerce',
    des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptates fugiat tenetur ducimus sapiente odit deserunt magnam accusantium saepe. Veniam vitae explicabo aut itaque dicta velit quod voluptates iusto suscipit.',
    mission:'Back-end Developer, hardware and software connection, Esp-cam Arduino integration', 
    language:'HTML5, CSS3, Laravel',
    images:Project1
  },
  {
    name:'Project Real-time chating in website',
    des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptates fugiat tenetur ducimus sapiente odit deserunt magnam accusantium saepe. Veniam vitae explicabo aut itaque dicta velit quod voluptates iusto suscipit.',
    mission:'Back-end Developer, system analysus and design', 
    language:'HTML5, CSS3, React JS, Laravel',
    images:Project2
  },
  {
    name:'Project Real-time chating in website',
    des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptates fugiat tenetur ducimus sapiente odit deserunt magnam accusantium saepe. Veniam vitae explicabo aut itaque dicta velit quod voluptates iusto suscipit.',
    mission:'Back-end Developer, system analysus and design', 
    language:'HTML5, CSS3, React JS, Laravel',
    images:Project3
  },
]

export const listContacts = [
  {
    icon: '',
    title: 'Email', 
    value: 'adowalmaadao@gmailcom'
  },
  {
    icon: '',
    title: 'Linkedin', 
    value: 'https://www.linkedin.com/in/adowalma-adao/'
  },
  {
    icon: '',
    title: 'GitHub', 
    value: 'https://github.com/Adowalma'
  },
]