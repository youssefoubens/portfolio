import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScale(0.95);  // Mobile
      } else if (window.innerWidth < 1024) {
        setScale(1);     // Tablet
      } else {
        setScale(1.05);  // Desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ProjectsProvider>
      <motion.div 
        style={{ 
          minHeight: "100vh",
          width: "100%",
          transformOrigin: "center",
        }}
        initial={{ 
          opacity: 0, 
          scale: 0.95 
        }}
        animate={{ 
          opacity: 1, 
          scale: scale 
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.6,
          delay: 0.15,
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 mt-5 sm:mt-10 h-screen sm:h-auto"
      >
        <ProjectsGrid />
      </motion.div>
    </ProjectsProvider>
  );
};

export default Projects;