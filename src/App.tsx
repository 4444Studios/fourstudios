import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Engagements from './components/Engagements';
import Contact from './components/Contact';
import MatrixBackground from './components/MatrixBackground';
import ProjectForm from './components/ProjectForm';

function App() {
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleOpenProjectForm = (pkg: string = '') => {
    setSelectedPackage(pkg);
    setIsProjectFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-vampire-black text-white font-sans selection:bg-blood-red selection:text-white relative">
      <div className="fixed inset-0 z-0">
        <MatrixBackground opacity={0.6} />
      </div>
      <div className="fixed inset-0 z-[1] matrix-surface" />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Portfolio />
        <Engagements onOpenProjectForm={handleOpenProjectForm} />
        <Contact onOpenProjectForm={() => handleOpenProjectForm()} />
      </div>
      {isProjectFormOpen && (
        <ProjectForm
          onClose={() => setIsProjectFormOpen(false)}
          initialPackage={selectedPackage}
        />
      )}
    </div>
  );
}

export default App;
