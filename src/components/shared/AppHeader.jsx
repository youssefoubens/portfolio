import { useState, useEffect } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { motion } from 'framer-motion';
import Button from '../reusable/Button';
import '../../css/Navbar.css';

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarHidden, setNavbarHidden] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function showHireMeModal() {
    if (!showModal) {
      document.getElementsByTagName('html')[0].classList.add('overflow-y-hidden');
      setShowModal(true);
    } else {
      document.getElementsByTagName('html')[0].classList.remove('overflow-y-hidden');
      setShowModal(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 80) {
          // Scrolling down
          setNavbarHidden(true);
        } else {
          // Scrolling up
          setNavbarHidden(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.nav
     
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="nav"
        className={`navbar fixed w-full top-0 left-0 z-50 shadow-sm transition-transform duration-300 ${
          navbarHidden ? '-translate-y-full' : 'translate-y-0'
        } ${activeTheme === 'dark' ? 'dark-mode' : 'navbar-light'}`}
      >
        <div className="sm:container sm:mx-auto">
          <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-4">
            {/* Header menu links and small screen hamburger menu */}
            <div className="flex justify-between items-center nav-link px-4 sm:px-0">
              <div>
                <Link to="/">
                  <div>
                    <span>Youssef Ouben Said</span>
                  </div>
                </Link>
              </div>

              {/* Theme switcher small screen */}
              <div
                onClick={() => setTheme(activeTheme)}
                aria-label="Theme Switcher"
                className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
              >
                {activeTheme === 'dark' ? (
                  <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
                ) : (
                  <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
                )}
              </div>

              {/* Small screen hamburger menu */}
              <div className="sm:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="focus:outline-none"
                  aria-label="Hamburger Menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 fill-current text-white"
                  >
                    {showMenu ? (
                      <FiX className="text-3xl" />
                    ) : (
                      <FiMenu className="text-3xl" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Header links small screen */}
            <div
              className={
                showMenu
                  ? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none bg-white dark:bg-ternary-dark'
                  : 'hidden'
              }
            >
              <Link
                to="/"
                className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
                aria-label="Home"
              >
                HOME
              </Link>
              <Link
                to="/projects"
                className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                aria-label="My Work"
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                aria-label="Blog"
              >
                About
              </Link>
              <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                <span
                  onClick={showHireMeModal}
                  className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
                  aria-label="Let's Talk Button"
                >
                  <Button title="Let's Talk" />
                </span>
              </div>
            </div>

            {/* Header links large screen */}
            <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
              <Link
                to="/"
                className="block text-left text-lg text-white hover:text-gray-300 sm:mx-4 mb-2 sm:py-2 nav-link"
                aria-label="Home"
              >
                HOME
              </Link>
              <Link
                to="/projects"
                className="block text-left text-lg text-white hover:text-gray-300 sm:mx-4 mb-2 sm:py-2 nav-link"
                aria-label="My Work"
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="block text-left text-lg text-white hover:text-gray-300 sm:mx-4 mb-2 sm:py-2 nav-link"
                aria-label="Blog"
              >
                About
              </Link>
            </div>

            {/* Header right section buttons */}
            <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
              <div className="hidden md:flex">
                <span
                  className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300 lets-talk-button"
                  aria-label="Let's Talk Button"
                >
                  <Link to="/contact">Let's Talk</Link>
                </span>
              </div>

              {/* Theme switcher large screen */}
              <div
                onClick={() => setTheme(activeTheme)}
                aria-label="Theme Switcher"
                className="ml-8 bg-white dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer theme-switcher"
              >
                {activeTheme === 'dark' ? (
                  <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
                ) : (
                  <FiSun className="text-gray-700 hover:text-gray-900 text-xl" />
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main content with padding to prevent overlap */}
      <div className={`main-content ${activeTheme === 'dark' ? 'dark-mode' : ''}`}>
        {/* Your main content goes here */}
      </div>
    </>
  );
};

export default AppHeader;