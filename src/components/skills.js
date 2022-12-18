import React  from "react";
import Card from '../assets/card'
import skillData from '../assets/skillData';

const Skills = ({ modeDark }) => {
    return(
        <section id='skills' className="flex flex-wrap flex-col w-full pt-20 pb-20">
            <div className="flex h-3/12 w-full justify-center font-quicksand text-4xl font-semibold mb-10 p-5">What I Can Do For You</div>
            <div className="flex flex-wrap h-9/12 w-full items-center mt-10">
                <div className="flex flex-wrap h-6/12 w-full">
                    <div className="flex flex-wrap w-1/12 text-4xl justify-center items-center"><button  onClick={ () => { document.getElementById('carousal').scrollLeft += -350; } }><i className='fa fa-arrow-circle-left hover:text-green-600 hover:transition-all hover:duration-300' /></button></div>
                    <div id='carousal' className="flex flex-row h-1/4 w-10/12 overflow-auto scroll-smooth">
                        { skillData.map((skill,index) => {
                            return(
                                <div key={index}>
                                    <Card setIcon={skill.icon} setTitle={skill.title} setDetails={skill.details} modeDark={modeDark} />
                                </div>
                            );
                        }) }
                    </div>
                    <div className="flex flex-wrap w-1/12 text-4xl justify-center items-center"><button onClick={ () => { document.getElementById('carousal').scrollLeft += 350; } }><i className='fa fa-arrow-circle-right hover:text-green-600 hover:transition-all hover:duration-300' /></button></div>
                </div>
            </div>
        </section>
    );
};

export default Skills