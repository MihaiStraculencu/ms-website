import React, { useEffect, useState } from "react";
import { EXPERIENCE } from "../constants";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="border-b border-neutral-900 pb-20" ref={ref}>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="my-12 text-center text-4xl font-extrabold text-gray-300"
      >
        Experience
      </motion.h2>
      <div className="space-y-8">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl shadow-lg bg-neutral-800/20 backdrop-blur-sm"
          >
            <div className="flex flex-wrap lg:justify-start">
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
                className="w-full lg:w-1/4 mb-4 lg:mb-0"
              >
                <p className="flex justify-start lg:justify-end pr-3 text-md text-gray-300 mt-1">
                  {exp.year}
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
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
