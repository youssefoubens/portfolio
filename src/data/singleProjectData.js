// Import images
import TetrisImage from '../images/tetrice.png';
import MLProjectImage from '../images/machinlearning.png';
import JavaAppImage from '../images/vinciapp2.png';
// Import icons
import {
	FiLinkedin,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Machine Learning Tomato Quality Evaluation',
		publishDate: 'Jan 15, 2024',
		tags: 'Machine Learning / AI',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Tomato Quality Evaluation',
			img: MLProjectImage,
		},
		{
			id: 2,
			title: 'Machine Learning Model',
			img: MLProjectImage,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{
				id: 1,
				title: 'Project Type',
				details: 'Machine Learning & Image Classification',
			},
			{
				id: 2,
				title: 'Technologies Used',
				details: 'Python, TensorFlow, Google Colab',
			},
			{
				id: 3,
				title: 'Project Goal',
				details: 'Develop a model to classify tomatoes into Fresh, Defective, Ripe, or Immature using image processing.',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'The goal of this project was to leverage machine learning for agricultural quality control, providing a fast and efficient way for farmers and vendors to assess tomato quality.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Python',
					'TensorFlow',
					'Google Colab',
					'OpenCV',
				],
			},
		],
		ProjectDetailsHeading: 'Challenges & Solutions',
		ProjectDetails: [
			{
				id: 1,
				details:
					'One of the challenges was handling variations in lighting and image quality. This was addressed by applying image preprocessing techniques such as histogram equalization and contrast enhancement.',
			},
			{
				id: 2,
				details:
					'The model needed to differentiate between subtle variations in ripeness. Data augmentation and fine-tuning of the neural network helped improve classification accuracy.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/in/ouben-said-youssef/',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Tetris Game in C++',
				img: TetrisImage,
			},
			
			{
				id: 2,
				title: 'Java-based Cost Estimation App',
				img: JavaAppImage,
			},
		],
	},
};
