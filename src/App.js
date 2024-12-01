import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Contacts, Home, NavBar, Projects, Skills } from './components';

function App() {
  const projectId = process.env.REACT_APP_VERCEL_PROJECT_ID;
  const secretKey = process.env.REACT_APP_VERCEL_SECRET_KEY;
  const url = process.env.REACT_APP_VERCEL_URL;
  return (
    <main>
      <SpeedInsights
        projectId={projectId}
        secret={secretKey}
        url={url}
      />

      <NavBar />

      <Home />

      <Skills />

      <Projects />

      <Contacts />

    </main>
  );
}

export default App;
