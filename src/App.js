import React  from "react";
import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills'
import Contact from './components/contact';
import './App.css';

function App() {
  const [modeDark,setModeDark] = useState(JSON.parse(localStorage.getItem("modeDark")));
  localStorage.setItem("modeDark",JSON.stringify(modeDark));

  const [loading,setLoading] = useState(true);
  const spinner = document.getElementById('preloader');
  if(spinner){
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    },2000);
  }

  return (
    !loading && (<div className={ `${ modeDark ? 'bg-greyish-blue text-white' : 'bg-white text-greyish-blue' } flex flex-wrap flex-col max-w-[100vw]` }>
      {/* navbar */}
      <Navbar modeDark={modeDark} setModeDark={setModeDark} />

      {/* home */}
      <Home />

      {/* about */}
      <About />

      {/* skills */}
      <Skills modeDark={modeDark} />

      {/* contact */}
      <Contact modeDark={modeDark} /> 

    </div>
    )
  );
}

export default App;
