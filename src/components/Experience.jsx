import React from "react";
import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="my-12 text-center text-4xl font-extrabold text-gray-300"
      >
        Experience
      </motion.h2>
      <div className="space-y-8">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="p-6 rounded-2xl shadow-lg bg-neutral-800/30"
          >
            <div className="flex flex-wrap lg:justify-start">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/4 mb-4 lg:mb-0"
              >
                <p className="flex justify-start lg:justify-end pr-3 text-md text-gray-300 mt-1">
                  {exp.year}
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-3/4"
              >
                <h6 className="text-2xl font-semibold text-gray-100 mb-2">
                  {exp.position} -{" "}
                  <span className="text-purple-400">{exp.company}</span>
                </h6>
                <ul className="list-disc list-inside text-gray-400 text-sm">
                  {exp.description
                    .trim()
                    .split("\n")
                    .map((line, index) => (
                      <li key={index}>{line.trim()}</li>
                    ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="inline-block bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
