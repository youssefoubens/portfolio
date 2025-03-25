import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import '../../css/ProjectRelatedProjects.css'; // Import the CSS file

const ProjectRelatedProjects = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	// Handle case where project data is missing
	if (!singleProjectData || !singleProjectData.RelatedProject) {
		return <p>No related projects found.</p>;
	}

	return (
		<div className="project-related-container">
			<p className="project-related-title">
				{singleProjectData.RelatedProject.title}
			</p>

			<div className="project-grid">
				{singleProjectData.RelatedProject.Projects?.map((project) => (
					<div key={project.id} className="project-item">
						<img
							src={project.img}
							className="project-image"
							alt={project.title}
						/>
						<div className="project-overlay">
							<p className="project-overlay-text">{project.title}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;