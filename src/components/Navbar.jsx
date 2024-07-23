import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
export const Navbar = () => {
  return (
    <nav className="mb-20  flex items-center justify-between py-6">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="flex flex-shrink-0 items-center"
      >
        <img src={logo} alt="logo" className="mx-2 w-30 h-8" />
      </motion.div>
      <div className="margin-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
          _target="blank"
          onClick={() =>
            window.open("https://www.linkedin.com/in/straculencu-mihai/")
          }
        />
        <FaGithub
          className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
          _target="blank"
          onClick={() => window.open("https://github.com/MihaiStraculencu")}
        />
      </div>
    </nav>
  );
};
