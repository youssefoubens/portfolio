import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';

import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';

const ProjectSingle = () => {

	
	return (
		
<motion.div 
  style={{ 
    minHeight: "100vh",
    width: "100%",
  }}
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    ease: 'easeInOut',
    duration: 0.6,
    delay: 0.15,
  }}
  className="container mx-auto px-4 sm:px-6 lg:px-8 
    mt-5 sm:mt-10 
    scale-100 md:scale-100 lg:scale-100 
    transform transition-transform duration-300
    h-screen sm:h-auto"
>
  <SingleProjectProvider>
    <ProjectHeader />
    <ProjectGallery />
    <ProjectInfo />
  </SingleProjectProvider>
</motion.div>
		
	);
};

export default ProjectSingle;
