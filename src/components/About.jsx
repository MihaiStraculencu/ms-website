import React from "react";
import { ABOUT_ME } from "../constants";
import aboutME from "../assets/aboutME.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl font-extrabold text-gray-300">
        About
        <span className="text-neutral-400 font-extrabold"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8 content-center"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-3xl" src={aboutME} alt="aboutme" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 content-center"
        >
          <div className="flex justify-center lg:justify-start">
            <p
              className="my-2 max-w-xl py-6"
              dangerouslySetInnerHTML={{ __html: ABOUT_ME }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
