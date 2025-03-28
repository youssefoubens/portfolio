import { useState, useEffect } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { NavLink,Link } from 'react-router-dom';
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

  // Function to toggle the menu
  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  // Function to explicitly close the menu
  function closeMenu() {
    setShowMenu(false);
  }

  function showHireMeModal() {
    if (!showModal) {
      document.documentElement.classList.add('overflow-y-hidden');
      setShowModal(true);
    } else {
      document.documentElement.classList.remove('overflow-y-hidden');
      setShowModal(false);
    }
  }

  // Handle navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setNavbarHidden(true);
      } else {
        setNavbarHidden(false);
      }
      setLastScrollY(window.scrollY);

      // Close the mobile menu on scroll if it's open
      if (showMenu) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, showMenu]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="nav"
        className={` fixed w-full top-0 left-0 z-50 shadow-sm transition-transform duration-300 ${
          navbarHidden ? '-translate-y-full' : 'translate-y-0'
        } ${activeTheme === 'dark' ? 'dark-mode' : 'navbar-light'}`}
      >
        <div className="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Brand */}
            <div>
              <NavLink to="/" onClick={closeMenu}>
                <div className="navbar-brand">
                  <span>Youssef Ouben Said</span>
                </div>
              </NavLink>
            </div>

            {/* Theme Switcher and Hamburger for Mobile */}
            <div className="flex items-center space-x-4">
              <div
                onClick={() => setTheme(activeTheme)}
                aria-label="Theme Switcher"
                className="block sm:hidden bg-primary-light dark:bg-ternary-dark p-2 rounded-xl cursor-pointer"
              >
                {activeTheme === 'dark' ? (
                  <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
                ) : (
                  <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
                )}
              </div>
              <button
                onClick={toggleMenu}
                type="button"
                className="sm:hidden focus:outline-none"
                aria-label="Hamburger Menu"
              >
                {showMenu ? (
                  <FiX className="h-7 w-7 text-white" />
                ) : (
                  <FiMenu className="h-7 w-7 text-white" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center  space-x-10">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg text-white hover:text-gray-300 nav-link ${isActive ? 'nav-link-active' : ''}`
                }
                aria-label="Home"
              >
                HOME
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `text-lg text-white hover:text-gray-300 nav-link ${isActive ? 'nav-link-active' : ''}`
                }
                aria-label="My Work"
              >
                Projects
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-lg text-white hover:text-gray-300 nav-link ${isActive ? 'nav-link-active' : ''}`
                }
                aria-label="Blog"
              >
                About
              </NavLink>
              
            </div>
             {/* Theme switcher large screen */}
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

          {/* Mobile Menu */}
          <div
            className={`sm:hidden mobile-menu ${
              showMenu ? 'block' : 'hidden'
            } bg-white dark:bg-ternary-dark shadow-lg p-5 mt-2 z-50`}
          >
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light py-2 ${
                  isActive ? 'nav-link-active' : ''
                }`
              }
              aria-label="Home"
            >
              HOME
            </NavLink>
            <NavLink
              to="/projects"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light py-2 border-t border-primary-light dark:border-secondary-dark ${
                  isActive ? 'nav-link-active' : ''
                }`
              }
              aria-label="My Work"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light py-2 border-t border-primary-light dark:border-secondary-dark ${
                  isActive ? 'nav-link-active' : ''
                }`
              }
              aria-label="Blog"
            >
              About
            </NavLink>
            <span
              onClick={() => {
                showHireMeModal();
                closeMenu();
              }}
              className="block text-md bg-indigo-500 hover:bg-indigo-600 text-white rounded-sm px-4 py-2 mt-2 w-full text-center"
            >
              <Button title="Let's Talk" />
            </span>
          </div>
        </div>
      </motion.nav>
      <div className={`main-content ${activeTheme === 'dark' ? 'dark-mode' : ''}`}>
        {/* Your main content goes here */}
      </div>
    </>
  );
};

export default AppHeader;