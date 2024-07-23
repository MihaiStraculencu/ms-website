import { Tooltip } from "react-tooltip";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="flex flex-shrink-0 items-center"
      >
        <img src={logo} alt="logo" className="mx-2 w-30 h-8" />
      </motion.div>
      <div className="margin-8 flex items-center justify-center gap-4 text-2xl">
        <a
          data-tooltip-id="Linkedin"
          data-tooltip-content="Linkedin"
          href="https://www.linkedin.com/in/straculencu-mihai/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-105 duration-200"
        >
          <FaLinkedin />
        </a>
        <Tooltip id="Linkedin" place="top" type="dark" effect="solid" />
        <a
          data-tooltip-id="Github"
          data-tooltip-content="Github"
          href="https://github.com/MihaiStraculencu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-105 duration-200"
        >
          <FaGithub />
        </a>
        <Tooltip id="Github" place="bottom" type="dark" effect="solid" />

        <a
          data-tooltip-id="CV"
          data-tooltip-content="Download CV"
          href="/Straculencu_Mihai_CV.pdf"
          download="Straculencu_Mihai_CV.pdf"
          className="hover:cursor-pointer transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-105 duration-200"
          aria-label="Download CV"
        >
          <BsFileEarmarkPerson />
        </a>
        <Tooltip id="CV" place="bottom" type="dark" effect="solid" />
      </div>
    </nav>
  );
};

export default Navbar;
