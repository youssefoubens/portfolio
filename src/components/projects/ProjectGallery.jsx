import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { selectedProject } = useContext(SingleProjectContext);

	// Handle case where project data is not found
	if (!selectedProject) {
		return <p className="text-red-500 text-lg">Project not found.</p>;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{selectedProject.ProjectImages.map((project) => (
				<div className="mb-10 sm:mb-0" key={project.id}>
					<img
						src={project.img}
						className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
						alt={project.title}
					/>
				</div>
			))}
		</div>
	);
};

export default ProjectGallery;
