import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import UpButton from "./components/UpButton";
import Personal_Projects from "./components/Personal_Projects";

export default function App() {
  return (
    <div className="text-neutral-300 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>
      <Navbar />
      <div className="container mx-auto px-8">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Personal_Projects />
        <Contact />
        <UpButton />
      </div>
    </div>
  );
}
