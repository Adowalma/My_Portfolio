import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Contacts, Home, NavBar, Projects, Skills } from './components';

function App() {
  return (
    <main>
      <SpeedInsights/>

      <NavBar/>

      <Home/>

      <Skills/>

      <Projects/>

      <Contacts/>
      
    </main>
  );
}

export default App;
