import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export const Navbar = () => {
  return (
    <nav className="mb-20  flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-30 h-8" />
      </div>
      <div className="margin-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          className="hover:cursor-pointer"
          _target="blank"
          onClick={() =>
            window.open("https://www.linkedin.com/in/straculencu-mihai/")
          }
        />
        <FaGithub
          className="hover:cursor-pointer"
          _target="blank"
          onClick={() => window.open("https://github.com/MihaiStraculencu")}
        />
      </div>
    </nav>
  );
};
