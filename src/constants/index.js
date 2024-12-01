import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from "@fortawesome/free-brands-svg-icons"
import { Project1, Project2, Project3 } from "../assets/images"


export const listNav = (['home', 'skills', 'projects', 'contacts'])

export const listSkills = [
  {
    name: 'HTML',
    des:'Criação de estruturas sólidas e semânticas para uma web acessível e funcional. Projetos pessoais e colaborativos ajudaram a refinar essa base essencial.',
    icon: faHtml5
  },
  {
    name: 'Css',
    des:'Desenvolvimento de designs que combinam estética e responsividade, garantindo uma experiência fluida em qualquer dispositivo.',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des:'Adição de dinamismo e funcionalidade, explorada em projetos que buscam melhorar a interação do usuário. Uma linguagem que proporciona aprendizado constante e novas possibilidades.',
    icon: faJs
  },
  {
    name: 'ReactJs',
    des:'Ferramenta confiável para criar interfaces modernas e escaláveis, amplamente utilizada em projetos experimentais e práticos',
    icon: faReact
  },
  {
    name: 'VueJS',
    des:'Framework explorado para aplicações ágeis e eficientes, usado em projetos que reforçaram conceitos de organização e escalabilidade.',
    icon: faVuejs
  },
  {
    name: 'Laravel',
    des:'Base para construção de sistemas robustos e organizados, com estudos voltados ao back-end, aplicando lógicas confiáveis e flexíveis.',
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