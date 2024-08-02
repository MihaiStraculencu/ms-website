import React, { useEffect, useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { motion, useInView } from "framer-motion";
import { Tooltip } from "react-tooltip";

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
    { icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
    { icon: TbBrandNextjs, name: "Next.js", color: "text-neutral-200" },
    { icon: IoLogoJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: TbBrandTypescript, name: "TypeScript", color: "text-blue-400" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-blue-400" },
    { icon: RiBootstrapLine, name: "Bootstrap", color: "text-indigo-400" },
  ];

  return (
    <div className="border-b border-neutral-900 pb-24 z-0" ref={ref}>
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
        className="flex flex-wrap items-center justify-center gap-5"
      >
        {Icons.map(({ icon: Icon, name, color }, index) => (
          <motion.div
            variants={iconVariants(2 + index * 1)}
            initial="initial"
            animate={hasAnimated ? "animate" : "initial"}
            key={index}
            className="rounded-2xl border-4 border-neutral-300 p-4 flex flex-col items-center relative"
          >
            <Icon
              className={`text-7xl ${color}`}
              data-tooltip-id="tooltip"
              data-tooltip-content={name}
            />
          </motion.div>
        ))}
      </motion.div>
      <Tooltip id="tooltip" place="bottom" className="z-50 mt-5" />
    </div>
  );
};

export default Technologies;
