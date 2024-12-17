import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from "@fortawesome/free-brands-svg-icons"
import { Project1, Project2, Project3, Project_MakeUBurger, Project_ToDo } from "../assets/images"


// export const listNav = (['home', 'skills', 'projects', 'contacts'])
export const listNav = [
  {
    value: 'home',
    name: 'Início', 
  },
  {
    value: 'skills',
    name: 'Habilidades', 
  },
  {
    value: 'projects',
    name: 'Projectos', 
  },
  {
    value: 'contacts',
    name: 'Contactos', 
  },
]

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
    name:'Website Inspirado na Nike – Tailwind CSS',
    des:'Um projeto focado em explorar e aplicar boas práticas de UI/UX, responsividade e desenvolvimento semântico utilizando Tailwind CSS.',
    mission:'Aprimoramento de UI/UX, Uso semântico do HTML, Design responsivo', 
    language:'HTML5, CSS3, Tailwind',
    images:Project2,
    link:'https://nike-website01.netlify.app/'
  },
  {
    name:'Make your Burger - Cardápio Digital e Pedidos Online',
    des:'Sistema de cardápio digital e gestão de pedidos de hambúrgueres, permitindo que os clientes escolham seus itens e realizem pedidos diretamente pela interface.',
    mission:'Cardápio interativo, Gestão de pedidos em tempo real, Facilidade de personalização', 
    language:'Vue.js, JSON Server',
    images:Project_MakeUBurger,
    link: 'https://make-u-burger.netlify.app/'
  },
  {
    name:'Gerenciador de Tarefas Simples',
    des:'Aplicativo para organizar tarefas, com funcionalidades para adicionar, editar e marcar como concluídas, facilitando o gerenciamento diário.',
    mission:'Gerenciamento de tarefas diárias, Armazenamento local', 
    language:'Vue.js, Vuetify, Localbase',
    images:Project_ToDo,
    link: 'https://vue-todoo000.netlify.app/'
  },
  {
    name:'Alarme Monitorado + E-commerce',
    des:'Solução integrada de monitoramento em tempo real e gestão de vendas online, com ESP-CAM e Arduino para captura de imagens e relatórios detalhados.',
    mission:'Gestão eficiente de vendas, Monitoramento em tempo real', 
    language:'C++ (ESP-CAM e Arduino), Laravel',
    images:Project1,
    link:'#'
  },
  {
    name:'Sistema de Gestão de RH',
    des:'Plataforma desenvolvida para centralizar e otimizar processos de recursos humanos, trazendo organização e eficiência para empresas.',
    mission:'Centralização de informações, Automação de processos,Gestão eficiente de equipes ', 
    language:'HTML5, CSS3, Laravel',
    images:Project3,
    link:'#'
  },
]

export const listContacts = [
  {
    icon: '',
    title: 'Email', 
    value: 'mailto:adowalmaadao@gmailcom',
    label: 'adowalmaadao@gmailcom'
  },
  {
    icon: '',
    title: 'Linkedin', 
    value: 'https://www.linkedin.com/in/adowalma-adao/',
    label: 'https://www.linkedin.com/in/adowalma-adao/'
  },
  {
    icon: '',
    title: 'GitHub', 
    value: 'https://github.com/Adowalma',
    label: 'https://github.com/Adowalma'
  },
]