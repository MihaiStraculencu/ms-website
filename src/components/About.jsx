import React, { useEffect, useState } from "react";
import { ABOUT_ME } from "../constants";
import aboutME from "../assets/aboutME.jpg";
import { motion, useInView } from "framer-motion";

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="border-b border-neutral-900 pb-4" ref={ref}>
      <h2 className="my-20 text-center text-4xl font-extrabold text-gray-300">
        About
        <span className="text-neutral-400 font-extrabold"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 content-center"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-3xl"
              src={aboutME}
              alt="aboutme"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
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
