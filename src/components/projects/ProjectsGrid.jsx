import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';
import '../../css/projectStyles.css';

const ProjectsGrid = () => {
    const {
        projects,
        searchProject,
        setSearchProject,
        searchProjectsByTitle,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
    } = useContext(ProjectsContext);

    return (
        <section className="project_container py-5 sm:py-10 mt-5 sm:mt-10">
            <div className="title_element">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Projects
                </p>
            </div>

            <div className="mt-10 sm:mt-16">
                <h3 className="font-general-regular text-center text-ternary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
                    Search projects by title or filter by category
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
                    <div className="flex w-full sm:w-auto justify-center sm:justify-start gap-2">
                        <span className="hidden sm:flex items-center bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
                            <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
                        </span>
                        <input
                            onChange={(e) => {
                                setSearchProject(e.target.value);
                            }}
                            className="w-full sm:w-auto font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-ternary-dark dark:text-ternary-light focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                            id="name"
                            name="name"
                            type="search"
                            required=""
                            placeholder="Search Projects"
                            aria-label="Name"
                        />
                    </div>

                    <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-3 sm:mt-0">
                        <ProjectsFilter setSelectProject={setSelectProject} />
                    </div>
                </div>
            </div>

            <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mt-6">
                {selectProject
                    ? selectProjectsByCategory.map((project) => (
                        <ProjectSingle
                            key={project.id}
                            title={project.title}
                            category={project.category}
                            image={project.img}
                            id={project.id}
                        />
                    ))
                    : searchProject
                    ? searchProjectsByTitle.map((project) => (
                        <ProjectSingle
                            key={project.id}
                            title={project.title}
                            category={project.category}
                            image={project.img}
                            id={project.id}
                        />
                    ))
                    : projects.map((project) => (
                        <ProjectSingle
                            key={project.id}
                            title={project.title}
                            category={project.category}
                            image={project.img}
                            id={project.id}
                        />
                    ))}
            </div>
        </section>
    );
};

export default ProjectsGrid;