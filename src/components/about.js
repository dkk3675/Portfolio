import React  from "react";
import AboutMe from '../assets/about.png'
// import CV from '../assets/CV.pdf'

const About = () => {
    return (
      <section
        id="about"
        className="flex flex-wrap flex-row h-full pt-20 pb-20"
      >
        <div className="flex flex-wrap w-full md:w-2/4 items-center">
          <span className="ml-20 mr-20">
            <h1 className="font-quicksand text-4xl font-semibold">About Me</h1>
            <p className="font-mono mt-2">
              Aspiring Developer adept in bringing forth expertise in the
              design, installation, testing and maintenance of software systems.
              Equipped with a diverse and promising skill set. Proficient in
              various platforms & languages. Experienced with the latest
              cutting-edge development tools and procedures. Able to effectively
              self-manage during independent projects, as well as collaborate as
              part of a productive team.
            </p>
            <a href="/" download="CV - Divya Kumar Karan.pdf">
              <button className="bg-green-600 p-3 text-sm rounded-full mt-5">
                Download CV
                <i className="fa fa-download ml-2" />
              </button>
            </a>
          </span>
        </div>
        <div className="hidden w-0 md:flex md:flex-wrap md:w-2/4 items-center justify-start p-10">
          <img src={AboutMe} alt="" className="" />
        </div>
      </section>
    );
};

export default About;