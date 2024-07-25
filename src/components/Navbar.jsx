import React, { useState, useEffect, useCallback } from "react";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFileEarmarkPerson } from "react-icons/bs";
import logo from "../assets/logo.png";

const NavbarLink = ({
  href,
  ariaLabel,
  tooltipId,
  tooltipContent,
  icon: Icon,
}) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    data-tooltip-id={tooltipId}
    data-tooltip-content={tooltipContent}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl hover:cursor-pointer transition-all duration-150 hover:text-indigo-400"
    aria-label={ariaLabel}
  >
    <Icon />
    <Tooltip
      id={tooltipId}
      place="bottom"
      className="mt-1 font-thin text-sm"
      style={{ fontSize: "14px" }}
    />
  </motion.a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`lg:mb-32 mb-10 py-4 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container px-8 mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-shrink-0 items-center"
        >
          <img src={logo} alt="logo" className="w-30 h-8" />
        </motion.div>
        <div className="flex items-center justify-center gap-6">
          <NavbarLink
            href="https://www.linkedin.com/in/straculencu-mihai/"
            ariaLabel="LinkedIn Profile"
            tooltipId="Linkedin"
            tooltipContent="LinkedIn"
            icon={FaLinkedin}
          />
          <NavbarLink
            href="https://github.com/MihaiStraculencu"
            ariaLabel="GitHub Profile"
            tooltipId="Github"
            tooltipContent="GitHub"
            icon={FaGithub}
          />
          <NavbarLink
            href="/Straculencu_Mihai_CV.pdf"
            ariaLabel="Download CV"
            tooltipId="CV"
            tooltipContent="Download CV"
            icon={BsFileEarmarkPerson}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
