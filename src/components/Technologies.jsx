import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { SiJquery } from "react-icons/si";

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
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {Icons.map((Icon, index) => (
          <div
            key={index}
            className="rounded-2xl border-4  border-neutral-800 p-4"
          >
            {Icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
