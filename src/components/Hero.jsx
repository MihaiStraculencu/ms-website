import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilePic.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start lg:items-start">
            <h1 className="pb-4 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Straculencu Mihai
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Frontend Developer
            </span>
            <div
              className="my-2 max-w-xl py-6 font-light tracking-tight"
              dangerouslySetInnerHTML={{ __html: HERO_CONTENT }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-3xl" src={profilePic} alt="profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
