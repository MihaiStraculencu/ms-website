import React, { useEffect, useState } from "react";
import { PROJECTS } from "../constants";
import { motion, useInView } from "framer-motion";

const Projects = () => {
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
        initial={{ y: 100, opacity: 0 }}
        animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="my-20 text-center text-4xl font-extrabold text-gray-300"
      >
        Projects
      </motion.h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-neutral-800/30 rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-neutral-700 text-slate-200 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
