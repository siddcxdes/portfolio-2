import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout, Hero, About, Skills, Jobs, Featured, Projects, Contact } from './components';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <main className="fillHeight">
          <Hero />
          <About />
          <Featured />
          <Skills />
          <Jobs />
          <Projects />
          <Contact />
        </main>
      </Layout>
    </Router>
  );
};

export default App;
