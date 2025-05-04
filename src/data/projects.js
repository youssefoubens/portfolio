// Import images

import WebImage2 from '../images/vinciapp2.png';
import MobileImage1 from '../images/machinlearning.png';

import UIImage1 from '../images/tetrice.png';
import chatbot from '../images/chatbot.png';
import SortingAnalysisImage from '../images/com.png';
import JobApplicationGeneratorImage from '../images/jobhome.png';

export const projectsData = [
	{
		id: 1,
		title: 'Tomato Quality Assessment',
		category: 'Machine Learning',
		img: MobileImage1,
		ProjectHeader: {
			title: 'Image Classification for Tomato Quality',
			publishDate: '2023',
			tags: 'AI / Machine Learning',
		},
	},
	{
		id: 2,
		title: 'Tetrice Game',
		category: 'Game Development',
		img: UIImage1,
		ProjectHeader: {
			title: 'Intermediate C++ Game Development',
			publishDate: '2023',
			tags: 'C++ / Game Design',
		},
	},
	{
		id: 3,
		title: 'Project Management Application',
		category: 'Web Application',
		img: WebImage2,
		ProjectHeader: {
			title: 'JavaFX and Spring Boot Application',
			publishDate: '2024',
			tags: 'Java / Full Stack',
		},
	},
	{
		id: 4,
		title: 'ENSET Mohammedia Chatbot',
		category: 'AI Application',
		img: chatbot,
		ProjectHeader: {
			title: 'Educational Chatbot with RAG Architecture',
			publishDate: '2025',
			tags: 'Java / AI / Full Stack',
		},
	},
	{
		id: 5,
		title: 'Sorting Algorithm Performance Analysis',
		category: 'Algorithm Analysis',
		img: SortingAnalysisImage,
		ProjectHeader: {
			title: 'Performance Benchmarking of Sorting Algorithms',
			publishDate: '2024',
			tags: 'C / Algorithm Analysis / Performance Optimization',
		},
	},
	
	{
	id: 6,
	title: 'Job Application Generator',
	category: 'AI-Powered Web App',
	img: JobApplicationGeneratorImage, // Replace with actual image import
	ProjectHeader: {
		title: 'AI-Powered Job Application Generator',
		publishDate: '2025',
		tags: 'Next.js / OpenAI / Tailwind CSS / Job Automation',
	},
}

	
];