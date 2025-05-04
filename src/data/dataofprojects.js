// Import images
import MLProjectImage from '../images/machinlearning.png';
import GameImage from '../images/tetrice.png';
import GameImage2 from '../images/tetrice1.png';
import home from '../images/appvinci.png';
import final from '../images/vinciapp2.png';    
import ChatbotImage from '../images/chatbot.png';
import login from '../images/chatlogin.png';
import sginup from '../images/chatsignup.png';
import SortingAnalysisImage from '../images/com.png';
import HomeImage from '../images/jobhome.png';
import GenerateImage from '../images/jobgenerate.png';
import HistoryImage from '../images/jobhistory.png';
import LoginImage from '../images/joblogin.png';
import SignupImage from '../images/jobsignup.png';
// Import icons
import { FiLinkedin } from 'react-icons/fi';

export const dataofprojects = [
    {
        id: 1,
        ProjectHeader: {
            title: 'Machine Learning Tomato Quality Evaluation',
            publishDate: 'Jan 15, 2024',
            tags: 'Machine Learning / AI',
        },
        ProjectImages: [
            { id: 1, title: 'Tomato Quality Evaluation', img: MLProjectImage },
       
        ],
        ProjectInfo: {
            ClientHeading: 'About Project',
            CompanyInfo: [
                { id: 1, title: 'Project Type', details: 'Machine Learning & Image Classification' },
                { id: 2, title: 'Technologies Used', details: 'Python, TensorFlow, Google Colab' },
                { id: 3, title: 'Project Goal', details: 'Classify tomatoes using image processing.' },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Leveraging ML for agricultural quality control.',
            Technologies: [
                { title: 'Tools & Technologies', techs: ['Python', 'TensorFlow', 'Google Colab', 'OpenCV'] },
            ],
            ProjectDetailsHeading: 'Challenges & Solutions',
            ProjectDetails: [
                { id: 1, details: 'Handled lighting variations using preprocessing.' },
                { id: 2, details: 'Fine-tuned neural network for better accuracy.' },
            ],
            SocialSharingHeading: 'Share This',
            SocialSharing: [
                { id: 1, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/in/ouben-said-youssef/' },
            ],
        },
        RelatedProject: { title: 'Related Projects', Projects: [] },
    },
    {
        id: 2,
        ProjectHeader: {
            title: 'AI-Assisted Educational Pattern-Matching Game',
            publishDate: '2025',
            tags: 'C++ / Game Development / AI',
        },
        ProjectImages: [
            { id: 1, title: 'Game UI', img: GameImage },
            { id: 2, title: 'Game UI', img: GameImage2 },
        ],
        ProjectInfo: {
            ClientHeading: 'About Project',
            CompanyInfo: [
                { id: 1, title: 'Project Type', details: 'Educational Game Development' },
                { id: 2, title: 'Technologies Used', details: 'C/C++, SFML, Random Forest AI' },
                { id: 3, title: 'Project Goal', details: 'Develop an interactive game that enhances pattern recognition skills while integrating AI assistance using Random Forest.' },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 
                'This project focuses on creating an engaging educational game where players arrange pieces based on their shape and color to form repeating patterns. The game includes an AI assistant powered by a Random Forest algorithm to provide hints, predict player moves, and optimize gameplay suggestions.',
            Technologies: [
                { title: 'Tools & Technologies', techs: ['C/C++', 'SFML', 'Random Forest AI'] },
            ],
            ProjectDetailsHeading: 'Challenges & Solutions',
            ProjectDetails: [
                { id: 1, details: 'Implemented a dynamic game logic that supports shape and color-based pattern formation.' },
                { id: 2, details: 'Utilized SFML for smooth rendering and user interaction.' },
                { id: 3, details: 'Developed an AI assistant using a Random Forest model to analyze player moves and provide hints.' },
                { id: 4, details: 'Trained the AI on gameplay data to improve hint accuracy and user engagement.' },
            ],
            SocialSharingHeading: 'Share This',
            SocialSharing: [
                { id: 1, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/in/ouben-said-youssef/' },
            ],
        },
        RelatedProject: { title: 'Related Projects', Projects: [] },
    }
    ,
    {
        id: 3,
        ProjectHeader: {
            title: 'Project Management & Cost Estimation Application',
            publishDate: '2024',
            tags: 'Java / Full Stack ',
        },
        ProjectImages: [
            { id: 1, title: 'Project Management App UI', img: home },
            { id: 1, title: 'Project Management App UI', img: final },
        ],
        ProjectInfo: {
            ClientHeading: 'About Project',
            CompanyInfo: [
                { id: 1, title: 'Project Type', details: 'Enterprise Software Development' },
                { id: 2, title: 'Technologies Used', details: 'JavaFX, Spring Boot, Spring Data JPA, MySQL' },
                { id: 3, title: 'Project Goal', details: 'Enhance project management and cost estimation efficiency.' },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 
                'The objective of this project was to develop a structured and scalable project management system for Vinci Group. The application simplifies cost estimation processes, organizes project data efficiently, and provides a user-friendly interface for enhanced workflow management. Future plans include AI-powered analytics for better decision-making.',
            Technologies: [
                { title: 'Tools & Technologies', techs: ['JavaFX', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'AI Integration (Future)'] },
            ],
            ProjectDetailsHeading: 'Challenges & Solutions',
            ProjectDetails: [
                { id: 1, details: 'Developed a JavaFX-based intuitive UI for project visualization and management.' },
                { id: 2, details: 'Integrated Spring Data JPA for efficient and scalable database interactions.' },
                { id: 3, details: 'Optimized project cost estimation through structured data models.' },
                
            ],
            SocialSharingHeading: 'Share This',
            SocialSharing: [
                { id: 1, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/in/ouben-said-youssef/' },
            ],
        },
        RelatedProject: { title: 'Related Projects', Projects: [] },
    },
    
    {
        id: 4,
        ProjectHeader: {
            title: 'Educational Chatbot with RAG Architecture',
            publishDate: '2025',
            tags: 'Java / AI / Full Stack',
        },
        ProjectImages: [
            { id: 1, title: 'Chatbot UI', img: ChatbotImage },
            { id: 2, title: 'login', img: login },
            { id: 3, title: 'sginup', img: sginup },
        ],
        ProjectInfo: {
            ClientHeading: 'About Project',
            CompanyInfo: [
                { id: 1, title: 'Project Type', details: 'AI Chatbot Development' },
                { id: 2, title: 'Technologies Used', details: 'JavaFX, Spring Boot, LLM, FAISS, Elasticsearch' },
                { id: 3, title: 'Project Goal', details: 'Develop an AI-powered educational chatbot for ENSET students.' },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 
                'The goal of this project is to create a multimodal chatbot that leverages Retrieval-Augmented Generation (RAG) to provide students with precise and relevant answers by retrieving information from a structured knowledge base containing course materials, PDFs, and presentations. The chatbot will also support image analysis for extracting information from visual documents.',
            Technologies: [
                { title: 'Tools & Technologies', techs: ['JavaFX', 'Spring Boot', 'Elasticsearch', 'FAISS', 'LLM (GPT-4o, CLIP, LLaVA)'] },
            ],
            ProjectDetailsHeading: 'Challenges & Solutions',
            ProjectDetails: [
                { id: 1, details: 'Implemented a RAG-based system for accurate information retrieval.' },
                { id: 2, details: 'Integrated multimodal AI models for processing text and images.' },
                { id: 3, details: 'Developed a user-friendly JavaFX interface for seamless interactions.' },
                { id: 4, details: 'Optimized search efficiency using Elasticsearch and FAISS.' },
            ],
            SocialSharingHeading: 'Share This',
            SocialSharing: [
                { id: 1, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/in/ouben-said-youssef/' },
            ],
        },
        RelatedProject: { title: 'Related Projects', Projects: [] },
    },
    {
        id: 5,
        ProjectHeader: {
            title: 'Sorting Algorithm Performance Analysis',
            publishDate: '2025',
            tags: 'C / Algorithm Analysis / Performance Optimization',
        },
        ProjectImages: [
            { id: 1, title: 'Sorting Performance Graphs', img: SortingAnalysisImage },
        ],
        ProjectInfo: {
            ClientHeading: 'About Project',
            CompanyInfo: [
                { id: 1, title: 'Project Type', details: 'Algorithm Analysis & Performance Benchmarking' },
                { id: 2, title: 'Technologies Used', details: 'C, GNU Tools, Data Visualization' },
                { id: 3, title: 'Project Goal', details: 'Analyze and compare the efficiency of multiple sorting algorithms.' },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 
                'This project aimed to conduct a detailed performance analysis of various sorting algorithms, including Heapsort, Bubble Sort, Quicksort, Mergesort, Insertion Sort, and Selection Sort. The performance of each algorithm was measured using GNU tools, and comparative graphs were generated to visualize execution time and efficiency under different input sizes.',
            Technologies: [
                { title: 'Tools & Technologies', techs: ['C', 'GNU Tools', 'Data Visualization'] },
            ],
            ProjectDetailsHeading: 'Challenges & Solutions',
            ProjectDetails: [
                { id: 1, details: 'Implemented and optimized multiple sorting algorithms in C for accurate benchmarking.' },
                { id: 2, details: 'Used GNU tools to measure execution time and system resource utilization.' },
                { id: 3, details: 'Generated comparative graphs to illustrate algorithm efficiency under varying conditions.' },
                { id: 4, details: 'Analyzed the impact of input size and distribution on sorting performance.' },
            ],
            SocialSharingHeading: 'Share This',
            SocialSharing: [
                { id: 1, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/in/ouben-said-youssef/' },
            ],
        },
        RelatedProject: { title: 'Related Projects', Projects: [] },
    },
    
   {
  id: 6,
  ProjectHeader: {
    title: 'Job Application Generator',
    publishDate: '2025',
    tags: 'Next.js / OpenAI / Job Automation / Tailwind CSS',
  },
  ProjectImages: [
    { id: 1, title: 'Home Page', img: HomeImage },
    { id: 2, title: 'Generate Application Page', img: GenerateImage },
    { id: 3, title: 'History Page', img: HistoryImage },
    { id: 4, title: 'Login Page', img: LoginImage },
    { id: 5, title: 'Signup Page', img: SignupImage },
  ],
  ProjectInfo: {
    ClientHeading: 'About Project',
    CompanyInfo: [
      { id: 1, title: 'Project Type', details: 'AI-Powered Web Application' },
      { id: 2, title: 'Technologies Used', details: 'Next.js, React, TypeScript, Tailwind CSS, OpenAI API, Supabase' },
      { id: 3, title: 'Project Goal', details: 'Help users generate tailored job applications using their resume and job descriptions.' },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails: 
      'The goal of this project is to streamline the job application process by using AI to analyze job descriptions and resumes, and generate customized application emails. The system works entirely on the frontend using localStorage, without requiring a database.',
    Technologies: [
      { title: 'Tools & Technologies', techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Supabase'] },
    ],
    ProjectDetailsHeading: 'Challenges & Solutions',
    ProjectDetails: [
      { id: 1, details: 'Integrated OpenAI API to analyze resumes and job descriptions for generating tailored emails.' },
      { id: 2, details: 'Used localStorage for temporary data storage, avoiding the need for a backend database.' },
      { id: 3, details: 'Built a clean and responsive UI using Tailwind CSS and React components.' },
      { id: 4, details: 'Ensured secure API key usage via environment variables and `.env.local` setup.' },
    ],
    SocialSharingHeading: 'Share This',
    SocialSharing: [
      { id: 1, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/in/ouben-said-youssef/' },
    ],
  },
  RelatedProject: {
    title: 'Related Projects',
    Projects: [],
  },
}

];
