import React, { useEffect, useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { SiJquery } from "react-icons/si";
import { motion, useInView } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const Icons = [
    <RiReactjsLine key="react" className="text-7xl text-cyan-400" />,
    <TbBrandNextjs key="nextjs" className="text-7xl text-neutral-400" />,
    <IoLogoJavascript key="javascript" className="text-7xl text-yellow-400" />,
    <SiJquery key="jquery" className="text-7xl text-sky-700" />,
    <TbBrandTypescript key="typescript" className="text-7xl text-blue-400" />,
    <RiTailwindCssFill key="tailwind" className="text-7xl text-blue-500" />,
    <RiBootstrapLine key="bootstrap" className="text-7xl text-indigo-500" />,
  ];

  return (
    <div className="border-b border-neutral-900 pb-24" ref={ref}>
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="my-20 text-center font-extrabold text-gray-300 text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {Icons.map((Icon, index) => (
          <motion.div
            variants={iconVariants(2 + index * 1)}
            initial="initial"
            animate={hasAnimated ? "animate" : "initial"}
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {Icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
