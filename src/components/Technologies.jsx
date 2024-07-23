import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { SiJquery } from "react-icons/si";
import { motion } from "framer-motion";

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
  const Icons = [
    <RiReactjsLine key="react" className="text-7xl text-cyan-400" />,
    <TbBrandNextjs key="nextjs" className="text-7xl text-neutral-400" />,
    <IoLogoJavascript key="javascript" className="text-7xl text-yellow-400" />,
    <SiJquery key="jquery" className="text-7xl text-sky-700" />,
    <TbBrandTypescript key="nodejs" className="text-7xl text-blue-400" />,
    <RiTailwindCssFill key="tailwind" className="text-7xl text-blue-500" />,
    <RiBootstrapLine key="bootstrap" className="text-7xl text-indigo-500" />,
  ];
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center font-extrabold text-gray-300 text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {Icons.map((Icon, index) => (
          <motion.div
            variants={iconVariants(2 + index * 1)}
            initial="initial"
            animate="animate"
            key={index}
            className="rounded-2xl border-4  border-neutral-800 p-4"
          >
            {Icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
