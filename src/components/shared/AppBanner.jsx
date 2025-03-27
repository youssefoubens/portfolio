import { useEffect, useState } from 'react';

import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import developerLight from '../../images/developer.svg';
import developerDark from '../../images/developer-dark.svg';
import { motion } from 'framer-motion';

import { FiArrowDownCircle } from 'react-icons/fi';
const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();
  const [developerImage, setDeveloperImage] = useState(developerDark);

  useEffect(() => {
    setDeveloperImage(activeTheme === 'dark' ? developerLight : developerDark);
  }, [activeTheme]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className="app-banner flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 px-4 sm:px-8 lg:px-12"
    >
      <div className="banner-content w-full md:w-1/2 text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.1,
          }}
          className="banner-heading font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
        >
          Software Engineer | Cloud & AI Enthusiast
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.2,
          }}
          className="banner-description font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal  text-ternary-dark dark:text-primary-light "
        >
          Problem-solving drives my growth. As a Software Engineering student at ENSET Mohammedia, I thrive on tackling challenges in full-stack development, AI, and distributed systems.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.3,
          }}
          className="banner-actions flex justify-center sm:justify-start gap-4 mt-8"
        >
         <a
						download="OubenSaidYoussef-CV.pdf"
						href="/files/OubenSaidYoussef-CV.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>
         
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className="banner-illustration w-full sm:w-1/2 text-right mt-8 sm:mt-0"
      >
        <img
          src={developerImage}
          alt="Developer Illustration"
          className="max-w-full h-auto"
        />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;