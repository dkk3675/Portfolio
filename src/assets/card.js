import React  from "react";

const Card = ({ setIcon, setTitle, setDetails, modeDark }) => {
    return(
        <div className={ `flex flex-wrap flex-col h-72 w-96 text-white rounded-md pl-5 pr-5 pb-5 mt-5 ml-3 mr-3 hover:mt-0 hover:mb-5 hover:transition-all hover:duration-700 duration-700 hover:shadow-lg ${ modeDark ? 'hover:shadow-white' : 'hover:shadow-black' }`}>
            <div className="flex flex-wrap h-7 bg-transparent pl-12 z-30">
                <div className="flex flex-wrap w-14 h-14 bg-green-600 rounded-full justify-center items-center text-2xl">{ setIcon }</div>
            </div>
            <div className="flex flex-wrap bg-slate-700 h-60 w-70 p-10 items-center overflow-y-auto">
                <span className="">
                    <p className="font-quicksand text-2xl leading-10">{ setTitle }</p>
                    <p className="font-mono text-xs">{ setDetails }</p>
                </span>
            </div>
        </div>
    );
};

export default Card;