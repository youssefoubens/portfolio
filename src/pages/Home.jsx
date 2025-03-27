// Home.jsx
import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';
import SkillsTooling from './skilles';
import ExperienceTimeline from './experience';
import '../css/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar-spacer" /> {/* Spacer for the fixed navbar */}
      <div className="clip-wrapper">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AppBanner />
        </div>
      </div>

      <hr className="custom-line my-8 " />

    <div className="container mx-auto p-6" >
          <ProjectsProvider>
            <ProjectsGrid />
          </ProjectsProvider>
    </div>
     

      <div className="mt-8 sm:mt-10 flex justify-center">
        <Link
          to="/projects"
          className="more-projects-button"
          aria-label="More Projects"
        >
          <Button title="More Projects" />
        </Link>
      </div>

      <hr className="custom-line my-8" />

      <div className="container mx-auto p-6">
        <ExperienceTimeline />

      </div>
      <hr className="custom-line my-8" />
      <div className="container mx-auto p-6">
    
        <SkillsTooling />

      </div>
    </div>
  );
};

export default Home;