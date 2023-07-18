import React  from "react";
import Me from '../assets/me.png'

const Home = () => {
    return(
        <section id='home' className="flex flex-wrap flex-row w-full h-full pt-20 pb-20">
            <div className="hidden w-0 md:flex md:flex-wrap md:w-5/12 md:justify-end md:items-end">
                <img src={ Me } alt="" className="md:w-100/2 md:h-full" />
            </div>
            <div className="flex flex-wrap w-full justify-center items-center md:w-7/12">
                <div className='block font-quicksand m-20 md:pl-7'>
                    <span className='bg-green-600 rounded-t-full rounded-bl-full pt-4 pb-4 pl-7 pr-7 font-medium text-sm'>Hello There!</span>
                    <h1 className="font-bold text-5xl mt-8 mb-4">I'M Divya Kumar Karan</h1>
                    <h4 className="font-semibold text-2xl mb-4">Software/Full Stack/Blockchain Developer</h4>
                    <span className='font-mono text-sm'><i className="fa fa-map-marker mr-6" />Nagpur, Maharashtra</span>
                    <br />
                    <span className='font-mono text-sm leading-10'><i className="fa fa-phone mr-5" />(+91) 9637861774</span>
                    <br />
                    <span className='font-mono text-sm'><i className="fa fa-envelope mr-4" />kumar.divya3675@gmail.com</span>
                    <br /> 
                    <ul className='social_media list-none text-base inline-flex mt-5 items-center justify-center'>
                        <li className='m-5'><a href="https://github.com/dkk3675" target="blank" title='GitHub'><span className='hover:bg-purple-900 hover:border-purple-900'><i className="fa fa-github"/></span></a></li>
                        <li className='m-5'><a href="https://www.linkedin.com/in/divya-kumar-karan-849943178/" target="blank" title='LinkedIn'><span className='hover:bg-blue-800 hover:border-blue-800'><i className="fa fa-linkedin" /></span></a></li>
                        <li className='m-5'><a href="https://twitter.com/dkk84266466" target="blank" title='Twitter'><span className='hover:bg-blue-400 hover:border-blue-400'><i className="fa fa-twitter" /></span></a></li>
                        <li className="m-5"><a href="https://www.instagram.com/helloffdheaven/" target="blank" title='Instagram'><span className='hover:bg-pink-500 hover:border-pink-500'><i className="fa fa-instagram" /></span></a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Home;