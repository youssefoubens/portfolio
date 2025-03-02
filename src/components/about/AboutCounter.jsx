import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 2, duration: 2 }); // Years of experience
	useCountUp({ ref: 'githubReposCounter', end: 17, duration: 2 }); // GitHub Repositories
	useCountUp({ ref: 'feedbackCounter', end: 85, duration: 2 }); // Positive Feedback Percentage
	useCountUp({ ref: 'projectsCounter', end: 15, duration: 2 }); // Projects Completed

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of Experience"
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="GitHub Repositories"
					counter={<span id="githubReposCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Positive Feedback"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title="Projects Completed"
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;