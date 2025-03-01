function AppFooterCopyright() {
	return (
	  <div className="font-general-regular flex justify-center items-center text-center">
		<div className="text-lg text-ternary-dark dark:text-ternary-light">
		  &copy; {new Date().getFullYear()}
		  <a
			href="https://github.com/your-github-username/your-portfolio-repo" // Replace with your actual GitHub repository link
			target="__blank"
			className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
		  >
			React & Tailwind CSS Portfolio
		  </a>
		  .
		  <a
			href="https://www.linkedin.com/in/ouben-said-youssef/" // You can replace this with your personal website if available
			target="__blank"
			className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
		  >
			Ouben Said Youssef
		  </a>
		</div>
	  </div>
	);
  }
  
  export default AppFooterCopyright;
  