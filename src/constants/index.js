import remax from "../assets/remax.jpg";
import sophia from "../assets/sophia.webp";
import raypath from "../assets/raypath.jpg";
import betonix from "../assets/betonix.png";

export const HERO_CONTENT = `
Frontend Developer with expertise in React and Next.js. Proficient in JavaScript, TypeScript, and Tailwind CSS. Specializes in building responsive, user-friendly web applications and optimizing performance. Effectively collaborates with cross-functional teams to tackle technical challenges.
`;

export const ABOUT_ME = `
  <p class="text-xl font-light tracking-tight mb-2">
I'm a frontend developer who loves bringing web applications to life. My toolkit includes <span class="font-bold">React</span>, <span class="font-bold">Next.js</span>, <span class="font-bold">JavaScript</span>, and <span class="font-bold">TypeScript</span>. With these, I create sleek, high-performance websites that work beautifully on any device.
  </p>
  <p class="text-xl font-light tracking-tight mb-2">
    I have a solid grasp of agile methodologies and thrive in team settings. Working with others to solve problems and improve our projects is something I enjoy. I'm always looking for better ways to do things and make sure we deliver top-notch solutions on time and within budget.
  </p>
  <p class="text-xl font-light tracking-tight mb-2">
    If you're searching for a frontend developer who's passionate about user experience and ready to tackle new challenges, I'm your person. Let's collaborate and create something awesome together!
  </p>
`;

export const EXPERIENCE = [
  {
    year: "Apr 2023 - Jul 2023",
    position: "Intern Frontend Developer",
    company: "Ariminum (Cluj-Napoca)",
    description: `
       Developed and maintained the Remax.md website using JavaScript, CSS, HTML, jQuery, and Git.
       Collaborated closely with senior developers to implement new features and optimize performance.
       Gained hands-on experience in responsive web design and cross-browser compatibility.
       Assisted in troubleshooting and debugging issues to improve user experience.
    `,
    technologies: [
      "HTML",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Docker",
      "CSS",
    ],
  },
  {
    year: "Jul 2023 - May 2024",
    position: "Junior Frontend Developer",
    company: "Ariminum (Cluj-Napoca)",
    description: `
       Contributed to development on three major projects using Next.js, Tailwind CSS, TypeScript, and Git.
       Continued to enhance and expand the Remax.md website, incorporating new features and functionalities based on user feedback.
       Implemented modern frontend practices to improve code quality and maintainability.
       Worked in an Agile environment, participating in sprint planning, daily stand-ups, and retrospectives.
    `,
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "Remax.md",
    image: remax,
    description: "A website for Remax, a luxury real estate company.",
    link: "https://remax.md",
    technologies: ["HTML", "Bootstrap", "JavaScript", "jQuery", "Docker"],
  },
  {
    title: "Sophia Houses",
    image: sophia,
    description:
      "Responsive landing page showcasing a construction company's services. Features an interactive contact form for lead generation.",
    link: "https://wrs-site-knbspinnc-ariminumio.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Git"],
  },
  {
    title: "Raypath",
    image: raypath,
    description:
      "Fast-loading website with unique styling. Utilized Next.js, Tailwind CSS, and TypeScript to ensure reliability.",
    link: "https://raypath-site-8jfthsb5m-ariminumio.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Git"],
  },
  {
    title: "Betonix",
    image: betonix,
    description:
      "Client website with a focus on smooth performance and cool design. Built with Next.js and Tailwind CSS.",
    link: "https://betonix-site-gve6d9962-ariminumio.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Git"],
  },
];

export const CONTACT = {
  phoneNo: "+40 726 688 874",
  email: "mihaistraculencu83@mail.com",
};
