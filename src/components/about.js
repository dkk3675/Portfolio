import React  from "react";
import AboutMe from '../assets/about.png'
// import CV from '../assets/CV.pdf'

const About = () => {
    return(
        <section id="about" className='flex flex-wrap flex-row h-full pt-20 pb-20'>
            <div className="flex flex-wrap w-full md:w-2/4 items-center">
                <span className='ml-20 mr-20'><h1 className='font-quicksand text-4xl font-semibold'>About Me</h1>
                <p className='font-mono mt-2'>I am Anha Malik from united State. I am completed my graduation in bachelor degree. Beside this, I am trained in Web Development and love to code using HTML5, CSS3, WordPress & PHP. I am also taking course about Digital Marketing. I am a person who is positive in every aspect of life.</p>
                <a href="/" download="CV - Divya Kumar Karan.pdf"><button className="bg-green-600 p-3 text-sm rounded-full mt-5">Download CV<i className='fa fa-download ml-2' /></button></a></span>
            </div>
            <div className="hidden w-0 md:flex md:flex-wrap md:w-2/4 items-center justify-start p-10">
                <img src={ AboutMe } alt="" className="" />
            </div>
        </section>
    );
};

export default About;