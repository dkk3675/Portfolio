import React  from "react";
import { useState } from "react";

const Navbar = ({ modeDark,setModeDark }) => {
    const [showScroll,setShowScroll] = useState(false);
    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > 20){
            setShowScroll(true)
        } else if (showScroll && window.scrollY <= 20){
            setShowScroll(false)
        }
    };
    window.addEventListener('scroll',checkScrollTop);
    const scrollBehaviour = (elementID) => {
        document.getElementById(elementID).scrollIntoView({ behavior: "smooth" });
    }
    return(
        <section id='navbar' className="w-[100vw] fixed z-50 opacity-80">
            <header className={ `${ showScroll ? 'bg-green-600 animate-fade-in-up' : 'bg-transparent animate-fade-in-down' } font-quicksand pt-[3vh] pb-[3vh]` }>
                <a href='/' className='hidden md:inline-block md:text-3xl md:font-extrabold md:ml-10'>Divya Kumar Karan</a>
                <ul className="navbar list-none flex flex-wrap justify-center md:inline-flex md:float-right md:mr-10">
                    <li><button onClick={ () => { scrollBehaviour('home'); } }>Home</button></li>
                    <li><button onClick={ () => { scrollBehaviour('about'); } }>About</button></li>
                    <li><button onClick={ () => { scrollBehaviour('skills'); } }>Projects</button></li>
                    <li><button onClick={ () => { scrollBehaviour('contact'); } }>Contact</button></li>
                    <li><button onClick={ () => { modeDark ? setModeDark(false) : setModeDark(true); } } className="border-0 ml-[2vw] mr-0 text-2xl"><i className={ `fa ${ modeDark ? 'fa-sun-o text-white' : 'fa-moon-o text-black' }` } /></button></li>
                </ul>
            </header>
            <footer className={ `text-base fixed right-2 bottom-1 ${ showScroll ? 'block' : 'hidden' } animate-bounce }` }>
                <button onClick={ (e) => { scrollBehaviour('home'); } } className="arrowTop hover:bg-green-600 hover:border-green-600"><i className="fa fa-arrow-up" /></button>
            </footer>
        </section>
    );
};

export default Navbar;